import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  callTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  callMain: {
    fontSize: "1.5rem",
  },
});

const Text = ({ planet, sign, isPicked }) => {
  const classes = useStyles();
  if (!isPicked) return "";
  return (
    <span className={classes.callTextContainer}>
      <span className={classes.callMain}>{planet}</span>
      <span>in</span>
      <span className={classes.callMain}>{sign}</span>
    </span>
  );
};

export default Text;
