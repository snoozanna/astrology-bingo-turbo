import React, { useContext } from "react";
import NavIcon from "./../../components/NavIcon/NavIcon";
import { makeStyles } from "@material-ui/core/styles";

import { processCelebs } from './../../utils/player.utils';
import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  listGroup: {
    display: "flex", // ?? <-- display: grid; surely?
    justifyContent: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: '1rem',
    listStyleType: "none",
    padding: '0',
    width: "100%",
  },

  homeTitle: {
    fontSize: "15rem",
    position: "absolute",
    color: "hsla(313, 96%, 98%, 0.4)",
    margin: "auto",
  },
});

function Controls() {
  const classes = useStyles();
  const { populateFirebase, reset } = useContext(GameContext);
  return (
    <>
      <div className="App">
        <NavIcon pageName="Controls" />
        <main>
          <h1 className={classes.homeTitle}>Controls</h1>
          <div>
            <button onClick={populateFirebase}>Populate</button>
            <button onClick={reset}>Reset</button>
            <button onClick={processCelebs}>Add Celebs</button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Controls;
