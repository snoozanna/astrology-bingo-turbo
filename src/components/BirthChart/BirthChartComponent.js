//REDUNDANT

import React, { useContext } from "react";
import { BirthChartContext } from "../../contexts/birthchart.context";

const BirthChartComponent = ({ player }) => {
  const { BirthChart } = useContext(BirthChartContext);
  //takes in birth chart data
  //spits out full birth chart object with symbols etc
  const chartDisplay = {
    Sun: {
      sign: player.chartData.Sun,
      icon: BirthChart.getIconSVG(player.chartData.Sun),
      location: { x: 515, y: -190 },
      word: BirthChart.getSignWordSVG(player.chartData.Sun),
      wordLocation: { x: 450, y: -260 },
      viewBox: "-500 60 600 600",
      textAnchor: "end",
      called: false,
    },
    Mercury: {
      sign: player.chartData.Mercury,
      icon: BirthChart.getIconSVG(player.chartData.Mercury),
      location: { x: 590, y: -140 },
      word: BirthChart.getSignWordSVG(player.chartData.Mercury),
      wordLocation: { x: 630, y: -120 },
      viewBox: "-500 60 600 600",
      textAnchor: "end",
      called: false,
    },
    Venus: {
      sign: player.chartData.Venus,
      icon: BirthChart.getIconSVG(player.chartData.Venus),
      location: { x: 635, y: -65 },
      word: BirthChart.getSignWordSVG(player.chartData.Venus),
      wordLocation: { x: 700, y: 30 },
      viewBox: "-500 60 600 600",
      textAnchor: "end",
      called: false,
    },
    Mars: {
      sign: player.chartData.Mars,
      icon: BirthChart.getIconSVG(player.chartData.Mars),
      location: { x: 650, y: 30 },
      word: BirthChart.getSignWordSVG(player.chartData.Mars),
      wordLocation: { x: 675, y: 260 },
      viewBox: "-500 60 600 600",
      textAnchor: "end",
      called: false,
    },
    Jupiter: {
      sign: player.chartData.Jupiter,
      icon: BirthChart.getIconSVG(player.chartData.Jupiter),
      location: { x: 600, y: 100 },
      word: BirthChart.getSignWordSVG(player.chartData.Jupiter),
      wordLocation: { x: 550, y: 420 },
      viewBox: "-500 60 600 600",
      textAnchor: "end",
      called: false,
    },
    Saturn: {
      sign: player.chartData.Saturn,
      icon: BirthChart.getIconSVG(player.chartData.Saturn),
      location: { x: 515, y: 140 },
      word: BirthChart.getSignWordSVG(player.chartData.Saturn),
      wordLocation: { x: 530, y: 495 },
      viewBox: "-100 60 600 600",
      textAnchor: "end",
      called: false,
    },
    Uranus: {
      sign: player.chartData.Uranus,
      icon: BirthChart.getIconSVG(player.chartData.Uranus),
      location: { x: 430, y: 140 },
      word: BirthChart.getSignWordSVG(player.chartData.Uranus),
      wordLocation: { x: 340, y: 490 },
      viewBox: "-150 60 600 600",
      called: false,
    },

    Neptune: {
      sign: player.chartData.Neptune,
      icon: BirthChart.getIconSVG(player.chartData.Neptune),
      location: { x: 340, y: 90 },
      word: BirthChart.getSignWordSVG(player.chartData.Neptune),
      wordLocation: { x: 190, y: 395 },
      viewBox: "-100 60 600 600",
      called: false,
    },

    Pluto: {
      sign: player.chartData.Pluto,
      icon: BirthChart.getIconSVG(player.chartData.Pluto),
      location: { x: 285, y: 15 },
      word: BirthChart.getSignWordSVG(player.chartData.Pluto),
      wordLocation: { x: 95, y: 245 },
      viewBox: "-100 60 600 600",
      called: false,
    },
    Ascendant: {
      sign: player.chartData.Ascendant,
      icon: BirthChart.getIconSVG(player.chartData.Ascendant),
      location: { x: 300, y: -65 },
      word: BirthChart.getSignWordSVG(player.chartData.Ascendant),
      wordLocation: { x: 90, y: 40 },
      viewBox: "-50 60 600 600",
      textAnchor: "start",
      called: false,
    },
    Descendant: {
      sign: player.chartData.Descendant,
      icon: BirthChart.getIconSVG(player.chartData.Descendant),
      location: { x: 340, y: -150 },
      word: BirthChart.getSignWordSVG(player.chartData.Descendant),
      wordLocation: { x: 150, y: -140 },
      viewBox: "-100 60 600 600",
      called: false,
    },
    Moon: {
      sign: player.chartData.Moon,
      icon: BirthChart.getIconSVG(player.chartData.Moon),
      location: { x: 430, y: -190 },
      word: BirthChart.getSignWordSVG(player.chartData.Moon),
      wordLocation: { x: 315, y: -250 },
      viewBox: "-100 60 600 600",
      textAnchor: "start",
      called: false,
    },
  };

  // console.log("chart", JSON.stringify(chartDisplay));
  // console.log("player", JSON.stringify(player));

  return (
    <>
      <p>{chartDisplay.Sun.sign}</p>
    </>
  );
};

export default BirthChartComponent;
