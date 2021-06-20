import React, { useContext, useState } from "react";
// import {FBDocToObj} from './../../utils/firebase.utils';
import "./generator.scss";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay/GameDisplayGrid.js";
import PhraseDisplay from "../../components/PhraseDisplay/PhraseDisplay.js";
import CurrentCall from "./../../components/CurrentCall/CurrentCall";
import PreviousCall from "../../components/PreviousCall/PreviousCall";
// import { makeStyles } from "@material-ui/core/styles";

import { GameContext } from "./../../contexts/game.context";
import { PlayersContext } from "./../../contexts/players.context";
import {processCelebs, removeCelebs} from './../../utils/player.utils';

// import classes from "*.module.css";

// const useStyles = makeStyles({
//   controlsContainer: {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
// });

function Generator() {
  // const classes = useStyles();
  const { pick, picks, reset } = useContext(GameContext);
  const { players } = useContext(PlayersContext);
  const [seeGrid, setSeeGrid] = useState(false);

  const lastPick = picks[picks.length - 1] || {};
  const previousPick = picks[picks.length - 2] || {};

  const { planet: p = "", sign: s = "" } = lastPick;
  const { planet: pp = "", sign: ps = "" } = previousPick;

  const CallView = () => (
    <div className="generatorContainer">
      <div className="callBtnContainer">
        <button className="callBtn" onClick={() => pick()}>
          CALL
        </button>
      </div>
      <PreviousCall planet={pp} sign={ps} />
      <PhraseDisplay planet={p} sign={s} />
      <CurrentCall planet={p} sign={s} />
    </div>
  );

  return (
    <>
      <div className="App">
        <Header pageName="Generator (Fig admin view)" />
        <main>
          <div className="controlsContainer">
            <div className="resetBtn">
              <button onClick={() => removeCelebs(players)}>REMOVE CELEBS</button>
            </div>
            <div className="resetBtn">
              <button onClick={processCelebs}>LOAD CELEBS</button>
            </div>
            <div className="resetBtn">
              <button onClick={reset}>RESET GAME</button>
            </div>
            <div className="resetBtn">
              <button onClick={() => setSeeGrid(!seeGrid)}>
                SEE {!seeGrid ? "GRID" : "CALL VIEW"}
              </button>
            </div>
          </div>
          {/* <PhraseDisplay planet={"Jupiter"} sign={"Saturn"} /> */}

          {seeGrid ? <GameDisplayGrid /> : <CallView />}
        </main>
      </div>
    </>
  );
}

export default Generator;
