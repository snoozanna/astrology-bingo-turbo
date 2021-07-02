import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import PlayerListing from "./../../components/PlayerListing/PlayerListing";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./in-play.scss";
import { PlayersContext } from "./../../contexts/players.context";
import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  playersContainer: {
    flexGrow: 1,
  },
});

function InPlay() {
  const {
    players,
    deleteAllPlayers,
    toggleSort,
    sorted,
    toggleMatchVisibility,
    matchesVisible,
  } = useContext(PlayersContext);
  const { picks } = useContext(GameContext);
  const classes = useStyles();

  // useEffect(() => {
  //   markPlayers(players);
  // }, []);

  return (
    <div className="App inplay">
      <Header pageName="Birth Charts in play" />
      <main>
        <div className="controlsContainer inplay">
          <div className="controlsWrapper inplay">
            <button disabled={!picks.length} onClick={toggleSort}>
              {sorted ? "un" : ""}sort
            </button>
            <button disabled={!picks.length} onClick={toggleMatchVisibility}>
              {matchesVisible ? "Hide" : "Show"} matches
            </button>
          </div>
        </div>
        <div className={classes.playersContainer}>
          {/* {JSON.stringify(picks.map(({_id}) => _id))} */}
          <Grid container spacing={3} component="ul">
            {players.map(
              (player) => (
                (
                  <Grid key={player._id} item xs={6} sm={4} component="li">
                    <PlayerListing
                      player={player}
                      matchesVisible={matchesVisible}
                    />
                  </Grid>
                )
              ),
            )}
          </Grid>
        </div>
        <button onClick={deleteAllPlayers}>Delete all players</button>
      </main>
    </div>
  );
}

export default InPlay;
