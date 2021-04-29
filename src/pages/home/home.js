import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import NavIcon from "./../../components/NavIcon/NavIcon";
import PlayerOrbListing from "./../../components/PlayerOrbListing/PlayerOrbListing";
import { makeStyles } from "@material-ui/core/styles";

import { PlayersContext } from "./../../contexts/players.context";

const useStyles = makeStyles({
  listGroup: {
    display: "flex",
    justifyContent: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: 15,
    listStyleType: "none",
    padding: 0,
    width: "100%",
  },

  homeTitle: {
    fontSize: "18rem",
    position: "absolute",
    color: "hsla(313, 96%, 98%, 0.4)",
    margin: "auto",
  },
});

function Home() {
  const classes = useStyles();
  const { players } = useContext(PlayersContext);
  return (
    <>
      <div className="App">
        <NavIcon pageName="Homepage" />
        <main>
          <h1 className={classes.homeTitle}>ASTROLOGY BINGO</h1>
          <div className="playerOrbContainer">
            <ul className={classes.listGroup}>
              {players.map((player) => (
                // console.log("player", player),
                <PlayerOrbListing player={player} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
