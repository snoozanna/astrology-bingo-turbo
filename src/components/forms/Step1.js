import React from "react";
import { useForm, Controller } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction.js";
import { TextField } from "@material-ui/core";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required().min(2).max(20),
  lastName: yup.string().required().min(2).max(20),
  email: yup.string().email().required(),
});

const Step1 = (props) => {
  // const [populated, setPopulated] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
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
    <>
      <p>hello</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>What's your name?</h2>

        <div className="formRow">
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                id="firstName"
                label="First Name"
                error={!!errors.firstName}
                helperText={errors.firstName && errors.firstName.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.lastName}
                helperText={errors.lastName && errors.lastName.message}
                id="lastName"
                label="Last Name"
              />
            )}
          />
        </div>

        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
              type="email"
              id="email"
              label="Email"
            />
          )}

          // disabled
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default withRouter(Step1);
