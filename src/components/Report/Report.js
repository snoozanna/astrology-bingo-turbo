import React, { useContext } from "react";
import { PlayersContext } from "./../../contexts/players.context";
import "./Report.scss";

const Report = () => {
  const { players } = useContext(PlayersContext);

  const playerSuns = [];
  const playerMoons = [];
  const playerAscs = [];
  playerSuns.push(players.map((player) => player.chartData.Sun));
  playerMoons.push(players.map((player) => player.chartData.Moon));
  playerAscs.push(players.map((player) => player.chartData.Ascendant));

  //Sun count
  const ariesCount = playerSuns[0].filter((i) => i === "Aries").length;
  const taurusCount = playerSuns[0].filter((i) => i === "Taurus").length;
  const geminiCount = playerSuns[0].filter((i) => i === "Gemini").length;
  const cancerCount = playerSuns[0].filter((i) => i === "Cancer").length;
  const leoCount = playerSuns[0].filter((i) => i === "Leo").length;
  const virgoCount = playerSuns[0].filter((i) => i === "Virgo").length;
  const libraCount = playerSuns[0].filter((i) => i === "Libra").length;
  const scorpioCount = playerSuns[0].filter((i) => i === "Scorpio").length;
  const sagittariusCount = playerSuns[0].filter(
    (i) => i === "Sagittarius",
  ).length;
  const capricornCount = playerSuns[0].filter((i) => i === "Capricorn").length;
  const aquariusCount = playerSuns[0].filter((i) => i === "Aquarius").length;
  const piscesCount = playerSuns[0].filter((i) => i === "Pisces").length;

  //Moon Count
  const ariesMoonCount = playerMoons[0].filter((i) => i === "Aries").length;
  const taurusMoonCount = playerMoons[0].filter((i) => i === "Taurus").length;
  const geminiMoonCount = playerMoons[0].filter((i) => i === "Gemini").length;
  const cancerMoonCount = playerMoons[0].filter((i) => i === "Cancer").length;
  const leoMoonCount = playerMoons[0].filter((i) => i === "Leo").length;
  const virgoMoonCount = playerMoons[0].filter((i) => i === "Virgo").length;
  const libraMoonCount = playerMoons[0].filter((i) => i === "Libra").length;
  const scorpioMoonCount = playerMoons[0].filter((i) => i === "Scorpio").length;
  const sagittariusMoonCount = playerMoons[0].filter(
    (i) => i === "Sagittarius",
  ).length;
  const capricornMoonCount = playerMoons[0].filter(
    (i) => i === "Capricorn",
  ).length;
  const aquariusMoonCount = playerMoons[0].filter(
    (i) => i === "Aquarius",
  ).length;
  const piscesMoonCount = playerMoons[0].filter((i) => i === "Pisces").length;

  // Asc Count

  const ariesAscCount = playerAscs[0].filter((i) => i === "Aries").length;
  const taurusAscCount = playerAscs[0].filter((i) => i === "Taurus").length;
  const geminiAscCount = playerAscs[0].filter((i) => i === "Gemini").length;
  const cancerAscCount = playerAscs[0].filter((i) => i === "Cancer").length;
  const leoAscCount = playerAscs[0].filter((i) => i === "Leo").length;
  const virgoAscCount = playerAscs[0].filter((i) => i === "Virgo").length;
  const libraAscCount = playerAscs[0].filter((i) => i === "Libra").length;
  const scorpioAscCount = playerAscs[0].filter((i) => i === "Scorpio").length;
  const sagittariusAscCount = playerAscs[0].filter(
    (i) => i === "Sagittarius",
  ).length;
  const capricornAscCount = playerAscs[0].filter(
    (i) => i === "Capricorn",
  ).length;
  const aquariusAscCount = playerAscs[0].filter((i) => i === "Aquarius").length;
  const piscesAscCount = playerAscs[0].filter((i) => i === "Pisces").length;

  return (
    <>
      <div>
        <h2 className="prevCallItem">Total Players: {players.length}</h2>
        <div>
          <h2 className="prevCallItem">SUN SIGN REPORT</h2>

          <div class="reportContainer">
            <div class="reportItem">
              <div class="reportCount">Aries: {ariesCount} </div>
              <div class="reportPer">
                {((ariesCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Taurus: {taurusCount} </div>
              <div class="reportPer">
                {((taurusCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Gemini: {geminiCount} </div>
              <div class="reportPer">
                {((geminiCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Cancer: {cancerCount} </div>
              <div class="reportPer">
                {((cancerCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Leo: {leoCount}</div>{" "}
              <div class="reportPer">
                {((leoCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Virgo: {virgoCount} </div>
              <div class="reportPer">
                {((virgoCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Libra: {libraCount} </div>
              <div class="reportPer">
                {((libraCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Sagittarius: {sagittariusCount} </div>
              <div class="reportPer">
                {((sagittariusCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Scorpio: {scorpioCount} </div>
              <div class="reportPer">
                {((scorpioCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Capricorn: {capricornCount} </div>
              <div class="reportPer">
                {((capricornCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Aquarius: {aquariusCount} </div>
              <div class="reportPer">
                {((aquariusCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Pisces: {piscesCount} </div>
              <div class="reportPer">
                {((piscesCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="prevCallItem">MOON SIGN REPORT</h2>
          <div class="reportContainer">
            <div class="reportItem">
              <div class="reportCount">Aries: {ariesMoonCount} </div>
              <div class="reportPer">
                {((ariesMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Taurus: {taurusMoonCount} </div>
              <div class="reportPer">
                {((taurusMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Gemini: {geminiMoonCount} </div>
              <div class="reportPer">
                {((geminiMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Cancer: {cancerMoonCount} </div>
              <div class="reportPer">
                {((cancerMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Leo: {leoMoonCount}</div>{" "}
              <div class="reportPer">
                {((leoMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Virgo: {virgoMoonCount} </div>
              <div class="reportPer">
                {((virgoMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Libra: {libraMoonCount} </div>
              <div class="reportPer">
                {((libraMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">
                Sagittarius: {sagittariusMoonCount}{" "}
              </div>
              <div class="reportPer">
                {((sagittariusMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Scorpio: {scorpioMoonCount} </div>
              <div class="reportPer">
                {((scorpioMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Capricorn: {capricornMoonCount} </div>
              <div class="reportPer">
                {((capricornMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Aquarius: {aquariusMoonCount} </div>
              <div class="reportPer">
                {((aquariusMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Pisces: {piscesMoonCount} </div>
              <div class="reportPer">
                {((piscesMoonCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="prevCallItem">RISING SIGN REPORT</h2>
          <div class="reportContainer">
            <div class="reportItem">
              <div class="reportCount">Aries: {ariesAscCount} </div>
              <div class="reportPer">
                {((ariesAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Taurus: {taurusAscCount} </div>
              <div class="reportPer">
                {((taurusAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Gemini: {geminiAscCount} </div>
              <div class="reportPer">
                {((geminiAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Cancer: {cancerAscCount} </div>
              <div class="reportPer">
                {((cancerAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Leo: {leoAscCount}</div>{" "}
              <div class="reportPer">
                {((leoAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Virgo: {virgoAscCount} </div>
              <div class="reportPer">
                {((virgoAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Libra: {libraAscCount} </div>
              <div class="reportPer">
                {((libraAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Sagittarius: {sagittariusAscCount} </div>
              <div class="reportPer">
                {((sagittariusAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Scorpio: {scorpioAscCount} </div>
              <div class="reportPer">
                {((scorpioAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Capricorn: {capricornAscCount} </div>
              <div class="reportPer">
                {((capricornAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Aquarius: {aquariusAscCount} </div>
              <div class="reportPer">
                {((aquariusAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
            <div class="reportItem">
              <div class="reportCount">Pisces: {piscesAscCount} </div>
              <div class="reportPer">
                {((piscesAscCount / players.length) * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
