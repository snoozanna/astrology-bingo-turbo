import React, { useContext, useState } from "react";
// import {FBDocToObj} from './../../utils/firebase.utils';
import "./public-grid.scss";
import Header from "../../components/Header/Header";
import GameDisplayGrid from "../../components/GameDisplay/GameDisplayGrid.js";

function PublicGrid() {
  return (
    <>
      <div className="App grid">
        <Header pageName="Public Grid" />
        <main className="mainContainer">
          <GameDisplayGrid />
        </main>
      </div>
    </>
  );
}

export default PublicGrid;
