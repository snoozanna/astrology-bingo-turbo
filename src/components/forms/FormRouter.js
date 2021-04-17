import React from "react";
import "./FormStyles.scss";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Result from "./Result";

// import "./FormStyles.scss";

createStore({
  data: {
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    latitude: "",
    longitude: "",
    datetime: "",
    utcoffset: "",
  },
});

const Form = () => {
  return (
    <StateMachineProvider>
      <h1>Add yourself to the game</h1>

      <Router>
        <Route exact path="/add-birth-chart" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  );
};

export default Form;
