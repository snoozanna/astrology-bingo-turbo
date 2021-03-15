import React, { createContext, useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { UtilitiesContext } from "./utilities.context";
// import cloneDeep from 'lodash.cloneDeep'

//we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const PlayersContext = createContext({
  addPlayer: () => {},
  deletePlayer: () => {},
  deleteAllPlayers: () => {},
  error: null,
  players: [],
});

export const PlayersProvider = (props) => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const { addToast } = useToasts();
  const { uuidv4 } = useContext(UtilitiesContext);

  const addPlayer = (formData) => {
    let newPlayer = {
      ...formData,
      _id: uuidv4(),
    };
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
        error: null,
        players,
      }}
    >
      {props.children}
    </PlayersContext.Provider>
  );
};
