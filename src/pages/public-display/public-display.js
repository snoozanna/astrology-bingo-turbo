import React, { useContext } from "react";
import "./public-display.scss";
import Header from "./../../components/Header/Header";
// import GameDisplayGrid from "./../../components/GameDisplay/GameDisplayGrid.js";
import CurrentCall from "./../../components/CurrentCall/CurrentCall.js";
import PreviousCall from "../../components/PreviousCall/PreviousCall";
import { GameContext } from "./../../contexts/game.context";

function PublicDisplay() {
  const { picks } = useContext(GameContext);
  // console.log("picks", picks);

  // TODO

  if (picks.length === 0) {
    return (
      <>
        <div className="App display">
          <Header pageName="" />
          <main className="gameContainer "></main>
        </div>
      </>
    );
  } else if (picks.length === 1) {
    const lastPick = picks[picks.length - 1];
    const { planet: p = "", sign: s = "" } = lastPick;
    return (
      <>
        <div className="App display">
          <Header pageName="Game" />
          <main className="gameContainer ">
            <CurrentCall planet={p} sign={s} />
          </main>
        </div>
      </>
    );
  } else {
    const lastPick = picks[picks.length - 1];
    const { planet: p = "", sign: s = "" } = lastPick;
    const previousPick = picks[picks.length - 2];
    const { planet: pp = "", sign: ps = "" } = previousPick;
    return (
      <>
        <div className="App display">
          <Header pageName="Game" />
          <main className="gameContainer ">
            {/* <GameDisplayGrid /> */}
            <CurrentCall planet={p} sign={s} />
            {ps && pp && <PreviousCall planet={pp} sign={ps} />}
          </main>
        </div>
      </>
    );
  }
}

export default PublicDisplay;
