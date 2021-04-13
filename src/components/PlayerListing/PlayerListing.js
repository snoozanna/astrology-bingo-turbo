import React, { useContext } from "react";
import "./PlayerListing.scss";
import ChartList from "./../../components/ChartList/ChartList";
import { makeStyles } from "@material-ui/core/styles";
import { PlayersContext } from "./../../contexts/players.context";

const useStyles = makeStyles({
  listGroupItem: {
    padding: "7px 15px 15px",
    border: "1px black solid",
    borderRadius: 15,
    backgroundColor: "hsla(19, 90%, 62%, 50%)",
    minWidth: "20%",
    maxWidth: "45%",
  },
});

const PlayerListing = ({ player }) => {
  const classes = useStyles();
  console.log("player", JSON.stringify(player));
  const { deletePlayer } = useContext(PlayersContext);

  return (
    <>
      <li key={player._id} className={classes.listGroupItem}>
        <div className="nameContainer">
          <h3 className="first name">{player.firstName}</h3>
          <h3 className="second name">{player.lastName}</h3>
        </div>
        <p>
          Chart:
          <ChartList player={player.chartData} />
        </p>
        <button onClick={() => deletePlayer(player._id)}>Delete</button>
        <button onClick={() => {}}>Show Chart</button>
        <button onClick={() => {}}>Print Chart</button>
      </li>
    </>
  );
};

export default PlayerListing;
