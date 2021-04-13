import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const SignWord = ({ sign, font, x, y, transform }) => {
  // console.log("rotation", transform);
  const getWordComponent = (sign) => {
    if (!sign) {
      throw new Error("Sign not provided. Need sign.");
    } else {
      switch (sign) {
        case "Aries":
          return (
            <AriesWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Taurus":
          return (
            <TaurusWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Gemini":
          return (
            <GeminiWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Cancer":
          return (
            <CancerWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Leo":
          return (
            <LeoWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Virgo":
          return (
            <VirgoWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Libra":
          return (
            <LibraWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Scorpio":
          return (
            <ScorpioWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform="rotate(45)"
            />
          );
          break;
        case "Sagittarius":
          return (
            <SagittariusWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Capricorn":
          return (
            <CapricornWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Aquarius":
          return (
            <AquariusWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        case "Pisces":
          return (
            <PiscesWord
              className="word"
              font={font}
              x={x}
              y={y}
              transform={transform}
            />
          );
          break;
        default:
          console.log("default");
          break;
      }
    }
  };

  return <>{getWordComponent(sign)}</>;
};

export default SignWord;
