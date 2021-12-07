import React, { useContext, useState } from "react";
// import {FBDocToObj} from './../../utils/firebase.utils';
import "./admin.scss";
import Header from "../../components/Header/Header";
import GameDisplayGrid from "../../components/GameDisplay/GameDisplayGrid.js";
import PhraseDisplay from "../../components/PhraseDisplay/PhraseDisplay.js";
import CurrentCall from "../../components/CurrentCall/CurrentCall";
import PreviousCall from "../../components/PreviousCall/PreviousCall";
// import { makeStyles } from "@material-ui/core/styles";
import Report from "../../components/Report/Report.js";

import { GameContext } from "../../contexts/game.context";
// import { PlayersContext } from "../../contexts/players.context";
// import {processCelebs } from './../../utils/player.utils';

// import classes from "*.module.css";

// const useStyles = makeStyles({
//   controlsContainer: {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//   },
// });

function Admin() {
  // const classes = useStyles();
  const {
    pick,
    picks,
    reset,
    removeCelebs,
    celebsIncluded,
    loadCelebs,
    winners,
  } = useContext(GameContext);
  // const { players, matchesVisible } = useContext(PlayersContext);
  const [seeGrid, setSeeGrid] = useState(false);
  const [seeReport, setSeeReport] = useState(false);

  const lastPick = picks[picks.length - 1] || {};
  const previousPick = picks[picks.length - 2] || {};

  const { planet: p = "", sign: s = "" } = lastPick;
  const { planet: pp = "", sign: ps = "" } = previousPick;

  const CallView = () => (
    <div className="generatorContainer">
      <PreviousCall planet={pp} sign={ps} />
      <PhraseDisplay planet={p} sign={s} />
      <CurrentCall planet={p} sign={s} />
    </div>
  );

  return (
    <>
      <div className="App admin">
        <Header pageName="Fig Admin View" />
        <main className="mainContainer">
          <div className="controlsContainer">
            <div className="controlsWrapper">
              <div>Winners: {JSON.stringify(winners)}</div>

              <div>
                <p>Numberof calls: {picks.length}</p>
              </div>
              <div className="controlBtnContainer">
                <div className="controlBtn">
                  <button onClick={celebsIncluded ? removeCelebs : loadCelebs}>
                    {celebsIncluded ? "REMOVE" : "LOAD"} CELEBS
                  </button>
                </div>
                <div className="controlBtn">
                  <button onClick={reset}>RESET GAME</button>
                </div>
              </div>
            </div>
            <div className="callWrapper">
              <div>
                <button className="callBtn" onClick={() => pick()}>
                  CALL
                </button>
              </div>
              <button onClick={() => setSeeGrid(!seeGrid)}>
                SEE {!seeGrid ? "GRID" : "CALL VIEW"}
              </button>
              <button onClick={() => setSeeReport(!seeReport)}>
                {!seeReport ? "SEE REPORT" : "HIDE REPORT"}
              </button>
            </div>
          </div>
          {seeGrid ? <GameDisplayGrid /> : <CallView />}
          {seeReport ? <Report /> : ""}
        </main>
      </div>
    </>
  );
}

export default Admin;
