import React, { useContext } from "react";
import "./ChartImage.scss";
import ChartTemplate from "../ChartTemplate/ChartTemplate";
import SignSymbol from "../ChartList/SignSymbol";
import SignWord from "../ChartList/SignWord";

import { BirthChartContext } from "../../contexts/birthchart.context";
const ChartImage = ({ player }) => {
  const { BirthChart } = useContext(BirthChartContext);

  const getIconLocation = (planet) => {
    if (!planet) {
      throw new Error("Sign not provided. Need planet.");
    } else {
      switch (planet) {
        case "Mars":
          return { x: 650, y: 30 };
          break;
        case "Jupiter":
          return { x: 600, y: 100 };
          break;
        case "Saturn":
          return { x: 515, y: 140 };
          break;
        case "Uranus":
          return { x: 430, y: 140 };
          break;
        case "Neptune":
          return { x: 340, y: 90 };
          break;
        case "Pluto":
          return { x: 285, y: 15 };
          break;
        case "Ascendant":
          return { x: 300, y: -65 };
          break;
        case "Descendant":
          return { x: 340, y: -150 };
          break;
        case "Moon":
          return { x: 430, y: -190 };
          break;
        case "Sun":
          return { x: 515, y: -190 };
          break;
        case "Mercury":
          return { x: 590, y: -140 };
          break;
        case "Venus":
          return { x: 635, y: -65 };
          break;
        default:
          console.log("default");
          break;
      }
    }
  };

  const getWordLocation = (planet) => {
    if (!planet) {
      throw new Error("Sign not provided. Need planet.");
    } else {
      switch (planet) {
        case "Mars":
          return { x: 254, y: 65 };
          break;
        case "Jupiter":
          return { x: 266, y: -16 };
          break;
        case "Saturn":
          return { x: 231, y: -112 };
          break;
        case "Uranus":
          return { x: -190, y: 195 };
          break;
        case "Neptune":
          return { x: -100, y: 205 };
          break;
        case "Pluto":
          return { x: -26, y: 179 };
          break;
        case "Ascendant":
          return { x: 69, y: 107 };
          break;
        case "Descendant":
          return { x: 93, y: 14 };
          break;
        case "Moon":
          return { x: 71, y: -87 };
          break;
        case "Sun":
          return { x: -17, y: 184 };
          break;
        case "Mercury":
          return { x: 102, y: 192 };
          break;
        case "Venus":
          return { x: 139, y: 204 };
          break;
        default:
          console.log("default");
          break;
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
          break;
        case "Jupiter":
          return "rotate(50)";
          break;
        case "Saturn":
          return "rotate(80)";
          break;
        case "Uranus":
          return "rotate(-69)";
          break;
        case "Neptune":
          return "rotate(-42)";
          break;
        case "Pluto":
          return "rotate(-21)";
          break;
        case "Ascendant":
          return "rotate(15)";
          break;
        case "Descendant":
          return "rotate(42)";
          break;
        case "Moon":
          return "rotate(71)";
          break;
        case "Sun":
          return "rotate(-69)";
          break;
        case "Mercury":
          return "rotate(-34)";
          break;
        case "Venus":
          return "rotate(-22)";
          break;
        default:
          console.log("default");
          break;
      }
    }
  };

  return (
    <>
      <ChartTemplate>
        {/* <SignSymbol sign="Cancer" width="35px" /> */}
        {Object.entries(player).map(([key, value]) => {
          // console.log("key", key, "value", value);
          if (BirthChart.planets.includes(key)) {
            // console.log(key, value);
            const sign = value;
            const planet = key;
            // console.log("planet", planet);
            return (
              <>
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
              </>
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
