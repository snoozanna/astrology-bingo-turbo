import React, { useContext } from "react";
import List from "@material-ui/core/List";
// import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";

import SignSymbol from "./SignSymbol";

import { BirthChartContext } from "./../../contexts/birthchart.context";

const ChartList = ({ data, ordered = false, ItemComponent }) => {
  const { BirthChart } = useContext(BirthChartContext);

  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        // console.log("key", key, "value", value);
        if (BirthChart.planets.includes(key)) {
          const { icon } = value;
          const { sign } = value;
          console.log("sign", sign);
          console.log("icon", icon);
          return (
            <li>
              {key}: {sign}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 100 100 100">
                {icon}
              </svg> */}
              <SignSymbol sign={sign} />
            </li>
          );
        } else {
          return null;
        }
      })}
      <List>
        <ListItem>
          <ListItemIcon>
            <ThreeDRotation />
          </ListItemIcon>
          {/* {console.log("planet", planet.sign)} */}
          {/* <li>{planet} in </li> */}
          {/* <SignSymbol {planet=planet}/> */}
        </ListItem>
      </List>
    </>
  );
};

export default ChartList;
