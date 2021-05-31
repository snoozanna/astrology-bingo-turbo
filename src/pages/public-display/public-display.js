import React, { useContext } from "react";
import "./public-display.scss";
import Header from "./../../components/Header/Header";
// import GameDisplayGrid from "./../../components/GameDisplay/GameDisplayGrid.js";
import CurrentCall from "./../../components/CurrentCall/CurrentCall.js";
import PreviousCall from "../../components/PreviousCall/PreviousCall";
import { GameContext } from "./../../contexts/game.context";

function PublicDisplay() {
  const { alreadyCalled } = useContext(GameContext);
  console.log("alreadyCalled", alreadyCalled);
  // debugger;

  const getPlanet = (alreadyCalled) => {
    let lastPlanet = "";
    if (alreadyCalled.length > 0) {
      lastPlanet = alreadyCalled[alreadyCalled.length - 1].planet;
    }
    return lastPlanet;
  };
  const p = getPlanet(alreadyCalled);

  const getSign = (alreadyCalled) => {
    let lastSign = "";
    if (alreadyCalled.length > 0) {
      lastSign = alreadyCalled[alreadyCalled.length - 1].sign;
    }
    return lastSign;
  };
  const s = getSign(alreadyCalled);

  const getPreviousPlanet = (alreadyCalled) => {
    let previousPlanet = "";
    if (alreadyCalled.length > 1) {
      // debugger;
      previousPlanet = alreadyCalled[alreadyCalled.length - 2].planet;
    }
    return previousPlanet;
  };
  const pp = getPreviousPlanet(alreadyCalled);

  const getPreviousSign = (alreadyCalled) => {
    let previousSign = "";
    if (alreadyCalled.length > 1) {
      previousSign = alreadyCalled[alreadyCalled.length - 2].sign;
    }
    return previousSign;
  };
  const ps = getPreviousSign(alreadyCalled);

  return (
    <>
      <div className="App">
        <Header pageName="Game" />
        <main className="gameContainer">
          {/* <GameDisplayGrid /> */}
          <CurrentCall planet={p} sign={s} />
          {ps && pp && <PreviousCall planet={pp} sign={ps} />}
        </main>
      </div>
    </>
  );
}

export default PublicDisplay;
