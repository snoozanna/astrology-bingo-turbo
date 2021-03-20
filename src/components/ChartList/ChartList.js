import React, { useContext } from "react";
import List from "@material-ui/core/List";
// import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import ThreeDRotation from "@material-ui/icons/ThreeDRotation";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     maxWidth: 752,
//   },
//   demo: {
//     backgroundColor: theme.palette.background.paper,
//   },
//   title: {
//     margin: theme.spacing(4, 0, 2),
//   },
// }));

const ChartList = ({ data, ordered = false, ItemComponent }) => {
  return (
    <>
      {Object.entries(data).map(([planet, sign]) => (
        <List>
          <ListItem>
            <ListItemIcon>
              <ThreeDRotation />
            </ListItemIcon>
            <li>
              {planet} in {sign}
            </li>
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default ChartList;
