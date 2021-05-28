import React, { useContext } from "react";
import "./generator.scss";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay/GameDisplayGrid.js";
import PhraseDisplay from "../../components/PhraseDisplay/PhraseDisplay.js";
import CurrentCall from "./../../components/CurrentCall/CurrentCall";
import PreviousCall from "../../components/PreviousCall/PreviousCall";
import { makeStyles } from "@material-ui/core/styles";

import { GameContext } from "./../../contexts/game.context";

// import classes from "*.module.css";

const useStyles = makeStyles({
  controlsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

function Generator() {
  const classes = useStyles();
  const { pick, alreadyCalled } = useContext(GameContext);
  let p = "Mars";
  let s = "Leo";

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

  let pp = "";
  let ps = "";
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
        <Header pageName="Generator (Fig admin view)" />
        <main className="generatorContainer">
          {/* <div className="controlsContainer"> */}
          {/* <PhraseDisplay planet={"Jupiter"} sign={"Saturn"} /> */}
          <div className="callBtnContainer">
            <button className="callBtn" onClick={() => pick()}>
              CALL
            </button>
          </div>
          <div className="resetBtn">
            <button>RESET GAME</button>
          </div>

          <PreviousCall planet={pp} sign={ps} />
          <PhraseDisplay planet={p} sign={s} />
          {/* </div> */}
          {/* <div className="callsContainer"> */}
          <CurrentCall planet={p} sign={s} />

          {/* </div> */}
        </main>
        <GameDisplayGrid />
      </div>
    </>
  );
}

export default Generator;
