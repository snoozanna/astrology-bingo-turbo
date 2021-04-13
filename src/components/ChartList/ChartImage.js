import React, { useContext } from "react";
import ChartTemplate from "./ChartTemplate";
import SignSymbol from "./SignSymbol";
import SignWord from "./SignWord";

import { BirthChartContext } from "./../../contexts/birthchart.context";
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
          return { x: 675, y: 260 };
          break;
        case "Jupiter":
          return { x: 550, y: 420 };
          break;
        case "Saturn":
          return { x: 530, y: 495 };
          break;
        case "Uranus":
          return { x: 340, y: 490 };
          break;
        case "Neptune":
          return { x: 190, y: 395 };
          break;
        case "Pluto":
          return { x: 95, y: 245 };
          break;
        case "Ascendant":
          return { x: 90, y: 40 };
          break;
        case "Descendant":
          return { x: 150, y: -140 };
          break;
        case "Moon":
          return { x: 315, y: -250 };
          break;
        case "Sun":
          return { x: 450, y: -260 };
          break;
        case "Mercury":
          return { x: 630, y: -120 };
          break;
        case "Venus":
          return { x: 700, y: 30 };
          break;
        default:
          console.log("default");
          break;
      }
    }
  };

  // const getWordRotation = (planet) => {
  //TODO
  //   if (!planet) {
  //     throw new Error("Sign not provided. Need planet.");
  //   } else {
  //     switch (planet) {
  //       case "Mars":
  //         return "rotate(45deg)";
  //         break;
  //       case "Jupiter":
  //         return { x: 550, y: 420 };
  //         break;
  //       case "Saturn":
  //         return { x: 530, y: 495 };
  //         break;
  //       case "Uranus":
  //         return { x: 340, y: 490 };
  //         break;
  //       case "Neptune":
  //         return { x: 190, y: 395 };
  //         break;
  //       case "Pluto":
  //         return { x: 95, y: 245 };
  //         break;
  //       case "Ascendant":
  //         return { x: 90, y: 40 };
  //         break;
  //       case "Descendant":
  //         return { x: 150, y: -140 };
  //         break;
  //       case "Moon":
  //         return { x: 315, y: -250 };
  //         break;
  //       case "Sun":
  //         return { x: 450, y: -260 };
  //         break;
  //       case "Mercury":
  //         return { x: 630, y: -120 };
  //         break;
  //       case "Venus":
  //         return { x: 700, y: 30 };
  //         break;
  //       default:
  //         console.log("default");
  //         break;
  //     }
  //   }
  // };

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
                  width="35px"
                  x={getIconLocation(planet).x}
                  y={getIconLocation(planet).y}
                />
                <SignWord
                  sign={sign}
                  x={getWordLocation(planet).x}
                  y={getWordLocation(planet).y}
                  font="18px"
                  transform="rotate(45deg)"
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
