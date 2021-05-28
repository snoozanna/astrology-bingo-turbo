import React, { useContext } from "react";
import "./PlayerListing.scss";
// import ChartList from "./../../components/ChartList/ChartList";
import ChartImage from "./../ChartImage/ChartImage";
import IconList from "./../../components/IconList/IconList";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PlayersContext } from "./../../contexts/players.context";
import { useToggle } from "./../../utils/utils";
// import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  block: {
    display: 'block',
  },
  playerContainer: {
    padding: "0 15px",
  },
  listGroupItem: {
    border: "1px black solid",
    borderRadius: 15,
    backgroundColor: "hsla(19, 90%, 62%, 50%)",
  },
  nameContainer: {
    display: "flex",
    justifyContent: "center",
    fontSize: "1.3rem",
  },
  firstName: {
    marginInlineEnd: 4,
  },
  button: {
    marginInlineEnd: 5,
  },
  deleteBtn: {
    backgroundColor: "#f12e40ad",
  },
});

const PlayerListing = ({ player }) => {
  const classes = useStyles();
  // const { alreadyCalled } = useContext(GameContext);
  const { deletePlayer } = useContext(PlayersContext);
  const [isOn, toggleIsOn] = useToggle();

  return (
    <>
      <li key={player._id} className={"listGroupItem"}>
        <div className={"nameContainer"}>
          <h3 className={"firstName"}>
          <span className={classes.block}>{player.firstName}</span>
          <span className={classes.block}>{player.lastName}</span>
          </h3>
        </div>
        <div>
          Chart:
          {isOn ? (
            <ChartImage player={player.chartData} />
          ) : (
            <IconList player={player.chartData} />
          )}
        </div>
        <div className={"btnContainer"}>
          <Button
            className={"deleteBtn btn"}
            onClick={() => deletePlayer(player._id)}
          >
            &times;
          </Button>
          <Button className={"btn"} onClick={() => toggleIsOn()}>
            Toggle Chart
          </Button>
          <Button className={"btn"} onClick={() => {}}>
            Print
          </Button>
        </div>
      </li>
    </>
  );
};

export default PlayerListing;
