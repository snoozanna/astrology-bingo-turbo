import React, { useContext } from "react";
import ChartList from "./../../components/ChartList/ChartList";

import { PlayersContext } from "./../../contexts/players.context";

const PlayerListing = (player) => {
  const { deletePlayer } = useContext(PlayersContext);
  const playerData = player.player;
  console.log("player", playerData);
  return (
    <>
      <li key={playerData._id}>
        {console.log("player from listimg ", playerData)}
        <p>First name: {playerData.firstName}</p>
        <p>Last name: {playerData.lastName}</p>
        <p>Email: {playerData.email}</p>
        <p>
          Chart:
          <ChartList data={playerData.chart} />
        </p>
        <button onClick={() => deletePlayer(playerData._id)}>Delete</button>
      </li>
    </>
  );
};

export default PlayerListing;
