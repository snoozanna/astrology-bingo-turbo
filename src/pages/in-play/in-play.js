import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import PlayerListing from "./../../components/PlayerListing/PlayerListing";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { PlayersContext } from "./../../contexts/players.context";

const useStyles = makeStyles({
  listGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "15px",
    listStyleType: "none",
    padding: 0,
  },
  playersContainer: {
    flexGrow: 1,
    padding: 15,
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
          <div className={classes.playersContainer}>
            {/* <ul className={classes.listGroup}> */}
            <Grid container spacing={3}>
              {players.map((player) => (
                // console.log("player", player),
                <Grid item xs={6} sm={4}>
                  <PlayerListing player={player} />
                </Grid>
              ))}
            </Grid>
            {/* </ul> */}
          </div>
          <button onClick={() => deleteAllPlayers}>Delete all players</button>
        </main>
      </div>
    </>
  );
}

export default InPlay;
