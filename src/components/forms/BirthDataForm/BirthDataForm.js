import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { getGeo, findUTCOffset } from "./../../../utils/astro-api.utils";
import * as yup from "yup";
import { useParams } from "react-router-dom";

import { PlayersContext } from "../../../contexts/players.context";

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
  fieldset: {
    border: "none",
  },
  legend: {
    textIndent: "-99999px",
  },
  select: {
    width: 200,
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
  locationSearchTerm: yup.string().required().min(2).max(50),
  utcoffset: yup.string().required().min(1).max(3),
  datetime: yup.string().required().min(2).max(20),
  location: yup.string().required().min(2).max(30),
  latitude: yup.string().required().min(2).max(20),
  longitude: yup.string().required().min(2).max(20),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  utcoffset: "",
  datetime: "",
  locationSearchTerm: "",
  location: "",
  latitude: "",
  longitude: "",
};

function BirthDataForm({ initialValues }) {
  const classes = useStyles();
  const { addToast } = useToasts();
  const { id } = useParams();
  const { addPlayer, updatePlayer } = useContext(PlayersContext);

  const defaultState = {
    populated: false,
    possibleLocations: [],
    chosenLocation: "",
    personalDetailsComplete: false,
    locationComplete: false,
    dobComplete: false,
  };

  const [state, setState] = useState(defaultState);

  const updateState = (newState) => setState({ ...state, ...newState });

  const {
    populated,
    possibleLocations,
    // chosenLocation,
    personalDetailsComplete,
    locationComplete,
    // dobComplete,
  } = state;

  const {
    handleSubmit,
    setValue,
    getValues,
    errors,
    control,
    reset,
    formState,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  const resetForm = (overrides = {}) => {
    reset(defaultValues);
    updateState({
      personalDetailsComplete: false,
      locationComplete: false,
      ...overrides,
    });
  };

  if (initialValues && !populated) {
    resetForm(initialValues);
    updateState({ populated: true });
  }

  const getLocations = async () => {
    const locationSearchTerm = getValues("locationSearchTerm");
    // console.log('locationSearchTerm', locationSearchTerm);
    try {
      const { results: places } = await getGeo(locationSearchTerm);
      console.log("places", places);
      updateState({ possibleLocations: places });
    } catch (err) {
      addToast({
        html: `<h2>Error retrieving location</h2><p>${err.message}</p>`,
        classes: ["toast", "error"],
      });
    }
  };

  const getUTC = async () => {
    try {
      const offset = await findUTCOffset(
        getValues("datetime"),
        getValues("latitude"),
        getValues("longitude")
      );
      console.log("offset", offset);
      setValue("utcoffset", offset, {
        shouldDirty: true,
        shouldValidate: true,
      });
    } catch (err) {
      addToast({
        html: `<h2>Error getting UTC</h2><p>${err.message}</p>`,
        classes: ["toast", "error"],
      });
    }
  };

  const chooseLocation = (loc_id) => {
    console.log("loc_id", loc_id);
    const selectedLocation = possibleLocations.find((possLoc) => {
      console.log("possLoc", possLoc);
      return possLoc.place_id === loc_id;
    });
    const {
      geometry: {
        location: { lat, lng },
      },
    } = selectedLocation;
    console.log("selectedLocation", selectedLocation);

    const placename = selectedLocation.formatted_address;

    setValue("location", loc_id, { shouldDirty: true, shouldValidate: true });
    setValue("placename", placename);
    setValue("latitude", lat, { shouldDirty: true, shouldValidate: true });
    setValue("longitude", lng, { shouldDirty: true, shouldValidate: true });

    updateState({
      locationComplete: true,
      // chosenLocation: selectedLocation,
    });
  };

  //FINAL SUBMIT
  const onSubmit = async (formValues) => {
    console.log("formValues", formValues);

    if (id) {
      formValues._id = id; // pulled from the URL using router 'useParams' hook
    }

    if (populated) {
      const updates = {};
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          if (initialValues[key] !== formValues[key] && key[0] !== "_") {
            updates[key] = formValues[key];
          }
        }
      }
      console.log("updates", updates);
      updatePlayer(id, updates);
    } else {
      addPlayer(formValues);
    }
    resetForm();
  };

  useEffect(() => {
    const { dirtyFields } = formState;

    if (!personalDetailsComplete) {
      if (
        dirtyFields.firstName &&
        !errors.firstName &&
        dirtyFields.lastName &&
        !errors.lastName &&
        dirtyFields.email &&
        !errors.email
      ) {
        console.log("setting pd true");
        updateState({ personalDetailsComplete: true });
      }
    }
  });

  // Form Parts

  const personalDetailsFields = () => (
    <fieldset id="personal-details" className={classes.fieldset}>
      <legend className={classes.legend}>Personal Details</legend>
      <Typography component="h2" className={classes.formRowItem}>
        Personal Details
      </Typography>
      <div className={classes.formRow}>
        <Controller
          as={TextField}
          // disabled
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          id="firstName"
          name="firstName"
          label="First Name"
          control={control}
          rules={{ required: true }}
          className={classes.formRowItem}
        />

        <Controller
          as={TextField}
          // disabled
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          name="lastName"
          id="lastName"
          label="Last Name"
          control={control}
          rules={{ required: true }}
          className={classes.formRowItem}
        />

        <Controller
          as={TextField}
          // disabled
          error={!!errors.email}
          helperText={errors.email?.message}
          type="email"
          id="email"
          name="email"
          label="Email"
          control={control}
          rules={{ required: true }}
        />
      </div>
    </fieldset>
  );

  const locationFields = () => (
    <fieldset className={classes.fieldset}>
      <legend className={classes.legend}>Location</legend>
      <Typography component="h2" className={classes.formRowItem}>
        Where were you born?
      </Typography>
      <div className={classes.formRow}>
        <Controller
          as={TextField}
          error={!!errors.locationSearchTerm}
          helperText={errors.locationSearchTerm?.message}
          id="locationSearchTerm"
          name="locationSearchTerm"
          label="Choose your location"
          control={control}
          rules={{ required: true }}
          className={(classes.button, classes.formRowItem)}
        />

        <Button
          onClick={getLocations}
          type="button"
          variant="contained"
          color="primary"
          className={(classes.button, classes.formRowItem)}
          // disabled={(!dirtyFields.locationSearchTerm && errors.locationSearchTerm)}
        >
          Find Lat/Long
        </Button>
      </div>
      <div className={classes.formRow}>
        <FormControl disabled={!possibleLocations.length}>
          <Controller
            render={() => (
              <Select
                defaultValue=""
                onChange={(e) => chooseLocation(e.target.value)}
              >
                {/* <MenuItem value="">
              <em>None</em>
            </MenuItem> */}
                {possibleLocations.length
                  ? possibleLocations.map(({ formatted_address, place_id }) => (
                      <MenuItem key={place_id} value={place_id}>
                        {formatted_address}
                      </MenuItem>
                    ))
                  : null}
              </Select>
            )}
            error={!!errors.locationSearchTerm}
            id="location"
            name="location"
            label="Location"
            // fullWidth
            control={control}
            rules={{ required: true }}
            className={classes.select}
            helperText={""}
          />

          <InputLabel id="location" className={classes.errorMessage}>
            {errors.location?.message}
          </InputLabel>
        </FormControl>
      </div>

      <div className={classes.formRow}>
        <Controller
          as={TextField}
          error={!!errors.latitude}
          helperText={errors.latitude && errors.latitude.message}
          id="latitude"
          type="number"
          name="latitude"
          placeholder="Latitude"
          className={classes.textField}
          control={control}
          rules={{ required: true }}
          readOnly
        />

        <Controller
          as={TextField}
          error={!!errors.longitude}
          helperText={errors.longitude && errors.longitude.message}
          id="longitude"
          name="longitude"
          placeholder="Longitude"
          type="number"
          className={classes.textField}
          control={control}
          rules={{ required: true }}
          readOnly
        />
      </div>
    </fieldset>
  );

  const dobFields = () => (
    <fieldset id="dob-details" className={classes.fieldset}>
      <legend className={classes.legend}>Date of birth</legend>
      <Typography component="h2" className={classes.formRowItem}>
        When were your born?
      </Typography>
      <div className={classes.formRow}>
        <Controller
          as={TextField}
          // disabled
          error={!!errors.datetime}
          helperText={errors.datetime}
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
          onClick={getUTC}
        >
          Find UTC offset
        </Button>

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
    </fieldset>
  );

  return (
    <form
      className={classes.container}
      // id="locationForm"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      {personalDetailsFields()}
      {personalDetailsComplete ? locationFields() : null}
      {personalDetailsComplete && locationComplete ? dobFields() : null}

      <div className={classes.formRow}>
        <Button onClick={resetForm}>Reset</Button>
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
  );
}

export default BirthDataForm;
