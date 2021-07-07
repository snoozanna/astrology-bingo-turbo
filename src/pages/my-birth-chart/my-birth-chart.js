import React from "react";
import "./my-birth-chart.scss";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header";
// import NavIcon from "../../components/NavIcon/NavIcon";
import IconList from "../../components/IconList/IconList";
import ChartImage from "../../components/ChartImage/ChartImage";
import { useToggle } from "./../../utils/utils";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 15,
    justifyContent: "space-around",
    alignItems: "center",
    color: "black",
    backgroundColor: "ivory",
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
  ownerName: {
    fontFamily: "Chromate",
    fontSize: "3rem",
  },
}));

function MyBirthChart() {
  const [isOn, toggleIsOn] = useToggle();
  const classes = useStyles();

  const aliceBasic = {
    longitude: "-2.9915726",
    latitude: "53.4083714",
    location: "ChIJt2BwZIrfekgRAW4XP28E3EI",
    datetime: "1990-07-04T18:00",
    utcoffset: "1",
    locationSearchTerm: "liverpool uk",
    email: "alice@alice.com",
    lastName: "Roots",
    firstName: "Alice",
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
    },
    matches: [],
    _id: "alice-roots-1990-07-04t18:00",
    joined: 1625260324975,
  };

  const {
    firstName,
    lastName,
    // chartData: { birthday, time, latitude, longitude },
  } = aliceBasic;

  return (
    <>
      <div className="App myChart">
        <Header pageName="My Birth Chart" />
        {/* <NavIcon pageName="Homepage" /> */}
        <main>
          <div className={classes.mainContainer}>
            <h2 className={classes.ownerName}>
              {firstName} {lastName}
            </h2>
            <div className={classes.myBirthChartContainer}>
              {isOn ? (
                <IconList player={aliceBasic} />
              ) : (
                // <ChartList player={aliceBasic} />
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
