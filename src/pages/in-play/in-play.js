import React, { useContext, useEffect } from "react";
import Header from "./../../components/Header/Header";
import PlayerListing from "./../../components/PlayerListing/PlayerListing";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { PlayersContext } from "./../../contexts/players.context";
import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  playersContainer: {
    flexGrow: 1,
    padding: 15,
  },
});

function InPlay() {
  const { players, deleteAllPlayers, toggleSort, sorted, toggleMatchVisibility, matchesVisible } =
    useContext(PlayersContext);
  const { picks } = useContext(GameContext);
  const classes = useStyles();  

  // useEffect(() => {
  //   markPlayers(players);
  // }, []);

  return (
    <div className="App">
      <Header pageName="Birth Charts in play" />
      <main>
        <header>
          <button disabled={!picks.length} onClick={toggleSort}>{sorted ? 'un' : ''}sort</button>
          <button disabled={!picks.length} onClick={toggleMatchVisibility}>{matchesVisible ? 'Hide' : 'Show'} matches</button>
        </header>
        <div className={classes.playersContainer}>
        {JSON.stringify(picks.map(({_id}) => _id))}
          <Grid container spacing={3} component="ul">
            {players.map((player) => (
              <Grid key={player._id} item xs={6} sm={4} component="li">
                <PlayerListing player={player} matchesVisible={matchesVisible} />
              </Grid>
            
            ))}
          </Grid>
        </div>
        <button onClick={deleteAllPlayers}>Delete all players</button>
      </main>
    </div>
  );
}

export default InPlay;
