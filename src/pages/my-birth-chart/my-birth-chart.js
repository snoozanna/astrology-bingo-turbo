import React, { useContext } from "react";
import "./my-birth-chart.scss";
import Header from "../../components/Header/Header";
import ChartList from "../../components/ChartList/ChartList";
import ChartImage from "../../components/ChartImage/ChartImage";
import { useToggle } from "./../../utils/utils";

function MyBirthChart() {
  const [isOn, toggleIsOn] = useToggle();

  const aliceBasic = {
    location: "liverpool uk",
    firstName: "Alice",
    lastName: "Roots",
    email: "alice@alice.com",
    datetime: "1990-07-04T18:00",
    utcoffset: 2,
    latitude: 53.4083714,
    longitude: -2.9915726,
    _id: "619bc",
    chartData: {
      Sun: "Cancer",
      Moon: "Sagittarius",
      Mercury: "Cancer",
      Venus: "Gemini",
      Mars: "Aries",
      Jupiter: "Cancer",
      Saturn: "Capricorn",
      Uranus: "Capricorn",
      Neptune: "Capricorn",
      Pluto: "Scorpio",
      Chiron: "Cancer",
      "North Node": "Aquarius",
      "South Node": "Leo",
      Syzygy: "Cancer",
      "Pars Fortuna": "Aries",
      birthday: "1990/07/04",
      time: "1800",
      latitude: 53.4083714,
      longitude: -2.9915726,
      Ascendant: "Scorpio",
      Descendant: "Taurus",
      ownerName: "Alice Roots",
    },
  };

  return (
    <>
      <div className="App">
        <Header pageName="My Birth Chart" />
        <main>
          <h2>{aliceBasic.chartData.ownerName}</h2>
          <p>Born: {aliceBasic.chartData.birthday}</p>
          <p>{aliceBasic.chartData.time}</p>
          <p>
            Lat: {aliceBasic.chartData.latitude.toFixed()} Long:{" "}
            {aliceBasic.chartData.longitude.toFixed()}
          </p>
          <div className="myBirthChartContainer">
            {isOn ? (
              <ChartList player={aliceBasic.chartData} />
            ) : (
              <ChartImage player={aliceBasic.chartData} />
            )}
          </div>
          <button onClick={() => toggleIsOn()}>Show Chart</button>
        </main>
      </div>
    </>
  );
}

export default MyBirthChart;
