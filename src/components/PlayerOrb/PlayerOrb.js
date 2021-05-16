import React, { useContext } from "react";
import List from "@material-ui/core/List";
import SignSymbol from "../ChartList/SignSymbol";

import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
// import { Dimensions } from "react-native";

import { BirthChartContext } from "../../contexts/birthchart.context";

const useStyles = makeStyles({
  ownerName: {
    position: "absolute",
    fontSize: "3rem",
    fontWeight: "bold",
    maxWidth: "min-content",
    display: "flex",
    left: 120,
    top: 60,
    zIndex: 1,
    color: "ivory",
  },
  orb: {
    border: "black solid 1px",
    padding: "80px",
    borderRadius: "50%",
    position: "relative",
    backgroundColor: "teal",
  },

  signSymbol: {
    width: 45,
    margin: "10px auto",
  },

  listGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "40px 15px",
  },

  orbSymbol: {
    marginInlineEnd: 10,
  },
});

const chooseColor = () => {
  const colors = [
    "crimson",
    "teal",
    "coral",
    "hotpink",
    "skyblue",
    "salmon",
    "seagreen",
    "peachpuff",
  ];
  const random = Math.floor(Math.random() * colors.length);

  return colors[random];
};

// chooseScale
const chooseScale = () => {
  const randomNumber = Math.random();
  // console.log(randomNumber);
  return randomNumber;
};

// chooseX

const chooseX = () => {
  // const randomX = Math.floor(Math.random() * window.screen.availWidth);
  const randomX = Math.floor(Math.random() * 100);
  return randomX;
};

// chooseY

const chooseY = () => {
  // const randomY = Math.floor(Math.random() * window.screen.availHeight);
  const randomY = Math.floor(Math.random() * 100);
  return randomY;
};

const chooseDelay = () => {
  // const randomY = Math.floor(Math.random() * window.screen.availHeight);
  const randomDelay = Math.floor(Math.random() * 300);
  return randomDelay;
};
// console.log("screen height", window.screen.availHeight);

const PlayerOrb = ({ player }) => {
  const { BirthChart } = useContext(BirthChartContext);
  // console.log("alreadyCalled", alreadyCalled);

  //orbs randomly change size, colour, move around
  const props = useSpring({
    config: { duration: 6000 },
    loop: { reverse: true },
    delay: chooseDelay(),
    from: {
      opacity: 0,
      rotateZ: 360,
      x: chooseX(),
      y: chooseY(),
      backgroundColor: chooseColor(),
      transform: `scale(${chooseScale()})`,
    },
    to: {
      opacity: 0.8,
      rotateZ: 0,
      x: chooseX(),
      y: chooseY(),
      backgroundColor: chooseColor(),
      transform: `scale(${chooseScale()})`,
    },
  });
  const classes = useStyles();
  console.log("player", player);
  return (
    <>
      <animated.div style={props} className={classes.orb}>
        <div className={classes.ownerName}>
          <p>{player.ownerName}</p>
        </div>
        <List className={classes.listGroup}>
          {Object.entries(player).map(([key, value]) => {
            if (!BirthChart.planets.includes(key)) {
              return null;
            }
            // console.log("player", player);
            const sign = value;
            const planet = key;
            // console.log("planet,sign", planet, sign);

            // console.log(checkCall(planet, sign));
            return (
              <>
                <SignSymbol
                  key={sign}
                  sign={sign}
                  planet={planet}
                  className={classes.orbSymbol}
                  fill={"hsla(254, 16%, 84%, 30%"}
                />
              </>
            );
          })}
        </List>
      </animated.div>
    </>
  );
};

export default PlayerOrb;

// If player object contains a planet
//>> if alreadyCalled array contains anything
//>>>> If planet / sign combo is in alreadyCalled
// >> return sign symbol with pink background
//>>>> else return normal sign symbol
// else return nothing
