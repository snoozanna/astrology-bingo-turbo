import React, { useContext } from "react";
import "./public-display.scss";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay/GameDisplayGrid.js";
import CurrentCall from "./../../components/CurrentCall/CurrentCall.js";
import PreviousCall from "../../components/PreviousCall/PreviousCall";
import { GameContext } from "./../../contexts/game.context";

function PublicDisplay() {
  const { alreadyCalled } = useContext(GameContext);
  let p = "";
  let s = "";

  const getPlanet = (alreadyCalled) => {
    if (alreadyCalled.length > 0) {
      // debugger;
      let lastPlanet = alreadyCalled[alreadyCalled.length - 1].planet;
      p = lastPlanet;
      return p;
    }
    return p;
  };
  getPlanet(alreadyCalled);

  const getSign = (alreadyCalled) => {
    if (alreadyCalled.length > 0) {
      let lastSign = alreadyCalled[alreadyCalled.length - 1].sign;
      s = lastSign;
    }
    return s;
  };
  getSign(alreadyCalled);

  let pp = "Mars";
  let ps = "Leo";
  const getPreviousPlanet = (alreadyCalled) => {
    if (alreadyCalled.length > 1) {
      // debugger;
      let previousPlanet = alreadyCalled[alreadyCalled.length - 2].planet;
      pp = previousPlanet;
      return pp;
    }
    return pp;
  };
  getPreviousPlanet(alreadyCalled);

  const getPreviousSign = (alreadyCalled) => {
    if (alreadyCalled.length > 1) {
      let previousSign = alreadyCalled[alreadyCalled.length - 2].sign;
      ps = previousSign;
    }
    return ps;
  };
  getPreviousSign(alreadyCalled);
  return (
    <>
      <div className="App">
        <Header pageName="Game" />
        <main className="gameContainer">
          {/* <GameDisplayGrid /> */}
          <CurrentCall planet={p} sign={s} />
          <PreviousCall planet={pp} sign={ps} />
        </main>
      </div>
    </>
  );
}

export default PublicDisplay;
