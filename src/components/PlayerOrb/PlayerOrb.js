import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SignSymbol from "../ChartList/SignSymbol";

import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";
// import { Dimensions } from "react-native";

import { BirthChartContext } from "../../contexts/birthchart.context";
import { GameContext } from "../../contexts/game.context";

const useStyles = makeStyles({
  orb: {
    border: "black solid 1px",
    padding: "80px",
    borderRadius: "50%",
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
  console.log(colors[random]);
  return colors[random];
};

// chooseScale
const chooseScale = () => {
  const randomNumber = Math.random();
  // console.log(randomNumber);
  return randomNumber;
};

// chooseX
console.log("screen width", window.screen.availWidth);

const chooseX = () => {
  // const randomX = Math.floor(Math.random() * window.screen.availWidth);
  const randomX = Math.floor(Math.random() * 100);
  console.log("random x ", randomX);
  return randomX;
};

chooseX();

// chooseY

const chooseY = () => {
  // const randomY = Math.floor(Math.random() * window.screen.availHeight);
  const randomY = Math.floor(Math.random() * 100);
  console.log("random x ", randomY);
  return randomY;
};
// console.log("screen height", window.screen.availHeight);

const PlayerOrb = ({ player }) => {
  const { BirthChart } = useContext(BirthChartContext);
  // console.log("alreadyCalled", alreadyCalled);

  //orbs randomly change size, colour, move around
  const props = useSpring({
    config: { duration: 6000 },
    loop: { reverse: true },
    delay: 200,
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

  return (
    <>
      <animated.div style={props} className={classes.orb}>
        <List className={classes.listGroup}>
          {Object.entries(player).map(([key, value]) => {
            if (!BirthChart.planets.includes(key)) {
              return null;
            }

            const sign = value;
            const planet = key;
            // console.log("planet,sign", planet, sign);

            // console.log(checkCall(planet, sign));
            return (
              <>
                <SignSymbol
                  sign={sign}
                  planet={planet}
                  className={classes.orbSymbol}
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
