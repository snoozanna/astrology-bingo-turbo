import React from "react";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay//Grid/GameDisplayGrid";

function PublicDisplay() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <h1>Public Display</h1>
        </main>
        <GameDisplayGrid />
      </div>
    </>
  );
}

export default PublicDisplay;
