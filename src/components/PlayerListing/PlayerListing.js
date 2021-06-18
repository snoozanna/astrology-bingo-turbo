import React, { useContext, useState } from "react";
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
    width: "50%",
    margin: "auto",
    backgroundColor: "#fff",
    border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    padding: "20px",
  },
});

const PlayerListing = ({ player }) => {
  console.log(player);
  const classes = useStyles();
  // const { alreadyCalled } = useContext(GameContext);
  const { deletePlayer } = useContext(PlayersContext);
  const [isOn, toggleIsOn] = useToggle();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalText = (
    <div className={classes.paper}>
      <div className="nameContainer">
        <h3 className="firstName">
          {player.firstName}
          {player.lastName}
        </h3>
      </div>
      <ChartImage player={player.chartData} />
      <p>{player.chartData.birthday}</p>
      <p>{player.chartData.time}</p>
      <p>
        lat: {player.chartData.latitude.toFixed(2)} long:{" "}
        {player.chartData.longitude.toFixed(2)}
      </p>
    </div>
  );

  const removeOutline = () => {
    const outline = document.getElementById("chartTemplate");
    console.log(outline);
    // const children = outline.childNodes;
    // for (const child of children) {
    //   if (!child.classList.contains("sign")) {
    //     child.classList.toggle("transparent");
    //   } else {
    //     return;
    //   }
    // }
  };

  removeOutline();

  const printChart = () => {
    window.print();
  };

  return (
    <div key={player._id} className="listGroupItem">
      <div className="nameContainer">
        <h3 className="firstName">
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
      <div className="btnContainer">
        <Button
          className="deleteBtn btn"
          onClick={() => deletePlayer(player._id)}
        >
          &times;
        </Button>
        <Button className="btn" onClick={() => toggleIsOn()}>
          Toggle Chart
        </Button>
        <Button className="btn" onClick={() => handleOpen()}>
          Print
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {modalText}
        {/* <ChartImage player={player.chartData} /> */}
      </Modal>
    </div>
  );
};

export default PlayerListing;
