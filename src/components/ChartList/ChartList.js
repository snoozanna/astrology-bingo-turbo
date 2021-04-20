import React, { useContext } from "react";
import "./ChartList.scss";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import SignSymbol from "./SignSymbol";

import { BirthChartContext } from "./../../contexts/birthchart.context";

const useStyles = makeStyles({
  signSymbol: {
    width: 45,
  },

  planetListItem: {
    fontWeight: 600,
  },

  listGroup: {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
  },

  listItem: {
    gridGap: 15,
    justifyContent: "spaceBetween",
    marginBlockEnd: 10,
    marginInlineEnd: 10,
    padding: 1,
    maxWidth: "22%",
  },
});

const ChartList = ({ player }) => {
  const { BirthChart } = useContext(BirthChartContext);
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
            // console.log("sign", sign);
            // console.log("icon", icon);
            return (
              <ListItem className={classes.listItem}>
                <div className={classes.chartListItem}>
                  <div className="planetListItem">{planet} :</div>
                  <div className="signListItem">{sign} </div>
                </div>
                <ListItemIcon>
                  <SignSymbol sign={sign} />
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

export default ChartList;
