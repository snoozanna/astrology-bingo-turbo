import React, { useContext } from "react";
import Header from "./../../components/Header/Header";

import { PlayersContext } from "./../../contexts/players.context";

function InPlay() {
  const { players, deletePlayer, deleteAllPlayers } = useContext(
    PlayersContext,
  );

  return (
    <>
      <div className="App">
        <Header />
        <main>
          <h1>Birth Charts in play</h1>
          <ul>
            {players.map((player) => (
              <li key={player._id}>
                <p>First name: {player.firstName}</p>
                <p>Last name: {player.lastName}</p>
                <p>Email: {player.email}</p>
                <button onClick={() => deletePlayer(player._id)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={() => deleteAllPlayers}>Delete all players</button>
        </main>
      </div>
    </>
  );
}

export default InPlay;
