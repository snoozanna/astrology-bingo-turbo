import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import GameDisplayGrid from "./../../components/GameDisplay/GameDisplayGrid.js";
import PhraseDisplay from "../../components/PhraseDisplay/PhraseDisplay.js";
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

  return (
    <>
      <div className="App">
        <Header pageName="Generator (Fig admin view)" />
        <main>
          <div className={classes.controlsContainer}>
            <PhraseDisplay planet={p} sign={s} />
            {/* <PhraseDisplay planet={"Jupiter"} sign={"Saturn"} /> */}
            <button onClick={() => pick()}>CALL</button>
          </div>
          <GameDisplayGrid />
        </main>
      </div>
    </>
  );
}

export default Generator;
