import React, { useContext } from "react";
import "./public-display.scss";
import Header from "./../../components/Header/Header";
// import GameDisplayGrid from "./../../components/GameDisplay/GameDisplayGrid.js";
import CurrentCall from "./../../components/CurrentCall/CurrentCall.js";
import PreviousCall from "../../components/PreviousCall/PreviousCall";
import { GameContext } from "./../../contexts/game.context";

function PublicDisplay() {
  const { picks } = useContext(GameContext);
  console.log("picks", picks);
  
  const lastPick = picks[picks.length - 1];
  const previousPick = picks[picks.length - 2];

  const {planet:p = '', sign:s = ''} = lastPick;
  const {planet:pp = '', sign:ps = ''} = previousPick;

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
