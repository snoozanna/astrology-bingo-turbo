import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SignSymbol from "../ChartList/SignSymbol";

import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

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

chooseColor();

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
      y: -50,
      backgroundColor: chooseColor(),
      transform: "translate3d(0px,0,0) scale(0.8)",
    },
    to: {
      opacity: 1,
      rotateZ: 0,
      y: 150,
      backgroundColor: " hsla(46, 96%, 84%, 1.0) ",
      transform: "translate3d(0px,0,0) scale(1)",
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
