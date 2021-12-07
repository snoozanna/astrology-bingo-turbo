import React from "react";
import "./PhraseDisplay.scss";
import { signs, planets, catchPhraseDict } from "./../../constants";

const PhraseDisplay = ({ planet, sign }) => {
  // console.log("from phrase display", planet, sign);

  if (!planet && !sign) {
    // console.log(`No planet and sign provided`);
    return null;
  }

  const getCatchPhrase = (planet, sign) => {
    // debugger;
    if (typeof planet !== "string") {
      throw new Error(
        `Planet supplied to getCatchPhrase must be a string. Received ${planet} (type: ${planet})`,
      );
    }

    if (typeof sign !== "string") {
      throw new Error(
        `Sign supplied to getCatchPhrase must be a string. Received ${sign} (type: ${sign})`,
      );
    }

    if (!planets.includes(planet)) {
      throw new Error(
        `Planet supplied to getCatchPhrase must be a recognised planet (One of ${planets.join(
          ", ",
        )}). Received ${planet}`,
      );
    }

    if (!signs.includes(sign)) {
      throw new Error(
        `Planet supplied to getCatchPhrase must be a recognised sign (One of ${signs.join(
          ", ",
        )}). Received ${sign}`,
      );
    }

    return catchPhraseDict[planet][sign];
  };
  return (
    <div className="phraseContainer">
      <h3>{getCatchPhrase(planet, sign)}</h3>
    </div>
  );
};

export default PhraseDisplay;
