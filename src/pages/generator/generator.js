import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay/Grid/GameDisplayGrid.js";
import PhraseDisplay from "../../components/GameDisplay/PhraseDisplay";

import { GameContext } from "./../../contexts/game.context";

function Generator() {
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

  return (
    <>
      <div className="App">
        <Header pageName="Generator (Fig admin view)" />
        <main>
          <PhraseDisplay planet={p} sign={s} />
          {/* <PhraseDisplay planet={"Jupiter"} sign={"Saturn"} /> */}
          <button onClick={() => pick()}>CALL</button>
          <GameDisplayGrid />
        </main>
      </div>
    </>
  );
}

export default Generator;
