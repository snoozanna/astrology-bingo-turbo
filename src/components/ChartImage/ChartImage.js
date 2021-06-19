import React, { forwardRef } from "react";
import "./ChartImage.scss";
import ChartTemplate from "../ChartTemplate/ChartTemplate";
import SignSymbol from "../ChartList/SignSymbol";
import SignWord from "../ChartList/SignWord";

import { planets } from "./../../constants";

const ChartImage = forwardRef(({ player, showOutline }, ref) => {
  console.log("player", player);
  const { chartData } = player;
  console.log("chartData", chartData);

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
  // debugger;
  return (
    <div ref={ref}>
      <ChartTemplate showOutline={showOutline}>
        {Object.entries(chartData).map(([planet, sign]) => {
          if (planets.includes(planet)) {
            // console.log("planet", planet);
            return (
              <React.Fragment key={`${player._id}-${planet}-${sign}`}>
                <SignSymbol
                  sign={sign}
                  width="60"
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
              </React.Fragment>
            );
          } else {
            return null;
          }
        })}
      </ChartTemplate>
    </div>
  );
});

export default ChartImage;

// pass a prop of outline to <ChartImage/>. if outline is true, remove class of transparent from all the SVG inner components
// if outline is false, add class of transparent
// in player listing, use <ChartImage outline={true}
