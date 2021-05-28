import React, { useContext /* useState,  useEffect */ } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ErrorBoundary from "./../../ErrorBoundary/ErrorBoundary";
import {
  Button,
  TextField,
  // Select,
  // MenuItem,
  // InputLabel,
  LinearProgress,
} from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import { AuthContext } from "../../../contexts/auth.context";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  formRow: {
    // padding: theme.spacing(1),
    margin: `0 auto ${theme.spacing(1)}px`,
    maxWidth: "50%",
  },
  errorMessage: {
    color: "red",
  },
}));

function LoginForm() {
  const classes = useStyles();
  const { login, loading, error } = useContext(AuthContext);
  const defaultValues = {
    email: "",
    password: "",
  };

  const schema = yup.object().shape({
    email: yup.string().email(),
    password: yup.string().required().min(2).max(20),
  });

  const { handleSubmit, control, reset, errors, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  // console.log("errors", errors);
  
  const onSubmit = async (creds) => {
    console.log("form submit");
    console.log("creds", creds);
    login(creds);
    reset(defaultValues);
  };

  return (
    <ErrorBoundary>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <p className="error">{error.message || error.status}</p>}
        {loading && <LinearProgress />}
        <div className={classes.formRow}>
        <Controller
            as={TextField}
            type="email"
            // disabled
            error={!!errors?.email}
            helperText={errors?.email?.message}
            id="email"
            name="email"
            label="Email"
            control={control}
            rules={{ required: true }}
            className={classes.formRowItem}
          />
        </div>
        <div className={classes.formRow}>
          <Controller
            as={TextField}
            type="password"
            // disabled
            error={!!errors?.password}
            helperText={errors?.password?.message}
            id="password"
            name="password"
            label="Passord"
            control={control}
            rules={{ required: true }}
            className={classes.formRowItem}
          />
        </div>

        <div className={classes.formRow}>
          <Button onClick={() => reset(defaultValues)}>Reset</Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={!formState.isValid}
          >
            Login
          </Button>
        </div>
      </form>
    </ErrorBoundary>
  );
}

export default LoginForm;
