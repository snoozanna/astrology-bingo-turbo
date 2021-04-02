import React from "react";
import BirthDataForm from "../../components/forms/BirthDataForm";
import Header from "./../../components/Header/Header";

function AddChart() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <main>
          <h1>Add Birth Chart</h1>
          <BirthDataForm />
        </main>
      </div>
    </>
  );
}

export default AddChart;
