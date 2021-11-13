import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  callTextContainer: {
    display: "flex",
    flexDirection: "column",
    color: "#700FB5",
    fontWeight: "bold",
  },
  callMain: {
    fontSize: "1.23rem",
  },
});

const Text = ({ planet, sign, isPicked }) => {
  const classes = useStyles();
  if (!isPicked) return "";
  return (
    <span className={classes.callTextContainer}>
      <span className={classes.callMain}>
        {planet} in {sign}
      </span>
    </span>
  );
};

export default Text;
