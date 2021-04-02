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
  icon: {
    width: 30,
  },
}));

const SignSymbol = ({ sign }) => {
  const classes = useStyles();
  const getIconComponent = (sign) => {
    switch (sign) {
      case "Aries":
        return <AriesIcon className={classes.icon} className={classes.icon} />;
        break;
      case "Taurus":
        return <TaurusIcon className={classes.icon} />;
        break;
      case "Gemini":
        return <GeminiIcon className={classes.icon} />;
        break;
      case "Cancer":
        return <CancerIcon className={classes.icon} />;
        break;
      case "Leo":
        return <LeoIcon className={classes.icon} />;
        break;
      case "Virgo":
        return <VirgoIcon className={classes.icon} />;
        break;
      case "Libra":
        return <LibraIcon className={classes.icon} />;
        break;
      case "Scorpio":
        return <ScorpioIcon className={classes.icon} />;
        break;
      case "Sagittarius":
        return <SagittariusIcon className={classes.icon} />;
        break;
      case "Capricorn":
        return <CapricornIcon className={classes.icon} />;
        break;
      case "Aquarius":
        return <AquariusIcon className={classes.icon} />;
        break;
      case "Pisces":
        return <PiscesIcon className={classes.icon} />;
        break;
      default:
        console.log("default");
        break;
    }
  };

  return <>{getIconComponent(sign)}</>;
};

export default SignSymbol;
