import React from "react";
import { useSpring, animated } from "react-spring";
import "./PlayerOrb.scss";
import SignSymbol from "../ChartList/SignSymbol";
import { planets } from "./../../constants";
// import { getRandomIntInclusive } from "./../../utils/utils";

const getOrbIconLocation = (planet) => {
  if (!planet) {
    throw new Error("Sign not provided. Need planet.");
  }

  switch (planet) {
    case "Mars":
      return { x: 50, y: -38 };

    case "Jupiter":
      return { x: 68, y: -32 };

    case "Saturn":
      return { x: 85, y: 0 };

    case "Uranus":
      return { x: 78, y: 23 };

    case "Neptune":
      return { x: 60, y: 36 };

    case "Pluto":
      return { x: 37, y: 38 };

    case "Ascendant":
      return { x: 18, y: 26 };

    case "Descendant":
      return { x: 8, y: 8 };

    case "Moon":
      return { x: 6, y: -10 };

    case "Sun":
      return { x: 18, y: -29 };

    case "Mercury":
      return { x: 35, y: -38 };

    case "Venus":
      return { x: 80, y: -20 };

    default:
      console.log(`default case: sign provided was ${planet}`);
      throw new Error("getIconLocation: Sign not recognised. Need planet.");
  }
};

// const chooseColor = () => {
//   return orbColors[getRandomIntInclusive(0, orbColors.length)];
// };

const chooseScale = () => {
  const randomNumber = Math.random();
  // console.log(randomNumber);
  return randomNumber;
};

const chooseX = () => {
  const randomX = Math.floor(Math.random() * 100);
  return randomX;
};

const chooseY = () => {
  const randomY = Math.floor(Math.random() * 100);
  return randomY;
};

const chooseDelay = () => {
  const randomDelay = Math.floor(Math.random() * 300);
  return randomDelay;
};

const chooseOpacity = () => {
  // const randomX = Math.floor(Math.random() * window.screen.availWidth);
  const randomOp = Math.random();
  return randomOp;
};

const PlayerOrb = ({ player: { _id, chartData }, player }) => {
  // console.log("picked", picked);

  //orbs randomly change size, colour, move around
  const props = useSpring({
    config: { duration: 6000 },
    loop: { reverse: true },
    delay: chooseDelay(),
    from: {
      opacity: chooseOpacity(),
      // rotateZ: 360,
      x: chooseX(),
      y: chooseY(),
      transform: `scale(${chooseScale()})`,
    },
    to: {
      opacity: chooseOpacity(),
      // rotateZ: 0,
      x: chooseX(),
      y: chooseY(),

      transform: `scale(${chooseScale()})`,
    },
  });

  return (
    <animated.div style={props}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="orb"
      >
        <defs>
          <radialGradient
            id="myGradient"
            cx="10%"
            cy="80%"
            r="120.71067811865476%"
          >
            <stop offset="0%" stopColor="#1B1464" />
            <stop offset="100%" stopColor="#FF9472" />
          </radialGradient>
          <filter id="orbShadow">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="1"
              // flood-color="#13ca91"
            />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url('#myGradient')"></circle>
        {Object.entries(chartData).map(([planet, sign]) => {
          if (!planets.includes(planet)) {
            return null;
          }
          return (
            <React.Fragment key={`${player._id}-${planet}-${sign}`}>
              <SignSymbol
                sign={sign}
                width="10"
                x={getOrbIconLocation(planet).x}
                y={getOrbIconLocation(planet).y}
                className={planet}
                fill="#fff"
              />
            </React.Fragment>
          );
        })}

        <svg
          viewBox="-8 -30 100 100"
          xmlns="http://www.w3.org/2000/svg"
          x="15"
          y="8"
        >
          <text
            className="ownerName"
            fill="#fff"
            x="25"
            y="6"
            viewBox="0 0 100 100"
            textAnchor="middle"
            width="30px"
          >
            {player.firstName}
          </text>
          <text
            className="ownerName"
            fill="#fff"
            x="25"
            y="24"
            viewBox="0 0 100 100"
            textAnchor="middle"
          >
            {player.lastName}
          </text>
        </svg>
      </svg>
    </animated.div>
  );
};

export default PlayerOrb;

// If player object contains a planet
//>> if picked array contains anything
//>>>> If planet / sign combo is in picked
// >> return sign symbol with pink background
//>>>> else return normal sign symbol
// else return nothing
