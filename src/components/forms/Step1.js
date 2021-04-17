import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction.js";
import { Button, TextField } from "@material-ui/core";
import { useToasts } from "react-toast-notifications";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required().min(2).max(20),
  lastName: yup.string().required().min(2).max(20),
  email: yup.string().email().required(),
});

const Step1 = (props) => {
  const [populated, setPopulated] = useState(false);
  const { register, handleSubmit, errors, control } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { actions, state } = useStateMachine({ updateAction });
  console.log(state.data);
  const onSubmit = (data) => {
    console.log("data", data);
    actions.updateAction(data);
    props.history.push("./step2");
  };

  //TODO do I need to add in 'Inital values thing?'
  // if (initialValues && !populated) {
  //   reset(initialValues);
  //   setPopulated(true);
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>What's your name?</h2>

      <div className="formRow">
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
        />

        {/* <Controller
          render={({ field }) => <TextField {...field} />}
          name="TextField"
          control={control}
        /> */}

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

      <input type="submit" />
    </form>
  );
};

export default withRouter(Step1);
