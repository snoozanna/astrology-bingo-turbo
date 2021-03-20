import React, { useContext } from "react";
import Header from "./../../components/Header/Header";
import ChartList from "./../../components/ChartList/ChartList";

import { PlayersContext } from "./../../contexts/players.context"
import { BirthChartContext } from "../../contexts/birthchart.context";

function InPlay() {
  const { players, deletePlayer, deleteAllPlayers } = useContext(
    PlayersContext,
  );

  const { BirthChart } = useContext(BirthChartContext);

  const alice = {
    Ascendant: "Scorpio",
    Chiron: "Cancer",
    Descendant: "Taurus",
    Jupiter: "Cancer",
    Mars: "Aries",
    Mercury: "Cancer",
    Moon: "Sagittarius",
    Neptune: "Capricorn",
    Pluto: "Scorpio",
    Saturn: "Capricorn",
    Sun: "Cancer",
    Uranus: "Capricorn",
    Venus: "Gemini",
    birthday: "1990/07/04",
    latitude: 53.4083714,
    longitude: -2.9915726,
    ownerName: "Alice",
    time: "1800",
  };

  const aliceChart = new BirthChart(alice);
  console.log("alice chart", aliceChart);

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
                <p>
                  Chart:
                  <ChartList data={player.chart} />
                </p>
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
