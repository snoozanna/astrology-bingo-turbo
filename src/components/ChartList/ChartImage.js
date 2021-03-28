import React, { useContext } from "react";
import { ReactComponent as TemplateChart } from "./../../assets/template.svg";
import { PlayersContext } from "../../contexts/players.context";
import { ReactComponent as TaurusSymbol } from "./../../assets/symbols/taurus.svg";
import { BirthChartContext } from "./../../contexts/birthchart.context";

// populate depending on chart

const ChartImage = (data) => {
  const { BirthChart } = useContext(BirthChartContext);

  const iconsToShow = (data) => {
    // console.log("data", data);
    Object.entries(data).map(([key, value]) => {
      // console.log("key", key, "value", value);
      if (BirthChart.planets.includes(key)) {
        const { icon } = value;
        // console.log("sign", sign);
        // console.log("icon", icon);
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> ${icon}</svg>`;
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <p>Template chart as a ReactComponent</p> 
      <TemplateChart>{iconsToShow(data.data)}</TemplateChart>
    </>
  );
};

export default ChartImage;
