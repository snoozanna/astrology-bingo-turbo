import React from "react";
import BirthDataForm from "../../components/forms/BirthDataForm";
import Header from "./../../components/Header/Header";
import Step1 from "./../../components/forms/Step1";
import Form from "./../../components/forms/FormRouter";
import "./add-birth-chart.scss";

function AddChart() {
  return (
    <>
      <div className="App">
        <Header pageName="Add Birth Chart"></Header>
        <main>
          <div className="formContainer">{/* <BirthDataForm /> */}</div>
          <Form />
          <div id="formMount"></div>
        </main>
      </div>
    </>
  );
}

export default AddChart;
