import React, { useContext } from "react";
import { ReactComponent as TemplateChart } from "./../../assets/template.svg";
import { PlayersContext } from "../../contexts/players.context";

// populate depending on chart

const ChartImage = () => {
  return (
    <>
      <TemplateChart />
    </>
  );
};

export default ChartImage;
