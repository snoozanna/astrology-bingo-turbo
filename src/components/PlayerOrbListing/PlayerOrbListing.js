import React, { useContext } from "react";
import ChartImage from "../ChartImage/ChartImage";
import PlayerOrb from "../PlayerOrb/PlayerOrb";

import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

import { PlayersContext } from "../../contexts/players.context";
import { UtilitiesContext } from "../../contexts/utilities.context";
import { GameContext } from "../../contexts/game.context";

const useStyles = makeStyles({
  listGroupItem: {
    padding: "7px 15px 15px",
    border: "1px black solid",
    borderRadius: 15,
    backgroundColor: "hsla(19, 90%, 62%, 50%)",
    maxWidth: "45%",
  },

  playerContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  nameContainer: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.3rem",
  },

  firstName: {
    marginInlineEnd: 4,
  },
});

const PlayerOrbListing = ({ player }) => {
  const classes = useStyles();
  const { alreadyCalled } = useContext(GameContext);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });
  return (
    <>
      <PlayerOrb player={player.chartData} />
    </>
  );
};

export default PlayerOrbListing;
