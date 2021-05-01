import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction.js";
import { Button, TextField } from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import { TIME_API_KEY } from "./../../config";

import { PlayersContext } from "./../../contexts/players.context";
import { makeCall } from "../../utils/utils";

const Step3 = (props) => {
  const { register, setValue, handleSubmit, errors, control } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const { addToast } = useToasts();

  const onSubmit = (data) => {
    console.log("data", data);
    actions.updateAction(data);
    props.history.push("./result");
  };

  //INPUT
  const utcInput = document.getElementById("utcoffset");
  // console.log("state", state);

  function findUTCOffset(datetime, lat, long) {
    const timestamp = Date.parse(datetime) / 1000;
    const fetchURLUTC = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=${timestamp}&key=${TIME_API_KEY}`;
    getUTC(fetchURLUTC, renderUTC);
  }

  function renderUTC(report, mount = utcInput) {
    if (!report) {
      utcInput.innerHTML = "No UTC report";
      return;
    }
    const offset = (report.rawOffset += report.dstOffset);
    const offsetUTC = Math.floor(offset / 60 / 60);
    setValue("utcoffset", offsetUTC);
  }

  async function getUTC(currentURL, handler = renderUTC) {
    try {
      const response = await fetch(currentURL);
      if (!response.ok) throw response;
      const data = await response.json();
      console.log("utc data", data);
      handler(data);
    } catch (err) {
      addToast({
        html: `<h2>Error getting UTC</h2><p>${err.message}</p>`,
        classes: ["toast", "error"],
      });
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>When were you born?</h2>

      <Controller
        as={TextField}
        // disabled
        error={!!errors.datetime}
        helperText={errors.datetime && errors.email.datetime}
        id="dtob"
        label="Date and time of birth"
        type="datetime-local"
        name="datetime"
        defaultValue="1989-12-05T10:25"
        control={control}
        InputLabelProps={{
          shrink: true,
        }}
        rules={{ required: true }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          findUTCOffset(
            "1989-12-05T10:25",
            state.data.latitude,
            state.data.longitude
          )
        }
      >
        Find UTC offset
      </Button>

      {/* <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" ref={register} />
              {errors.firstName && "Title name is required"} */}
      <Controller
        as={TextField}
        // disabled
        error={!!errors.utcoffset}
        helperText={errors.utcoffset && errors.utcoffset.message}
        id="utcoffset"
        type="number"
        name="utcoffset"
        placeholder="UTC offset"
        control={control}
        rules={{ required: true }}
      />
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step3);
