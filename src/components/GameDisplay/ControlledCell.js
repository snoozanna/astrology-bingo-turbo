import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  calledItem: {
    textAlign: "center",
    backgroundColor: "#8FF9F9",
    border: "1px solid #700FB5",
  },
  tableItem: {
    border: "1px solid #700FB5",
    backgroundColor: "red",
  },
});

const ControlledCell = ({ isPicked, children }) => {
  const classes = useStyles();
  return (
    <TableCell className={isPicked ? classes.calledItem : "tableItem"}>
      {children}
    </TableCell>
  );
};

export default ControlledCell;
