import React, { useContext } from "react";
import { BirthChartContext } from "./../../contexts/birthchart.context";
import { UtilitiesContext } from "./../../contexts/utilities.context";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({

// }));

const PhraseDisplay = ({ planet, sign }) => {
  const { BirthChart } = useContext(BirthChartContext);
  const { catchPhraseDict } = useContext(UtilitiesContext);
  console.log("from phrase display", planet, sign);

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

    if (!BirthChart.planets.includes(planet)) {
      throw new Error(
        `Planet supplied to getCatchPhrase must be a recognised planet (One of ${BirthChart.planets.join(
          ", ",
        )}). Received ${planet}`,
      );
    }

    if (!BirthChart.signs.includes(sign)) {
      throw new Error(
        `Planet supplied to getCatchPhrase must be a recognised sign (One of ${BirthChart.signs.join(
          ", ",
        )}). Received ${sign}`,
      );
    }

    return catchPhraseDict[planet][sign];
  };
  return (
    <>
      <h3>{getCatchPhrase(planet, sign)}</h3>
    </>
  );
};

export default PhraseDisplay;
