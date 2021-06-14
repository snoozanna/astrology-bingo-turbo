import React, { useContext } from "react";
import {FBDocToObj} from './../../utils/firebase.utils';
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
  const { pick, alreadyCalled:fbac, reset } = useContext(GameContext);

  const alreadyCalled = fbac.map(FBDocToObj);

  const getPlanet = (alreadyCalled) => {
    let lastPlanet = ""
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
            <button onClick={reset}>RESET GAME</button>
          </div>

          {ps && pp && <PreviousCall planet={pp} sign={ps} />}
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
