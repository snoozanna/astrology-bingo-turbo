import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay/Grid/GameDisplayGrid.js";
import PhraseDisplay from "../../components/GameDisplay/PhraseDisplay";

import { GameContext } from "./../../contexts/game.context";

function Generator() {
  const { pick } = useContext(GameContext);
  return (
    <>
      <div className="App">
        <Header pageName="Generator (Fig admin view)" />
        <main>
          <PhraseDisplay planet="Pluto" sign="Leo" />
          <button onClick={() => pick()}>CALL</button>
          <GameDisplayGrid />
        </main>
      </div>
    </>
  );
}

export default Generator;
