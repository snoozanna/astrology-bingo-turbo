import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AriesWord from "./Words/AriesWord";
import GeminiWord from "./Words/GeminiWord";
import CancerWord from "./Words/CancerWord";
import CapricornWord from "./Words/CapricornWord";
import AquariusWord from "./Words/AquariusWord";
import SagittariusWord from "./Words/SagittariusWord";
import ScorpioWord from "./Words/ScorpioWord";
import TaurusWord from "./Words/TaurusWord";
import VirgoWord from "./Words/VirgoWord";
import LeoWord from "./Words/LeoWord";
import LibraWord from "./Words/LibraWord";
import PiscesWord from "./Words/PiscesWord";
// import { ReactComponent as Symbol } from `./../../assets/symbols/${sign}.svg`;

const SignWord = ({ sign, font, x, y, transform, className, textAnchor }) => {
  // console.log("rotation", transform);
  const getWordComponent = (sign) => {
    if (!sign) {
      throw new Error("Sign not provided. Need sign.");
    } else {
      switch (sign) {
        case "Aries":
          return (
            <AriesWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Taurus":
          return (
            <TaurusWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Gemini":
          return (
            <GeminiWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Cancer":
          return (
            <CancerWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Leo":
          return (
            <LeoWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Virgo":
          return (
            <VirgoWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Libra":
          return (
            <LibraWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Scorpio":
          return (
            <ScorpioWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Sagittarius":
          return (
            <SagittariusWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Capricorn":
          return (
            <CapricornWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Aquarius":
          return (
            <AquariusWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        case "Pisces":
          return (
            <PiscesWord
              className={("innerWord", className)}
              font={font}
              x={x}
              y={y}
              transform={transform}
              textAnchor={textAnchor}
            />
          );
        default:
          console.log("default");
      }
    }
  };

  return <>{getWordComponent(sign)}</>;
};

export default SignWord;
