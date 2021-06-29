import React, { useContext } from "react";
import "./IconList.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SignSymbol from "../ChartList/SignSymbol";
import { makeStyles } from "@material-ui/core/styles";
import { planets } from "./../../constants";
import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  listGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: 5,
    padding: 10,
  },

  listItem: {
    margin: "auto",
    maxWidth: "fit-content",
    // padding: "7px 15px 15px",
    border: "1px black solid",
    borderRadius: 15,
    // backgroundColor: "lavender",
  },

  picked: {
    margin: "auto",
    maxWidth: "fit-content",
    border: "1px black solid",
    borderRadius: 15,
    backgroundColor: "#E31C79!important",
    "& svg": {
      fill: "#fff",
    },
  },

  planet: {
    fill: "purple",
  },
});

const IconList = ({ player, matchesVisible=false }) => {
  const { picks } = useContext(GameContext);

  const {chartData} = player;
  const classes = useStyles();

  const pickedIds = picks.map(pick => pick._id);
  // console.log("🚀 ~ file: IconList.js ~ line 57 ~ IconList ~ pickedIds", pickedIds)

  return (
      <List className={classes.listGroup}>
        {Object.entries(chartData).map(([planet, sign]) => {
          if (!planets.includes(planet)) {
            return null;
          }
          /* console.log('matchesVisible', matchesVisible); */
          return (
              <ListItem
              key={`${player._id}-${planet}-${sign}`}
                className={`${
                  pickedIds.includes(`${planet}-${sign}`.toLowerCase()) && matchesVisible
                    ? classes.picked
                    : classes.listItem
                } ${planet.toLowerCase()} sign-${sign.toLowerCase()}`}
                title={`${planet.toLowerCase()} ${sign.toLowerCase()}`}
              >
                <ListItemIcon>
                  <SignSymbol sign={sign} planet={planet} />
                </ListItemIcon>
              </ListItem>
          );
        })}
      </List>
  );
};

export default IconList;
