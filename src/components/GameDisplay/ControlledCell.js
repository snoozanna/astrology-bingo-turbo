import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  calledItem: {
    textAlign: "center",
    backgroundColor: "hsla(86, 96%, 78%, 1.0);",
  },
});


const ControlledCell = ({
  isPicked,
  children
}) => {
  const classes = useStyles();
  return (
    <TableCell
      className={isPicked ? classes.calledItem : ""}
    >
      {children}
    </TableCell>
  );
};

export default ControlledCell;