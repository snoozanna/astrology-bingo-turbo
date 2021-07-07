import React from "react";
import BirthDataForm from "../../components/forms/BirthDataForm/BirthDataForm";
import Header from "./../../components/Header/Header";

function AddChart() {
  return (
    <>
      <div className="App">
        <Header pageName="Add Birth Chart"></Header>
        <main>
          <div className="formContainer">{/* <BirthDataForm /> */}</div>
          <BirthDataForm />
          <div id="formMount"></div>
        </main>
      </div>
    </>
  );
}

export default AddChart;
