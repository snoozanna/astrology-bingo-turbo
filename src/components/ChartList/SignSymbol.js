import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { ReactComponent as TaurusSymbol } from "./../../assets/symbols/taurus.svg";
import { ReactComponent as AriesSymbol } from "./../../assets/symbols/aries.svg";
import { ReactComponent as AquariusSymbol } from "./../../assets/symbols/aquarius.svg";
import { ReactComponent as CancerSymbol } from "./../../assets/symbols/cancer.svg";
import { ReactComponent as CapricornSymbol } from "./../../assets/symbols/capricorn.svg";
import { ReactComponent as GeminiSymbol } from "./../../assets/symbols/gemini.svg";
import { ReactComponent as LeoSymbol } from "./../../assets/symbols/leo.svg";
import { ReactComponent as LibraSymbol } from "./../../assets/symbols/libra.svg";
import { ReactComponent as PiscesSymbol } from "./../../assets/symbols/pisces.svg";
import { ReactComponent as SagittariusSymbol } from "./../../assets/symbols/sagittarius.svg";
import { ReactComponent as ScorpioSymbol } from "./../../assets/symbols/scorpio.svg";
import { ReactComponent as VirgoSymbol } from "./../../assets/symbols/virgo.svg";
// import { ReactComponent as Symbol } from `./../../assets/symbols/${sign}.svg`;

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 40,
  },
}));

const viewBox = "100 100 400 400";

const SignSymbol = ({ sign }) => {
  // console.log("icon from sign symbol", icon);
  const classes = useStyles();

  const getIconComponent = (sign) => {
    switch (sign) {
      case "Aries":
        return <AriesSymbol className={classes.icon} />;
        break;
      case "Taurus":
        return <TaurusSymbol className={classes.icon} />;
        break;
      case "Gemini":
        return <GeminiSymbol className={classes.icon} />;
        break;
      case "Cancer":
        return <CancerSymbol className={classes.icon} />;
        break;
      case "Leo":
        return <LeoSymbol className={classes.icon} />;
        break;
      case "Virgo":
        return <VirgoSymbol className={classes.icon} />;
        break;
      case "Libra":
        return <LibraSymbol className={classes.icon} />;
        break;
      case "Scorpio":
        return <ScorpioSymbol className={classes.icon} />;
        break;
      case "Sagittarius":
        return <SagittariusSymbol className={classes.icon} />;
        break;
      case "Capricorn":
        return <CapricornSymbol className={classes.icon} />;
        break;
      case "Aquarius":
        return <AquariusSymbol className={classes.icon} />;
        break;
      case "Pisces":
        return <PiscesSymbol className={classes.icon} />;
        break;
      default:
        // console.log("default");
        break;
    }
  };

  return <>{getIconComponent(sign)}</>;
};

export default SignSymbol;
