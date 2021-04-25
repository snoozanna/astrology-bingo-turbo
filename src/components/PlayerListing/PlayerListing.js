import React, { useContext } from "react";
import "./PlayerListing.scss";
import ChartList from "./../../components/ChartList/ChartList";
import ChartImage from "./../ChartImage/ChartImage";
import IconList from "./../../components/IconList/IconList";
import { makeStyles } from "@material-ui/core/styles";
import { PlayersContext } from "./../../contexts/players.context";
import { UtilitiesContext } from "./../../contexts/utilities.context";
import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  listGroupItem: {
    padding: "7px 15px 15px",
    border: "1px black solid",
    borderRadius: 15,
    backgroundColor: "hsla(19, 90%, 62%, 50%)",
    minWidth: "45%",
    maxWidth: "45%",
  },
});

const PlayerListing = ({ player }) => {
  const classes = useStyles();
  const { alreadyCalled } = useContext(GameContext);
  // console.log(alreadyCalled);
  const { deletePlayer } = useContext(PlayersContext);
  const { useToggle } = useContext(UtilitiesContext);
  const [isOn, toggleIsOn] = useToggle();

  return (
    <>
      <li key={player._id} className={classes.listGroupItem}>
        <div className="nameContainer">
          <h3 className="first name">{player.firstName}</h3>
          <h3 className="second name">{player.lastName}</h3>
        </div>
        <p>
          Chart:
          {isOn ? (
            <ChartImage player={player.chartData} />
          ) : (
            <IconList player={player.chartData} />
          )}
        </p>
        <button onClick={() => deletePlayer(player._id)}>Delete</button>
        <button onClick={() => toggleIsOn()}>Show Chart</button>
        <button onClick={() => {}}>Print Chart</button>
      </li>
    </>
  );
};

export default PlayerListing;
