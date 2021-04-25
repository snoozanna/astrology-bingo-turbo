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
    width: 45,
    margin: "auto",
  },

});

const SignSymbol = ({ sign, width, x, y }) => {
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
            />
          );
          break;
        case "Taurus":
          return (
            <TaurusIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Gemini":
          return (
            <GeminiIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Cancer":
          return (
            <CancerIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Leo":
          return (
            <LeoIcon width={width} x={x} y={y} className={classes.signSymbol} />
          );
          break;
        case "Virgo":
          return (
            <VirgoIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Libra":
          return (
            <LibraIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Scorpio":
          return (
            <ScorpioIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Sagittarius":
          return (
            <SagittariusIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Capricorn":
          return (
            <CapricornIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Aquarius":
          return (
            <AquariusIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        case "Pisces":
          return (
            <PiscesIcon
              width={width}
              x={x}
              y={y}
              className={classes.signSymbol}
            />
          );
          break;
        default:
          console.log("default");
          break;
      }
    }
  };

  return <>{getIconComponent(sign)}</>;
};

export default SignSymbol;
