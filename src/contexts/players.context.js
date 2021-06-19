import React, { createContext, useState, useEffect, useCallback } from "react";
import { useToasts } from "react-toast-notifications";

import {
  clearCollection,
  addOne,
  // addMany,
  getCollection,
  updateOne,
  deleteOne,
  // bindListeners,
} from "./../utils/firebase.utils";

import { appConfig } from "./../config";
import { addBirthChartToPlayer } from "../utils/player.utils";

const {
  PLAYER_COLLECTION_NAME,
  // CELEB_COLLECTION_NAME,
} = appConfig;

export const PlayersContext = createContext({
  addPlayer: () => {},
  updatePlayer: () => {},
  deletePlayer: () => {},
  deleteAllPlayers: () => {},
  error: null,
  players: [],
  loaded: false,
  loading: false,
});

export const PlayersProvider = (props) => {
  const { addToast } = useToasts();

  const [players, setPlayers] = useState([]);

  const getPlayers = useCallback(async () => {
    console.log("running setup players");
    let newPlayers = [];
    try {
      newPlayers = await getCollection(PLAYER_COLLECTION_NAME);
      console.log(
        "🚀 ~ file: players.context.js ~ line 41 ~ getPlayers ~ newPlayers",
        newPlayers
      );

      setPlayers(newPlayers);
      // bindListeners(PLAYER_COLLECTION_NAME);
    } catch (err) {
      console.log(err);
      addToast(err.message, {
        appearance: "error",
      });
    }
  }, [addToast]);

  useEffect(() => {
    // Get initial data
    getPlayers(appConfig.useCelebs);
  }, [addToast, getPlayers]);

  const addPlayer = async (newPlayer) => {
    console.log("new player pre chart", newPlayer);

    try {
      const newPlayerWithBirthchart = await addBirthChartToPlayer(newPlayer);

      const docRef = await addOne(
        newPlayerWithBirthchart,
        PLAYER_COLLECTION_NAME
      );
      console.log("Document written with ID: ", docRef.id);

      addToast(
        `Saved ${newPlayerWithBirthchart.firstName} ${newPlayerWithBirthchart.lastName}`,
        {
          appearance: "success",
        }
      );
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
      await updateOne(original._id, updates, PLAYER_COLLECTION_NAME);
      addToast(
        `Updated ${
          updates.firstName ? updates.firstName : original.firstName
        } ${updates.lastName ? updates.lastName : original.lastName}`,
        {
          appearance: "success",
        }
      );
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

      await deleteOne(id, PLAYER_COLLECTION_NAME);

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
      await clearCollection(players, PLAYER_COLLECTION_NAME);
    }
  };

  return (
    <PlayersContext.Provider
      value={{
        addPlayer,
        updatePlayer,
        deletePlayer,
        deleteAllPlayers,
        error: null,
        players,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};
