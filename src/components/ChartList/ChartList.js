import React from "react";
import "./ChartList.scss";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { planets } from "./../../constants";
import SignSymbol from "./SignSymbol";


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
    justifyContent: "space-between",
    marginBlockEnd: 10,
    marginInlineEnd: 10,
    padding: 1,
    maxWidth: "22%",
    flexWrap: 'wrap',
  },
});

const ChartList = ({ player }) => {
console.log('in chart list', player);
  const classes = useStyles();
  return (
    <>
      <List className={classes.listGroup}>
        {Object.entries(player.chartData).map(([planet, sign], i) => {
          // console.log("key", key, "value", value);
          if (!planets.includes(planet)) return null;
            // const { icon } = value;
  
            // console.log("sign", sign);
            // console.log("icon", icon);
            return (
              <ListItem className={classes.listItem} key={i}>
                <div className={classes.chartListItem}>
                  <div className="planetListItem">{planet} :</div>
                  <div className="signListItem">{sign}</div>
                </div>
                <ListItemIcon>
                  <SignSymbol sign={sign} />
                </ListItemIcon>
              </ListItem>
            );
        })}
      </List>
    </>
  );
};

export default ChartList;
