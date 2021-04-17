import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction.js";
import { Button, TextField } from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import { GEO_API_KEY } from "./../../config";

import { UtilitiesContext } from "../../contexts/utilities.context";

const Step2 = (props) => {
  const { register, setValue, handleSubmit, errors, control } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const { makeCall } = useContext(UtilitiesContext);
  const { addToast } = useToasts();

  const onSubmit = (data) => {
    console.log("data", data);
    actions.updateAction(data);
    props.history.push("./step3");
  };

  const locationSubmit = () => {
    const locationInput = document.getElementById("location");
    const placename = locationInput.value;
    console.log("location input ", placename);
    //  setValue("location", placename)
    console.log(getGeo(placename));
  };

  async function getGeo(placename) {
    const GEO_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${placename.location}&key=${GEO_API_KEY}`;
    console.log(GEO_API_URL);

    const { results } = await makeCall(GEO_API_URL);
    console.log("results", results);

    // Show a list or warn no match and reset
    if (!results?.length) {
      addToast({
        html: `<h2>Error</h2><p>${placename} Not found</p>`,
        classes: ["toast", "error"],
      });
      return;
    }

    const choicesMount = document.getElementById("location-choices");
    const select = document.createElement("select");
    const holdingOption = document.createElement("option");
    holdingOption.textContent = "Choose your location";
    holdingOption.setAttribute("disabled", "disabled");
    holdingOption.setAttribute("selected", "selected");
    holdingOption.setAttribute("value", "");
    select.append(holdingOption);

    for (const [idx, val] of results.entries()) {
      const opt = document.createElement("option");
      opt.textContent = val.formatted_address;
      opt.setAttribute("value", idx);
      select.append(opt);
    }

    select.addEventListener("change", (e) => {
      const {
        geometry: {
          location: { lat, lng },
        },
      } = results[e.target.value];

      setValue("latitude", lat);
      setValue("longitude", lng);

      console.log(lat, lng);

      // locationForm.reset();
      // locationForm.setAttribute("disabled", "disabled");
    });

    choicesMount.innerHTML = "";
    choicesMount.append(select);

    const lbl = document.createElement("label");
    lbl.textContent = "Choose your location";

    choicesMount.append(lbl);

    // const elems = document.querySelectorAll("select");
    // const options = {};
    // M.FormSelect.init(elems, options);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="locationForm">
      <h2>Where were you born?</h2>

      <Controller
        as={TextField}
        error={!!errors.location}
        helperText={errors.location && errors.location.message}
        id="location"
        name="location"
        label="Location"
        control={control}
        rules={{ required: true }}
      />

      <Button
        // onClick={() => locationSubmit(locationForm)} //TODO
        onClick={() => {
          locationSubmit();
        }}
        // type="submit"
        variant="contained"
        color="primary"
        // disabled={!formState.isValid}
      >
        Find Lat/Long
      </Button>

      <div id="location-choices"></div>
      <Controller
        as={TextField}
        disabled
        error={!!errors.latitude}
        helperText={errors.latitude && errors.latitude.message}
        id="latitude"
        type="number"
        name="latitude"
        placeholder="Latitude"
        control={control}
        rules={{ required: true }}
      />
      <Controller
        as={TextField}
        disabled
        error={!!errors.longitude}
        helperText={errors.longitude && errors.longitude.message}
        id="longitude"
        name="longitude"
        placeholder="Longitude"
        type="number"
        control={control}
        rules={{ required: true }}
      />
      <input type="submit" />
    </form>
  );
};

export default withRouter(Step2);
