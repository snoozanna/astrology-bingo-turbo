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
    backgroundColor: "pink",
  },
});

const IconList = ({ player }) => {
  const { alreadyCalled } = useContext(GameContext);
  const { BirthChart } = useContext(BirthChartContext);
  console.log(alreadyCalled);

  const classes = useStyles();

  return (
    <>
      <List className={classes.listGroup}>
        {Object.entries(player).map(([key, value]) => {
          // console.log("key", key, "value", value);
          if (BirthChart.planets.includes(key)) {
            // const { icon } = value;
            const sign = value;
            const planet = key;
            if (alreadyCalled != null && Array.isArray(alreadyCalled)) {
              console.log(Object.entries(alreadyCalled));
              if (alreadyCalled.includes(sign && planet)) {
                return console.log("yes");
                // <ListItem className={classes.listItem}>
                //   <ListItemIcon>
                //     <SignSymbol
                //       sign={sign}
                //       planet={planet}
                //       className={classes.alreadyCalled}
                //     />
                //   </ListItemIcon>
                // </ListItem>
              } else {
                return (
                  <ListItem className={classes.listItem}>
                    <ListItemIcon>
                      <SignSymbol sign={sign} planet={planet} />
                    </ListItemIcon>
                  </ListItem>
                );
              }
            } else {
              if (alreadyCalled != null && !Array.isArray(alreadyCalled)) {
                console.warn(
                  `Corrupted data. 'alreadyCalled' should be an array, instead got ${alreadyCalled}`,
                );
              }
            }
            return (
              <ListItem className={classes.listItem}>
                <ListItemIcon>
                  <SignSymbol sign={sign} planet={planet} />
                </ListItemIcon>
              </ListItem>
            );
          } else {
            return null;
          }
        })}
      </List>
    </>
  );
};

export default IconList;
