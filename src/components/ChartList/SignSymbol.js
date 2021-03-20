import React, { useContext } from "react";
import { BirthChartContext } from "./../../contexts/birthchart.context";

const SignSymbol = (chart) => {
  const BirthChart = useContext(BirthChartContext);
  const symbol = BirthChart.getIconSVG(chart[2]);

  return;
  <>{symbol}</>;
};

export default SignSymbol;
