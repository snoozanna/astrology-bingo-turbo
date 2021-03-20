import React from "react";
import Header from "./../../components/Header/Header";
import ChartList from "./../../components/ChartList/ChartList";
import ChartImage from "./../../components/ChartList/ChartImage";
import SignSymbol from "../../components/ChartList/SignSymbol";
import { ReactComponent as TemplateChart } from "./../../assets/template.svg";

function AliceChart() {
  const alice = {
    Ascendant: "Scorpio",
    Chiron: "Cancer",
    Descendant: "Taurus",
    Jupiter: "Cancer",
    Mars: "Aries",
    Mercury: "Cancer",
    Moon: "Sagittarius",
    Neptune: "Capricorn",
    Pluto: "Scorpio",
    Saturn: "Capricorn",
    Sun: "Cancer",
    Uranus: "Capricorn",
    Venus: "Gemini",
    birthday: "1990/07/04",
    latitude: 53.4083714,
    longitude: -2.9915726,
    ownerName: "Alice",
    time: "1800",
  };

  return (
    <>
      <div className="App">
        <Header />
        <main>
          <h1>Alice's Chart </h1>
          <ChartList data={alice} />
          <ChartImage />
          <SignSymbol />
        </main>
      </div>
    </>
  );
}

export default AliceChart;
