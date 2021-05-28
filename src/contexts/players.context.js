import React, { createContext, useContext, useState, useEffect } from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import app from "./../firebase.js";
import { useCollection } from "react-firebase-hooks/firestore";
import { useToasts } from "react-toast-notifications";
import { v4 as uuidv4 } from "uuid";
import { BirthChartContext } from "./birthchart.context";
import { TIME_API_KEY } from "./../config";
import ChartImage from "../components/ChartImage/ChartImage";
import ChartList from "./../components/ChartList/ChartList";

// import cloneDeep from 'lodash.cloneDeep'

// var app = firebase.initializeApp({
//   apiKey: "AIzaSyDt33A_WcPQ4uHoxhVQMAJlw9AtwXRnMM8",
//   authDomain: "astrology-bingo-turbo.firebaseapp.com",
//   // databaseURL: "https://astrology-bingo-turbo-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "astrology-bingo-turbo",
//   storageBucket: "astrology-bingo-turbo.appspot.com",
//   messagingSenderId: "626576818122",
//   appId: "1:626576818122:web:e0a4f651ae4f5062169933",
//   measurementId: "G-0DNG6GEJR6",
// }); // your values here...

//we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const PlayersContext = createContext({
  addPlayer: () => {},
  updatePlayer: () => {},
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

  const collection = firebase.firestore().collection("players");

  // const [snapshot, loading, error] = useCollection(collection, {
  const [snapshot] = useCollection(collection, {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (error) {
      //     setError(err);
      console.log(error);
      addToast(`Error: ${error}`, {
        appearance: "error",
      });
    }
  }, [error, addToast]);

  useEffect(() => {
    if (snapshot) {
      console.log("doc", snapshot.docs);
      setPlayers(
        snapshot.docs.map((doc) => Object.assign({ id: doc.id }, doc.data())),
      );
      // setLoaded(true);
    }
  }, [snapshot /*, loaded */]);

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
    // console.log("fetchURL", fetchURL);
    return fetchURL;
  };

  const fetchBirthChart = async (fetchURL, { firstName, lastName }) => {
    // console.log('loading', loading);
    // console.log("error", error);
    // if (loading || loaded || error) {
    if (loading || error) {
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
    // setPlayers([...players, newPlayer]);
    // addToast(`Saved ${newPlayer.firstName} ${newPlayer.lastName}`, {
    //   appearance: "success",
    // });
    try {
      collection.add(newPlayer);
      addToast(`Added ${newPlayer.firstName} ${newPlayer.lastName}`, {
        appearance: "success",
      });
    } catch (err) {
      console.log(err);
      addToast(`Error Adding ${newPlayer.firstName} ${newPlayer.lastName}`, {
        appearance: "error",
      });
    }
  };

  //TODO UPDATE PLAYER
  const updatePlayer = async (original, updates) => {
    console.log("updateItem", original, updates);

    collection.doc(original._id).update(updates);

    addToast(`Updated ${original.firstName} ${original.lastName}`, {
      appearance: "success",
    });
  };

  const deletePlayer = async (id) => {
    // Get index
    debugger;
    console.log("deleting player with id", id);
    const index = players.findIndex((player) => player._id === id);
    const deletedPlayer = players[index];
    console.log(deletedPlayer.firstName);
    try {
      collection
        .doc(id)
        .delete()
        .then((...args) => {
          console.log("args", args);
          addToast(
            `Deleted ${deletedPlayer.firstName} ${deletedPlayer.lastName}`,
            {
              appearance: "success",
            },
          );
        })
        .catch((...error) => {
          console.log("error", error);
          addToast(
            `Error deleting ${deletedPlayer.firstName} ${deletedPlayer.lastName}`,
            {
              appearance: "error",
            },
          );
        });
    } catch (err) {
      console.error(err);
      addToast(
        `Error deleting ${deletedPlayer.firstName} ${deletedPlayer.lastName}`,
        {
          appearance: "error",
        },
      );
    }

    // console.log("trying to delete player");
    // const index = players.findIndex((player) => player._id === id);
    // const deletedPlayer = players[index];

    // if (index === -1) {
    //   addToast(`Error: Failed to delete player id: ${id}`, {
    //     appearance: "error",
    //   });
    //   return;
    // }
    // // recreate the players array without that color
    // const updatedPlayers = [
    //   ...players.slice(0, index),
    //   ...players.slice(index + 1),
    // ];
    // setPlayers(updatedPlayers);
    // addToast(`Deleted ${deletedPlayer.firstName} ${deletedPlayer.lastName}`, {
    //   appearance: "success",
    // });
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
        updatePlayer,
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
