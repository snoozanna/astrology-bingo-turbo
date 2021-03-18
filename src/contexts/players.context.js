import React, { createContext, useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { UtilitiesContext } from "./utilities.context";
import { TIME_API_KEY } from "./../config";
// import cloneDeep from 'lodash.cloneDeep'

//we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const PlayersContext = createContext({
  addPlayer: () => {},
  createBirthChartURL: () => {},
  fetchBirthChart: () => {},
  deletePlayer: () => {},
  deleteAllPlayers: () => {},
  error: null,
  players: [],
  loaded: false,
  loading: false,
});

export const PlayersProvider = (props) => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { addToast } = useToasts();
  const { uuidv4 } = useContext(UtilitiesContext);

  //TODO change to datetime
  const createBirthChartURL = ({
    datetime,
    latitude,
    longitude,
    utcoffset,
  }) => {
    const dob = datetime.slice(0, 10).replaceAll("-", "");
    console.log("dob", dob);
    const tob = datetime.slice(11, 16).replace(":", "");
    console.log("tob", tob);
    // const year = Number(dob.slice(0, 4));
    // // console.log("year", year);
    // const month = Number(dob.slice(4, 6));
    // // console.log("month", month);
    // const jsMonth = month - 1;
    // const date = Number(dob.slice(6, 8));
    // // console.log("date", date);
    // const [hours, minutes] = tob.split(":");
    // // console.log("hours", hours, "minutes", minutes);
    const d = new Date(datetime);
    const timestamp = d.getTime();

    const params = new URLSearchParams();
    params.append("location", `${latitude},${longitude}`);
    params.append("timestamp", timestamp);
    params.append("key", TIME_API_KEY);

    console.log("params", params);

    const fetchURL = `http://localhost:8000/formatData?date=${dob}&time=${tob}&location1=${latitude}&location2=${longitude}&utc=${utcoffset}&action=`;
    console.log("fetchURL", fetchURL);
    return fetchURL;
  };

  const fetchBirthChart = async (fetchURL, { firstname, lastname }) => {
    // console.log('loading', loading);
    // console.log('error', error);
    if (loading || loaded || error) {
      return;
    } else {
      setLoading(true);
    }
    try {
      const response = await fetch(fetchURL);
      if (response.status !== 200) {
        throw response;
      }
      let chartData = await response.json();
      chartData = JSON.parse(chartData);
      // chartData.Ascendant = chartData.Asc;
      // chartData.Descendant = BirthChart.descDict[chartData.Ascendant];
      // delete chartData.Asc;
      // chartData.ownerName = `${firstname} ${lastname}`;
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
  // async function getBirthChart(
  //   fetchURL = "",
  //   renderFn,
  //   { firstname, lastname },
  // ) {
  //   try {
  //     const response = await fetch(fetchURL); // because of weird python formatting
  //     //handle bad responses
  //     if (!response.ok) throw response;
  //     let chartData = await response.json();
  //     chartData = JSON.parse(chartData); // twice because stupid python
  //     // console.log("chartData", chartData);
  //     chartData.Ascendant = chartData.Asc;
  //     chartData.Descendant = BirthChart.descDict[chartData.Ascendant];
  //     delete chartData.Asc;

  //     chartData.ownerName = `${firstname} ${lastname}`;

  //     // console.log("chartData", chartData);
  //     const player = new Player({ chartData });
  //     renderFn(player);
  //     bingoGameController.addPlayer(player);
  //   } catch (err) {
  //     console.log(err);
  //     M.toast({
  //       html: `<h2>Error with Python server</h2><p>${err.message}</p>`,
  //       classes: ["toast", "error"],
  //     });
  //   }
  // }

  const addPlayer = (formData) => {
    let newPlayer = {
      ...formData,
      _id: uuidv4(),
    };
    const fetchURL = createBirthChartURL(newPlayer);
    newPlayer.chart = fetchBirthChart(fetchURL, newPlayer);
    console.log("new player", newPlayer);
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

  // ADD PLAYER WITH API
  // const addPlayer = async (formData) => {
  //   try {
  //     const response = await fetch(API_ENDPOINT, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (response.status !== 201) {
  //       throw response;
  //     }
  //     const savedPlayer = await response.json();
  //     console.log("got data", savedPlayer);
  //     setPlayers([...players, savedPlayer]);
  //     addToast(`Saved ${savedPlayer.firstName} ${savedPlayer.lastName}`, {
  //       appearance: "success",
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     addToast(`Error ${err.message || err.statusText}`, {
  //       appearance: "error",
  //     });
  //   }
  // };

  return (
    <PlayersContext.Provider
      value={{
        addPlayer,
        deletePlayer,
        deleteAllPlayers,
        createBirthChartURL,
        fetchBirthChart,
        error: null,
        players,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};
