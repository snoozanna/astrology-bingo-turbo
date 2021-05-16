import React, { createContext, useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { v4 as uuidv4 } from "uuid";
import { BirthChartContext } from "./birthchart.context";
import { TIME_API_KEY } from "./../config";
import ChartImage from "../components/ChartImage/ChartImage";
import ChartList from "./../components/ChartList/ChartList";
// import cloneDeep from 'lodash.cloneDeep'

//we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const PlayersContext = createContext({
  addPlayer: () => {},
  createBirthChartURL: () => {},
  fetchBirthChart: () => {},
  deletePlayer: () => {},
  deleteAllPlayers: () => {},
  showChart: () => {},
  error: null,
  players: [],
  loaded: false,
  loading: false,
});

export const PlayersProvider = (props) => {
  const [players, setPlayers] = useState([
    {
      location: "leeds",
      firstName: "Robert",
      lastName: "De Niro",
      email: "rob@rob.com",
      datetime: "1967-08-01T09:01",
      utcoffset: 1,
      latitude: 53.8007554,
      longitude: -1.5490774,
      _id: "34dde",
      chartData: {
        Sun: "Leo",
        Moon: "Gemini",
        Mercury: "Cancer",
        Venus: "Virgo",
        Mars: "Scorpio",
        Jupiter: "Leo",
        Saturn: "Aries",
        Uranus: "Virgo",
        Neptune: "Scorpio",
        Pluto: "Virgo",
        Chiron: "Pisces",
        "North Node": "Taurus",
        "South Node": "Scorpio",
        Syzygy: "Capricorn",
        "Pars Fortuna": "Cancer",
        birthday: "1967/08/01",
        time: "0901",
        latitude: 53.8007554,
        longitude: -1.5490774,
        Ascendant: "Virgo",
        Descendant: "Pisces",
        ownerName: "Robert De Niro",
      },
    },
  ]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { addToast } = useToasts();

  const { BirthChart } = useContext(BirthChartContext);
  const createBirthChartURL = ({
    datetime,
    latitude,
    longitude,
    utcoffset,
  }) => {
    const dob = datetime.slice(0, 10).replaceAll("-", "");
    const tob = datetime.slice(11, 16).replace(":", "");
    const d = new Date(datetime);
    const timestamp = d.getTime();

    const params = new URLSearchParams();
    params.append("location", `${latitude},${longitude}`);
    params.append("timestamp", timestamp);
    params.append("key", TIME_API_KEY);

    // console.log("params", params);

    const fetchURL = `http://localhost:8000/formatData?date=${dob}&time=${tob}&location1=${latitude}&location2=${longitude}&utc=${utcoffset}&action=`;
    console.log("fetchURL", fetchURL);
    return fetchURL;
  };

  const fetchBirthChart = async (fetchURL, { firstName, lastName }) => {
    // console.log('loading', loading);
    // console.log('error', error);
    if (loading || loaded || error) {
      return;
    } else {
      setLoading(true);
    }
    try {
      const response = await fetch(fetchURL);
      console.log("reponse", response);
      if (response.status !== 200) {
        throw response;
      }
      let chartData = await response.json();
      chartData = JSON.parse(chartData);
      chartData.Ascendant = chartData.Asc;

      chartData.Descendant = BirthChart.descDict[chartData.Ascendant];
      delete chartData.Asc;
      chartData.ownerName = `${firstName} ${lastName}`;
      console.log("chartdata", chartData);
      return chartData;
      // setLoading(false);
    } catch (err) {
      setError(err.message || err.statusText);
    } finally {
      setLoading(false);
      setLoaded("true");
    }
  };

  const addPlayer = async (formData) => {
    let newPlayer = {
      ...formData,
      _id: uuidv4(),
    };
    console.log("new player", newPlayer);
    const fetchURL = createBirthChartURL(newPlayer);
    console.log("URL", fetchURL);
    const fetchData = await fetchBirthChart(fetchURL, newPlayer);
    console.log("fetchData", fetchData);
    newPlayer.chartData = fetchData;
    console.log("new player with chart", JSON.stringify(newPlayer));
    setPlayers([...players, newPlayer]);
    addToast(`Saved ${newPlayer.firstName} ${newPlayer.lastName}`, {
      appearance: "success",
    });
  };

  //TODO UPDATE PLAYER

  const deletePlayer = async (id) => {
    // Get index
    console.log("trying to delete player");
    const index = players.findIndex((player) => player._id === id);
    const deletedPlayer = players[index];

    if (index === -1) {
      addToast(`Error: Failed to delete player id: ${id}`, {
        appearance: "error",
      });
      return;
    }
    // recreate the players array without that color
    const updatedPlayers = [
      ...players.slice(0, index),
      ...players.slice(index + 1),
    ];
    setPlayers(updatedPlayers);
    addToast(`Deleted ${deletedPlayer.firstName} ${deletedPlayer.lastName}`, {
      appearance: "success",
    });
  };

  const deleteAllPlayers = () => {
    const players = [];
    setPlayers(players);
    addToast(`All players deleted`, {
      appearance: "success",
    });
  };


  const showChart = ({ player }, format = "list" | "image") => {
    console.log("player", player);
    console.log("format", format);
    if (format === "list") {
      return <ChartList player={player} />;
    } else if (format === "image") {
      return (
        <div>
          <ChartImage player={player} />
        </div>
      );
    }
  };

  return (
    <PlayersContext.Provider
      value={{
        addPlayer,
        deletePlayer,
        deleteAllPlayers,
        createBirthChartURL,
        fetchBirthChart,
        showChart,
        error: null,
        players,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};
