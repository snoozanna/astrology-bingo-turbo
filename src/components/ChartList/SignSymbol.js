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
    width: 40,
  },
}));

const viewBox = "100 100 400 400";

const SignSymbol = ({ sign }) => {
  console.log("hello from sign symbol");
  const classes = useStyles();

  const getIconComponent = (sign) => {
    console.log("getting icon component");
    switch (sign) {
      case "Aries":
        //TRYING WITH THE ICON BEING A REAL COMPONENT
        // return <AriesSymbol className={classes.icon} />;
        return <AriesIcon />;
        break;
      case "Taurus":
        console.log("taurus");
        return <TaurusIcon />;
        break;
      case "Gemini":
        return <GeminiIcon />;
        break;
      case "Cancer":
        return <CancerIcon />;
        break;
      case "Leo":
        return <LeoIcon />;
        break;
      case "Virgo":
        return <VirgoIcon />;
        break;
      case "Libra":
        return <LibraIcon />;
        break;
      case "Scorpio":
        return <ScorpioIcon />;
        break;
      case "Sagittarius":
        return <SagittariusIcon />;
        break;
      case "Capricorn":
        return <CapricornIcon />;
        break;
      case "Aquarius":
        return <AquariusIcon />;
        break;
      case "Pisces":
        return <PiscesIcon />;
        break;
      default:
        // console.log("default");
        break;
    }
  };

  return <>{getIconComponent(sign)}</>;
};

export default SignSymbol;
