import React, { createContext, useState, useEffect } from "react";
import { firestore as db } from "./../firebase";
import { useToasts } from "react-toast-notifications";
import { TIME_API_KEY } from "./../config";
import { descDict } from "./../constants";
import ChartImage from "../components/ChartImage/ChartImage";
import ChartList from "./../components/ChartList/ChartList";

// import cloneDeep from 'lodash.cloneDeep'

const playerCollectionName = "players";

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
  const { addToast } = useToasts();

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Get initial data
    const getPlayers = async () => {
      try {
        const snapshot = await db.collection(playerCollectionName).get();
        console.log("snapshot", snapshot);
        const newPlayers = snapshot.docs.map((doc) => {
          console.log("new id", doc.id);
          return { _id: doc.id, ...doc.data() };
        });

        setPlayers(newPlayers);
      } catch (err) {
        console.log(err);
        addToast(err.message, {
          appearance: "error",
        });
      }
    };

    // if(!players.length){
    getPlayers();
    // }

    // Watch the collection
    db.collection(playerCollectionName).onSnapshot((snapshot) => {
      console.log("snapshot", snapshot);
      let changes = snapshot.docChanges();
      for (const change of changes) {
        switch (change.type) {
          case "added":
            console.log("added", change);
            getPlayers();
            break;
          case "removed":
            console.log("removed", change, change.doc.id);
            getPlayers();
            break;
          default:
            return;
        }
      }
    });
  }, []); // ignore exhaustive deps. we only want this to run once
 
  // const { BirthChart } = useContext(BirthChartContext);
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

    const fetchURL = `http://localhost:8000/formatData?date=${dob}&time=${tob}&location1=${latitude}&location2=${longitude}&utc=${utcoffset}&action=`;

    return fetchURL;
  };

  const fetchBirthChart = async (fetchURL, { firstName, lastName }) => {
    try {
      const response = await fetch(fetchURL);
      if (!response.ok) throw response;

      const data = await response.json();
      return data;
    } catch (err) {
      console.log("fetchBirthChart error", err);
      return err;
    }
  };

  const addPlayer = async (newPlayer) => {
    console.log("new player", newPlayer);
    const fetchURL = createBirthChartURL(newPlayer);
    console.log("URL", fetchURL);
    try {
      const birthChartData = await fetchBirthChart(fetchURL, newPlayer);
      console.log("birthChartData", birthChartData);
      newPlayer.chartData = JSON.parse(birthChartData);
      console.log("new player with chart", newPlayer);
      // debugger;
      newPlayer.chartData.Ascendant = newPlayer.chartData.Asc;
      delete newPlayer.chartData.Asc;
      newPlayer.chartData.Descendant = descDict[newPlayer.chartData.Ascendant];
      // chartData.ownerName = `${firstName} ${lastName}`;

      const docRef = await db.collection(playerCollectionName).add(newPlayer);
      console.log("docRef", docRef);
      console.log("Document written with ID: ", docRef.id);

      addToast(`Saved ${newPlayer.firstName} ${newPlayer.lastName}`, {
        appearance: "success",
      });
    } catch (err) {
      console.log("addPlayer err", err);
      addToast(err.message, {
        appearance: "error",
      });
    }
  };

  //TODO UPDATE PLAYER
  const updatePlayer = async (original, updates) => {
    console.log("updateItem", original, updates);
    try {
      await db.collection.doc(original.id).update(updates);
      addToast(
        `Updated ${
          updates.firstName ? updates.firstName : original.firstName
        } ${updates.lastName ? updates.lastName : original.lastName}`,
        {
          appearance: "success",
        },
      );
    } catch (err) {
      console.log("updatePlayer err", err);
      addToast(err.message, {
        appearance: "error",
      });
    }
  };

  const deletePlayer = async (id) => {
    // Get index
    // debugger;
    console.log("deleting player with id", id);
    const index = players.findIndex((player) => player._id === id);

    if (index === -1) {
      addToast(`Error: Failed to find player id: ${id}`, {
        appearance: "error",
      });
      return;
    }

    const deletedPlayer = players[index];

    try {
      await db.collection(playerCollectionName).doc(id).delete();

      console.log("Document successfully deleted!");
      addToast(`Deleted ${deletedPlayer.firstName} ${deletedPlayer.lastName}`, {
        appearance: "success",
      });
    } catch (err) {
      console.log("deletePlayer err", err);
      addToast(`Error: Failed to delete player id: ${id}`, {
        appearance: "error",
      });
    }
  };

  const deleteAllPlayers = () => {
    const consent = window.confirm(
      "Are you sure you want to delete all the players?",
    );
    if (consent) {
      for (const player of players) {
        deletePlayer(player._id);
      }
    }
  };

  const showChart = ({ player }, format = "list") => {
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
        // createBirthChartURL,
        // fetchBirthChart,
        showChart,
        error: null,
        players,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};

/*
const query = firebase.firestore()
.collection('restaurants')
.orderBy('avgRating', 'desc')
.limit(50);
this.getDocumentsInQuery(query, render);

query.onSnapshot((snapshot) => {
if (!snapshot.size) {
  return render();
}

snapshot.docChanges().forEach((change) => {
  if (change.type === 'added' || change.type === 'modified') {
    render(change.doc);
  }
});
});
*/
