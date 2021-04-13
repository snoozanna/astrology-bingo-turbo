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
// import { ReactComponent as Symbol } from `./../../assets/symbols/${sign}.svg`;

const useStyles = makeStyles((theme) => ({
  icon: {},
}));

const SignSymbol = ({ sign, width, x, y }) => {
  const classes = useStyles();
  const getIconComponent = (sign) => {
    if (!sign) {
      throw new Error("Sign not provided. Need sign.");
    } else {
      switch (sign) {
        case "Aries":
          return (
            <AriesIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Taurus":
          return (
            <TaurusIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Gemini":
          return (
            <GeminiIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Cancer":
          return (
            <CancerIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Leo":
          return <LeoIcon className={classes.icon} width={width} x={x} y={y} />;
          break;
        case "Virgo":
          return (
            <VirgoIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Libra":
          return (
            <LibraIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Scorpio":
          return (
            <ScorpioIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Sagittarius":
          return (
            <SagittariusIcon
              className={classes.icon}
              width={width}
              x={x}
              y={y}
            />
          );
          break;
        case "Capricorn":
          return (
            <CapricornIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Aquarius":
          return (
            <AquariusIcon className={classes.icon} width={width} x={x} y={y} />
          );
          break;
        case "Pisces":
          return (
            <PiscesIcon className={classes.icon} width={width} x={x} y={y} />
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
