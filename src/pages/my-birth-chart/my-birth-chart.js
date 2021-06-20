import React from "react";
import "./my-birth-chart.scss";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header";
// import NavIcon from "../../components/NavIcon/NavIcon";
import ChartList from "../../components/ChartList/ChartList";
import ChartImage from "../../components/ChartImage/ChartImage";
import { useToggle } from "./../../utils/utils";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexFlow: "row-reverse",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },

  myBirthChartContainer: {
    width: "80vh",
    maxHeight: "100vh",
  },
  ownerContainer: {
    border: "black solid 1px",
    borderRadius: "1rem",
    height: "fit-content",
    padding: 15,
  },
}));

function MyBirthChart() {
  const [isOn, toggleIsOn] = useToggle();
  const classes = useStyles();

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
        {/* <NavIcon pageName="Homepage" /> */}
        <main>
          <div className={classes.mainContainer}>
            <div className={classes.ownerContainer}>
              <h2>{aliceBasic.chartData.ownerName}</h2>
              <p>Born: {aliceBasic.chartData.birthday}</p>
              <p>{aliceBasic.chartData.time}</p>
              <p>
                Lat: {aliceBasic.chartData.latitude.toFixed()} Long:{" "}
                {aliceBasic.chartData.longitude.toFixed()}
              </p>
              <button onClick={() => toggleIsOn()}>Toggle Chart</button>
            </div>
          <div className={classes.myBirthChartContainer}>
            {isOn ? (
              <ChartList player={aliceBasic} />
            ) : (
              <ChartImage player={aliceBasic} />
            )}
          </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default MyBirthChart;
