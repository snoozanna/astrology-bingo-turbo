import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AriesIcon from "./Icons/AriesIcon";
import GeminiIcon from "./Icons/GeminiIcon";
import CancerIcon from "./Icons/CancerIcon";
import CapricornIcon from "./Icons/CapricornIcon";
import AquariusIcon from "./Icons/AquariusIcon";
import SagittariusIcon from "./Icons/SagittariusIcon";
import ScorpioIcon from "./Icons/ScorpioIcon";
import TaurusIcon from "./Icons/TaurusIcon";
import VirgoIcon from "./Icons/VirgoIcon";
import LeoIcon from "./Icons/LeoIcon";
import LibraIcon from "./Icons/LibraIcon";
import PiscesIcon from "./Icons/PiscesIcon";

const useStyles = makeStyles({
  signSymbol: {
    margin: "auto",
  },
});

const SignSymbol = ({ sign, width = "20px", x, y, fill = "black" }) => {
  const classes = useStyles();
  const getIconComponent = (sign) => {
    if (!sign) {
      throw new Error("Sign not provided. Need sign.");
    } else {
      switch (sign) {
        case "Aries":
          return (
            <AriesIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Taurus":
          return (
            <TaurusIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Gemini":
          return (
            <GeminiIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Cancer":
          return (
            <CancerIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Leo":
          return (
            <LeoIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Virgo":
          return (
            <VirgoIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Libra":
          return (
            <LibraIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Scorpio":
          return (
            <ScorpioIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Sagittarius":
          return (
            <SagittariusIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Capricorn":
          return (
            <CapricornIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Aquarius":
          return (
            <AquariusIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        case "Pisces":
          return (
            <PiscesIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
              fill={fill}
            />
          );
        default:
          console.log(`default case: sign provided was ${sign}`);
          throw new Error(
            "getIconComponent: Sign not recognised. Need planet.",
          );
      }
    }
  };

  return <>{getIconComponent(sign)}</>;
};

export default SignSymbol;
