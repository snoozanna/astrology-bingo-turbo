import React from "react";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay/Grid/GameDisplayGrid.js";
import PhraseDisplay from "../../components/GameDisplay/PhraseDisplay";

function Generator() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <h1>Generator (Fig admin view)</h1>
        </main>
        <PhraseDisplay planet="Pluto" sign="Leo" />
        <GameDisplayGrid />
      </div>
    </>
  );
}

export default Generator;
