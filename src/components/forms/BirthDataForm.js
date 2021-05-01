import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useParams } from "react-router-dom";

import { PlayersContext } from "./../../contexts/players.context";

import { GEO_API_KEY, TIME_API_KEY } from "./../../config";
import { makeCall } from "../../utils/utils";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
    justifyContent: "center",
    marginBlockEnd: 30,
  },
  formRowItem: {
    marginInlineEnd: 10,
  },
  container: {
    // display: "flex",
    // flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const schema = yup.object().shape({
  firstName: yup.string().required().min(2).max(20),
  lastName: yup.string().required().min(2).max(20),
  email: yup.string().email().required(),
});

const emptyValues = {
  firstName: "",
  lastName: "",
  email: "",
  dtob: "",
};

function BirthDataForm({ initialValues }) {
  const classes = useStyles();
  const { addToast } = useToasts();
  const [populated, setPopulated] = useState(false);

  const { addPlayer, deletePlayer, deleteAllPlayers } = useContext(
    PlayersContext,
  );

  const { handleSubmit, setValue, errors, control, reset, formState } = useForm(
    {
      resolver: yupResolver(schema),
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues,
    },
  );

  if (initialValues && !populated) {
    reset(initialValues);
    setPopulated(true);
  }

  getGeo(data);
    // getGeo(formValues);
};

  // FIND UTC OFFSET

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

  //FINAL SUBMIT
  const onSubmit = async (formValues) => {
    // console.log("formValues", formValues);

    // formValues._id = id; // pulled from the URL using router 'useParams' hook

    // if (populated) {
    //   const updates = {};
    //   for (const key in initialValues) {
    //     if (initialValues.hasOwnProperty(key)) {
    //       if (initialValues[key] !== formValues[key] && key[0] !== "_") {
    //         updates[key] = formValues[key];
    //       }
    //     }
    //   }
    //   console.log("updates", updates);
    //   updatePlayer(id, updates);
    // } else {
    //   addPlayer(formValues);
    // }
    // reset(emptyValues);
    addPlayer(formValues);
    reset(emptyValues);
  };

  return (
    <>
      <form
        className={classes.container}
        id="locationForm"
        onSubmit={handleSubmit(locationSubmit)}
        noValidate
      >
        <div className={classes.formRow}>
          <h2 className={classes.formRowItem}>Where were you born?</h2>
          {/* <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" ref={register} />
              {errors.firstName && "Title name is required"} */}
          <Controller
            as={TextField}
            error={!!errors.location}
            helperText={errors.location && errors.location.message}
            id="location"
            name="location"
            label="Location"
            control={control}
            rules={{ required: true }}
            className={(classes.button, classes.formRowItem)}
          />

          <Button
            onClick={() => locationSubmit(locationForm)}
            type="submit"
            variant="contained"
            color="primary"
            className={(classes.button, classes.formRowItem)}
            // disabled={!formState.isValid}
          >
            Find Lat/Long
          </Button>
        </div>
        <div id="location-choices"></div>
      </form>

      <form
        className={classes.container}
        id="mainForm"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={classes.formRow}>
          {/* <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" ref={register} />
              {errors.firstName && "Title name is required"} */}
          <Controller
            as={TextField}
            // disabled
            error={!!errors.firstName}
            helperText={errors.firstName && errors.firstName.message}
            id="firstName"
            name="firstName"
            label="First Name"
            control={control}
            rules={{ required: true }}
            className={classes.formRowItem}
          />
          {/* <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" ref={register} />
              {errors.lastName && "Title name is required"} */}
          <Controller
            as={TextField}
            // disabled
            error={!!errors.lastName}
            helperText={errors.lastName && errors.lastName.message}
            name="lastName"
            id="lastName"
            label="Last Name"
            control={control}
            rules={{ required: true }}
            className={classes.formRowItem}
          />

          {/* <label htmlFor="email">Email</label>
              <input type="email" name="email" ref={register} />
              {errors.email && "Title name is required"} */}
          <Controller
            as={TextField}
            // disabled
            error={!!errors.email}
            helperText={errors.email && errors.email.message}
            type="email"
            id="email"
            name="email"
            label="Email"
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className={classes.formRow}>
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
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            rules={{ required: true }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() =>
              findUTCOffset(
                dateTimeInput.value,
                latitudeInput.value,
                longitudeInput.value,
              )
            }
          >
            Find UTC offset
          </Button>
        </div>
        <div className={classes.formRow}>
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
            className={classes.textField}
            control={control}
            rules={{ required: true }}
          />

          {/* <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" ref={register} />
              {errors.firstName && "Title name is required"} */}
          <Controller
            as={TextField}
            // disabled
            error={!!errors.latitude}
            helperText={errors.latitude && errors.latitude.message}
            id="latitude"
            type="number"
            name="latitude"
            placeholder="Latitude"
            className={classes.textField}
            control={control}
            rules={{ required: true }}
          />

          {/* <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" ref={register} />
              {errors.firstName && "Title name is required"} */}
          <Controller
            as={TextField}
            // disabled
            error={!!errors.longitude}
            helperText={errors.longitude && errors.longitude.message}
            id="longitude"
            name="longitude"
            placeholder="Longitude"
            type="number"
            className={classes.textField}
            control={control}
            rules={{ required: true }}
          />
        </div>

        <div className={classes.formRow}>
          <Button onClick={() => reset(emptyValues)}>Reset</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={!formState.isValid}
          >
            {populated ? "Update" : "Add"} Person
          </Button>
        </div>
      </form>
    </>
  );
}

export default BirthDataForm;
