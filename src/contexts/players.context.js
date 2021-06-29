import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { useToasts } from "react-toast-notifications";

import {
  clearCollection,
  addOne,
  // addMany,
  // getCollection,
  updateOne,
  deleteOne,
  bindListeners,
} from "./../utils/firebase.utils";

import {
  addToLocal,
  updateInLocal,
  removeFromLocal,
  // bulkAddToLocal,
} from "./../utils/state.utils";

import { useToggle, trimToLowerCase, fastSortMatches, fastSortName } from "./../utils/utils";

import { appConfig } from "./../config";
import { getPlayerBirthChartData } from "../utils/player.utils";

const { PLAYERS_COLLECTION_NAME } = appConfig;

export const PlayersContext = createContext({
  addPlayer: () => {},
  updatePlayer: () => {},
  deletePlayer: () => {},
  deleteAllPlayers: () => {},
  toggleSort: () => {},
  toggleMatchVisibility: () => {},
  error: null,
  players: [],
  loaded: false,
  loading: false,
  sorted: false,
  matchesVisible: false,
});

export const PlayersProvider = (props) => {
  const { addToast } = useToasts();

  const [players, setPlayers] = useState([]);
  const [sorted, toggleSort] = useToggle();
  const [matchesVisible, toggleMatchVisibility] = useToggle();

  useEffect(() => {
    return bindListeners(PLAYERS_COLLECTION_NAME, {
      add: (doc) => {
        // console.log(`adding player ${doc.id}`);
        addToLocal(setPlayers, doc);
      },
      update: (doc) => {
        // console.log(`updating player ${doc.id}`);
        updateInLocal(setPlayers, doc);
      },
      remove: (doc) => {
        // console.log(`deleting player ${doc.id}`);
        removeFromLocal(setPlayers, doc);
      },
    });
  }, []);

  useEffect(() => {
    console.log("sorted var", sorted);
    if (sorted) {
      console.log("sorting", players);
      // const sortedPlayers = players
      //   .sort(
      //     (playerA, playerB) => playerA.matches.length - playerB.matches.length
      //   )
      //   .reverse();
      const sortedPlayers = fastSortMatches(players);
      console.log("sorted players", sortedPlayers);
      setPlayers(sortedPlayers);
    } else {
      // sort by something
      console.log("unsorting", players);
      const sortedPlayers = fastSortName(players);
      console.log("unsorted players", sortedPlayers);
      setPlayers(sortedPlayers);
    }
  }, [sorted]);

  const addPlayer = async (newPlayer) => {
    console.log("new player pre chart", newPlayer);

    try {
      const chartData = await getPlayerBirthChartData(newPlayer);
      newPlayer.chartData = chartData;
      newPlayer.matches = [];
      newPlayer._id = `${trimToLowerCase(
        newPlayer.firstName
      )}-${trimToLowerCase(newPlayer.lastName)}-${trimToLowerCase(
        newPlayer.datetime
      )}`;
      newPlayer.joined = Date.now();
      await addOne(newPlayer, PLAYERS_COLLECTION_NAME);

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

  const updatePlayer = async (player, updates) => {
    console.log("updatePlayer", player, updates);
    try {
      const result = await updateOne(
        player._id,
        updates,
        PLAYERS_COLLECTION_NAME
      );
      addToast(
        `Updated ${updates.firstName ? updates.firstName : player.firstName} ${
          updates.lastName ? updates.lastName : player.lastName
        }`,
        {
          appearance: "success",
        }
      );
      return result;
    } catch (err) {
      console.log("updatePlayer err", err);
      addToast(err.message, {
        appearance: "error",
      });
    }
  };

  const deletePlayer = async (id) => {
    // debugger;
    try {
      console.log("deleting player with id", id);
      const index = players.findIndex((player) => player._id === id);

      if (index === -1) {
        throw new Error(`Failed to find player id: ${id}`);
      }

      await deleteOne(id, PLAYERS_COLLECTION_NAME);

      const deletedPlayer = players[index];

      console.log("Document successfully deleted!", deletedPlayer);
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

  const deleteAllPlayers = async () => {
    const consent = window.confirm(
      "Are you sure you want to delete all the players?"
    );
    if (consent) {
      addToast(`Deleting all players`, {
        appearance: "info",
      });
      await clearCollection(players, PLAYERS_COLLECTION_NAME);
      addToast(`All players deleted`, {
        appearance: "success",
      });
    }
  };

  return (
    <PlayersContext.Provider
      value={{
        addPlayer,
        updatePlayer,
        deletePlayer,
        deleteAllPlayers,
        toggleSort,
        toggleMatchVisibility,
        error: null,
        players,
        sorted,
        matchesVisible,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};
