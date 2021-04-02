import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import PlayerListing from "./../../components/PlayerListing/PlayerListing";
import { makeStyles } from "@material-ui/core/styles";

import { PlayersContext } from "./../../contexts/players.context";

const useStyles = makeStyles({
  listGroup: {
    display: "flex",
    // gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: 15,
    listStyleType: "none",
    padding: 0,
  },
});

function InPlay() {
  const { players, deleteAllPlayers } = useContext(PlayersContext);
  const classes = useStyles();

  return (
    <>
      <div className="App">
        <Header />
        <main>
          <h1>Birth Charts in play</h1>
          <ul className={classes.listGroup}>
            {players.map((player) => (
              // console.log("player", player),
              <PlayerListing player={player} />
            ))}
          </ul>
          <button onClick={() => deleteAllPlayers}>Delete all players</button>
        </main>
      </div>
    </>
  );
}

export default InPlay;
