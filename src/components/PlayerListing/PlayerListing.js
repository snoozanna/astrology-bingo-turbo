import React, { useContext, useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./PlayerListing.scss";
// import ChartList from "./../../components/ChartList/ChartList";
import ChartImage from "./../ChartImage/ChartImage";
import IconList from "./../../components/IconList/IconList";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PlayersContext } from "./../../contexts/players.context";
import { useToggle } from "./../../utils/utils";
// import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  block: {
    display: "block",
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

const PlayerListing = ({ player }) => {
  const classes = useStyles();
  // const { picks } = useContext(GameContext);
  const { deletePlayer } = useContext(PlayersContext);
  const [chartVisible, toggleChart] = useToggle();
  const [open, setOpen] = useState(false);
  const [outlineVisibility, toggleOutlineVisibility] = useToggle();

  const chartRef = useRef();

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const { birthday, time, latitude, longitude } = player.chartData;

  const modalText = (
    <div className={classes.paper}>
      <div className="nameContainer">
        <h3>
          {player.firstName}
          {player.lastName}
        </h3>
      </div>
      <ChartImage player={player} />
      <dl>
        <dt>Birthday:</dt>
        <dd>{birthday}</dd>
        <dt>Time:</dt>
        <dd>{time}</dd>
        <dt>Lat:</dt>
        <dd>{Number(latitude).toFixed(2)}</dd>
        <dt>Long:</dt>
        <dd>{Number(longitude).toFixed(2)}</dd>
      </dl>
    </div>
  );

  return (
    <div key={player._id} className="listGroupItem">
      <div className="nameContainer">
        <h3 className="firstName">
          <span className={classes.block}>{player.firstName}</span>
          <span className={classes.block}>{player.lastName}</span>
        </h3>
      </div>
      <div>
        {chartVisible ? (
          <ChartImage
            player={player}
            ref={chartRef}
            showOutline={outlineVisibility}
          />
        ) : (
          <IconList player={player} />
        )}
      </div>
      <div className="btnContainer">
        <Button
          className="deleteBtn btn"
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
        {!chartVisible && (
          <Button className="btn" onClick={() => showModal()}>
            See Details
          </Button>
        )}
      </div>
      <Modal
        open={open}
        onClose={hideModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalText}
        {/* <ChartImage player={player} /> */}
      </Modal>
    </div>
  );
};

export default PlayerListing;
