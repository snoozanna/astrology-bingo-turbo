import React, { useContext } from "react";
import { PlayersContext } from "./../../contexts/players.context";
import "./Report.scss";

const Report = () => {
  const { players } = useContext(PlayersContext);

  const playerSuns = [];
  playerSuns.push(players.map((player) => player.chartData.Sun));

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

  return (
    <>
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
    </>
  );
};

export default Report;
