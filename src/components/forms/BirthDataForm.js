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
import { UtilitiesContext } from "../../contexts/utilities.context";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
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
  // let { id } = useParams();
  const [populated, setPopulated] = useState(false);

  const { addPlayer, deletePlayer, deleteAllPlayers } = useContext(
    PlayersContext,
  );
  const { makeCall } = useContext(UtilitiesContext);

  const { handleSubmit, errors, control, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  if (initialValues && !populated) {
    reset(initialValues);
    setPopulated(true);
  }

  // FORMS

  const locationForm = document.getElementById("locationForm");
  const mainForm = document.getElementById("mainForm");

  //INPUTS
  const geoMountLat = document.getElementById("latitude");
  const geoMountLong = document.getElementById("longitude");
  const dateTimeInput = document.getElementById("dtob");

  const locationSubmit = async (locationForm) => {
    console.log("lf values", locationForm.location.value);
    console.log("loc submit function fires");
    // const data = locationForm.location.value;
    const FD = new FormData(locationForm);
    const data = Object.fromEntries(FD);
    // console.log("data", data);
    locationForm.setAttribute("disabled", "disabled");
    console.log(locationForm.elements);
    for (const el of locationForm.elements) {
      el.setAttribute("disabled", "disabled");
      el.classList.add("disabled");
      el.classList.remove("valid");
      el.value = "";
      el.blur();
    }

    getGeo(data);
    // getGeo(formValues);
  };

  async function getGeo(placename) {
    console.log("placename", placename);
    const GEO_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${placename.location}&key=${GEO_API_KEY}`;
    console.log(GEO_API_URL);

    const { results } = await makeCall(GEO_API_URL);

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

      geoMountLat.value = lat;
      geoMountLong.value = lng;

      locationForm.reset();
      locationForm.setAttribute("disabled", "disabled");
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

  // FIND UTC OFFSET

  async function findUTCOffset(datetime, lat = "52", long = "14") {
    const utcInput = document.getElementById("utcoffset");
    const timestamp = Date.parse(datetime) / 1000;
    // console.log("timestamp", timestamp);
    const fetchURLUTC = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=${timestamp}&key=${TIME_API_KEY}`;
    console.log("fetchURLUTC", fetchURLUTC);
    // getUTC(fetchURLUTC, renderUTC);
    const { results } = await makeCall(fetchURLUTC);
    console.log("results utc", results);
    if (!results) {
      utcInput.innerHTML = "No UTC report";
      return;
    }
    const offset = (results.rawOffset += results.dstOffset);
    console.log("offset", offset);
    const offsetUTC = Math.floor(offset / 60 / 60);
    console.log("offsetUTC", offsetUTC);
    utcInput.value = offsetUTC;
  }

  //FINAL SUBMIT
  const onSubmit = async (formValues) => {
    console.log("formValues", formValues);
    console.log("on submit function fires");
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
      <h2>Where were you born?</h2>
      <form
        className={(classes.container, "location-form")}
        id="locationForm"
        onSubmit={handleSubmit(locationSubmit)}
        noValidate
      >
        <div className={classes.formRow}>
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
          />
        </div>
        <Button
          onClick={() => locationSubmit(locationForm)}
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          // disabled={!formState.isValid}
        >
          Find Lat/Long
        </Button>
        <div id="location-choices"></div>
      </form>

      <form
        className={(classes.container, "main-form")}
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
            error={!!errors.lastName}
            helperText={errors.lastName && errors.lastName.message}
            id="firstName"
            name="firstName"
            label="First Name"
            control={control}
            rules={{ required: true }}
          />
        </div>
        <div className={classes.formRow}>
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
          />
        </div>
        <div className={classes.formRow}>
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
          <Button onClick={() => findUTCOffset(dateTimeInput.value)}>
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
        </div>
        <div className={classes.formRow}>
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
        </div>
        <div className={classes.formRow}>
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
