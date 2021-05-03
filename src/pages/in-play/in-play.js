import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import PlayerListing from "./../../components/PlayerListing/PlayerListing";
import { makeStyles } from "@material-ui/core/styles";

import { PlayersContext } from "./../../contexts/players.context";

const useStyles = makeStyles({
  listGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "15px",
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
        <Header pageName="Birth Charts in play" />
        <main>
          <div className="playerContainer">
            <ul className={classes.listGroup}>
              {players.map((player) => (
                // console.log("player", player),
                <PlayerListing player={player} />
              ))}
            </ul>
          </div>
          <button onClick={() => deleteAllPlayers}>Delete all players</button>
        </main>
      </div>
    </>
  );
}

export default InPlay;
