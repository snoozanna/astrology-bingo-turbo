import React, { useContext } from "react";
import ChartList from "./../../components/ChartList/ChartList";
import { makeStyles } from "@material-ui/core/styles";
import { PlayersContext } from "./../../contexts/players.context";

const useStyles = makeStyles({
  listGroupItem: {
    padding: "7px 15px 15px",
    border: "1px black solid",
    borderRadius: 15,
    backgroundColor: "hsla(19, 90%, 62%, 50%)",
    minWidth:"20%",
    maxWidth: "45%",
  },
});

const PlayerListing = (player) => {
  const classes = useStyles();
  const { deletePlayer } = useContext(PlayersContext);
  const playerData = player.player;

  return (
    <>
      <li key={playerData._id} className={classes.listGroupItem}>
        <p>First name: {playerData.firstName}</p>
        <p>Last name: {playerData.lastName}</p>
        <p>Email: {playerData.email}</p>
        <p>
          Chart:
          <ChartList data={playerData.chart} />
        </p>
        <button onClick={() => deletePlayer(playerData._id)}>Delete</button>
        <button onClick={() => {}}>Show Chart</button>
        <button onClick={() => {}}>Print Chart</button>
      </li>
    </>
  );
};

export default PlayerListing;
