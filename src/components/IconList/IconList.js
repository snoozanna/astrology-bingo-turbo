import React, { useContext } from "react";
import "./IconList.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SignSymbol from "../ChartList/SignSymbol";
import { makeStyles } from "@material-ui/core/styles";
import { BirthChartContext } from "../../contexts/birthchart.context";
import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  signSymbol: {
    width: 45,
    margin: "auto",
  },

  listGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: 15,
  },

  listItem: {
    margin: "auto",
    maxWidth: "fit-content",
    padding: "7 15 15",
    border: "1px black solid",
    borderRadius: 15,
    backgroundColor: "lavender",
  },

  alreadyCalled: {
  margin: "auto",
    maxWidth: "fit-content",
    padding: "7 15 15",
    border: "1px black solid",
    borderRadius: 15,
    backgroundColor: "#E31C79",
    '& svg': {
      fill: "#fff"
    }

  },

  notCalled: {
    backgroundColor: "red",
  }
});

const IconList = ({ player }) => {
  const { alreadyCalled } = useContext(GameContext);
  const { BirthChart } = useContext(BirthChartContext);
  // console.log("alreadyCalled", alreadyCalled);

  const classes = useStyles();

  const checkCall = (planet, sign) => {
    // debugger;
    // console.log("alreadyCalled", alreadyCalled);
    if (alreadyCalled != null && Array.isArray(alreadyCalled)) {
      for (const oneCall of alreadyCalled) {
        // return oneCall.planet === planet && oneCall.sign === sign;
        if (oneCall.planet === planet && oneCall.sign === sign) {
          console.log("this has been called", planet, sign)
          return true
        }
      }
    }
  };

  return (
    <>
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
    
              {/* <ListItem className={classes.listItem}> */}
                  <ListItem className={checkCall(planet, sign) ? classes.alreadyCalled : classes.listItem}>
                <ListItemIcon>
                  <SignSymbol
                    sign={sign}
                    planet={planet}
                    // className={
                    //   checkCall(planet, sign) ? classes.alreadyCalled : ""
                    // }
                    
                  />
                </ListItemIcon>
              </ListItem>
            </>
          );
        })}
      </List>
    </>
  );
};

export default IconList;

// If player object contains a planet
//>> if alreadyCalled array contains anything
//>>>> If planet / sign combo is in alreadyCalled
// >> return sign symbol with pink background
//>>>> else return normal sign symbol
// else return nothing