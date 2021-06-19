import React, { useContext } from "react";
import "./ChartImage.scss";
import ChartTemplate from "../ChartTemplate/ChartTemplate";
import SignSymbol from "../ChartList/SignSymbol";
import SignWord from "../ChartList/SignWord";

import { planets } from "./../../constants";
const ChartImage = ({ player }) => {
  const {playerChart} = player;
  const getIconLocation = (planet) => {
    if (!planet) {
      throw new Error("Sign not provided. Need planet.");
    }

    switch (planet) {
      case "Mars":
        return { x: 650, y: 30 };

      case "Jupiter":
        return { x: 600, y: 100 };

      case "Saturn":
        return { x: 515, y: 140 };

      case "Uranus":
        return { x: 430, y: 140 };

      case "Neptune":
        return { x: 340, y: 90 };

      case "Pluto":
        return { x: 285, y: 15 };

      case "Ascendant":
        return { x: 300, y: -65 };

      case "Descendant":
        return { x: 340, y: -150 };

      case "Moon":
        return { x: 430, y: -190 };

      case "Sun":
        return { x: 515, y: -190 };

      case "Mercury":
        return { x: 590, y: -140 };

      case "Venus":
        return { x: 635, y: -65 };

      default:
        console.log(`default case: sign provided was ${planet}`);
        throw new Error("getIconLocation: Sign not recognised. Need planet.");
    }
  };

  const getWordLocation = (planet) => {
    if (!planet) {
      throw new Error("Sign not provided. Need planet.");
    } else {
      switch (planet) {
        case "Mars":
          return { x: 254, y: 65 };
        case "Jupiter":
          return { x: 266, y: -16 };
        case "Saturn":
          return { x: 231, y: -112 };
        case "Uranus":
          return { x: -190, y: 195 };
        case "Neptune":
          return { x: -100, y: 205 };
        case "Pluto":
          return { x: -26, y: 179 };
        case "Ascendant":
          return { x: 69, y: 107 };
        case "Descendant":
          return { x: 93, y: 14 };
        case "Moon":
          return { x: 71, y: -87 };
        case "Sun":
          return { x: -17, y: 184 };
        case "Mercury":
          return { x: 102, y: 192 };
        case "Venus":
          return { x: 139, y: 204 };
        default:
          console.log(`default case: sign provided was ${planet}`);
          throw new Error("getWordLocation: Sign not recognised. Need planet.");
      }
    }
  };

  const getWordRotation = (planet) => {
    if (!planet) {
      throw new Error("Sign not provided. Need planet.");
    } else {
      switch (planet) {
        case "Mars":
          return "rotate(24)";
        case "Jupiter":
          return "rotate(50)";
        case "Saturn":
          return "rotate(80)";
        case "Uranus":
          return "rotate(-69)";
        case "Neptune":
          return "rotate(-42)";
        case "Pluto":
          return "rotate(-21)";
        case "Ascendant":
          return "rotate(15)";
        case "Descendant":
          return "rotate(42)";
        case "Moon":
          return "rotate(71)";
        case "Sun":
          return "rotate(-69)";
        case "Mercury":
          return "rotate(-34)";
        case "Venus":
          return "rotate(-22)";
        default:
          console.log(`default case: sign provided was ${planet}`);
          throw new Error("getWordRotation: Sign not recognised. Need planet.");
      }
    }
  };

  return (
    <>
      <ChartTemplate>
        {Object.entries(playerChart).map(([planet, sign]) => {
          if (planets.includes(planet)) {
            // console.log(key, value);
            // console.log("planet", planet);
            return (
              <div key={player._id}>
                <SignSymbol
                  sign={sign}
                  width="60px"
                  x={getIconLocation(planet).x}
                  y={getIconLocation(planet).y}
                  className={planet}
                />
                <SignWord
                  sign={sign}
                  x={getWordLocation(planet).x}
                  y={getWordLocation(planet).y}
                  font="25px"
                  transform={getWordRotation(planet)}
                  className={planet}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </ChartTemplate>
    </>
  );
};

export default ChartImage;
