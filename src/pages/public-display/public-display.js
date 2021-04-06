import React from "react";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay//Grid/GameDisplayGrid";

function PublicDisplay() {
  return (
    <>
      <div className="App">
        <Header pageName="Public Display" />
        <main>
        <GameDisplayGrid />
        </main>
      </div>
    </>
  );
}

export default PublicDisplay;
