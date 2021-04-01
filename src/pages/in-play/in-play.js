import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import ChartList from "./../../components/ChartList/ChartList";
import PlayerListing from "./../../components/PlayerListing/PlayerListing";

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
              // console.log("player", player),
              <PlayerListing player={player} />
            ))}
          </ul>
          <button onClick={() => deleteAllPlayers}>Delete all players</button>
        </main>
      </div>
    </>
  );
}

export default InPlay;
