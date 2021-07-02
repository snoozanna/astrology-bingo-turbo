import React, { useContext } from "react";
import { AuthContext } from "./../../contexts/auth.context";
import { Redirect } from "react-router-dom";
// import {
//   Button,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from "@material-ui/core";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
import Header from "./../../components/Header/Header.js";
// import PageFrame from "../../components/page-frame/page-frame";
import LoginFrom from "../../components/forms/login-form/login-form";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     display: 'flex',
//   },
//   controls: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

function Login() {
  // const classes = useStyles();
  const { user } = useContext(AuthContext);

  if (user) return <Redirect to="/admin" />;

  return (
    <div className="App">
      <Header />
      <main>
        {/* <PageFrame> */}
        <h1>Login</h1>
        <LoginFrom />
        {/* </PageFrame> */}
      </main>
    </div>
  );
}

export default Login;
