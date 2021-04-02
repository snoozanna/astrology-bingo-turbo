import React, { useContext } from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import SignSymbol from "./SignSymbol";

import { BirthChartContext } from "./../../contexts/birthchart.context";

const useStyles = makeStyles({
  listGroup: {
    display: "flex",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: 15,
    flexFlow: "wrap",
    justifyContent: "space-around",
    padding: 0,
  },
});

const ChartList = ({ data, ordered = false, ItemComponent }) => {
  const { BirthChart } = useContext(BirthChartContext);
  const classes = useStyles();
  return (
    <>
      <List>
        <ListItem className={classes.listGroup}>
          {Object.entries(data).map(([key, value]) => {
            // console.log("key", key, "value", value);
            if (BirthChart.planets.includes(key)) {
              // const { icon } = value;
              const { sign } = value;
              // console.log("sign", sign);
              // console.log("icon", icon);
              return (
                <li>
                  {key}: {sign}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 100 100 100">
                    {icon}
                  </svg> */}
                  <ListItemIcon>
                    <SignSymbol sign={sign} />
                  </ListItemIcon>
                </li>
              );
            } else {
              return null;
            }
          })}
        </ListItem>
      </List>
    </>
  );
};

export default ChartList;
