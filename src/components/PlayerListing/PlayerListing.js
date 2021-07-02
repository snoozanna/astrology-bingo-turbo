import React, { useContext, useRef } from "react";
import ReactToPrint from "react-to-print";
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
    backgroundColor: "rgb(237, 105, 136)",
    border: "1px solid black",
  },
  paper: {
    // position: "absolute",
    width: "40%",
    margin: "auto",
    backgroundColor: "#fff",
    border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    padding: "20px",
  },
});

const PlayerListing = ({ player, matchesVisible }) => {
  const classes = useStyles();
  const { deletePlayer } = useContext(PlayersContext);
  const [chartVisible, toggleChart] = useToggle();
  const [outlineVisibility, toggleOutlineVisibility] = useToggle();

  const chartRef = useRef();

  return (
    <div
      key={player._id}
      className={`listGroupItem ${
        matchesVisible && player.matches.length >= 12 ? "winner" : ""
      }`}
    >
      <div className="nameContainer">
        <h3>
          <span className="block">{player.firstName}</span>
          <span className="block">{player.lastName}</span>
        </h3>
      </div>
      <div>
        {chartVisible ? (
          <ChartImage
            player={player}
            ref={chartRef}
            showOutline={outlineVisibility}
            matchesVisible={matchesVisible}
          />
        ) : (
          <IconList player={player} matchesVisible={matchesVisible} />
        )}
      </div>
      <div className="btnContainer">
        <Button
          className={classes.deleteBtn}
          onClick={() => deletePlayer(player._id)}
        >
          &times;
        </Button>
        <Button className="btn" onClick={() => toggleChart()}>
          Toggle Chart
        </Button>
        {chartVisible && (
          <Button className="btn" onClick={() => toggleOutlineVisibility()}>
            Toggle Outline
          </Button>
        )}
        {chartVisible && (
          <ReactToPrint
            trigger={() => <Button className="btn">Print</Button>}
            content={() => chartRef.current}
          />
        )}
      </div>
    </div>
  );
};

export default PlayerListing;
