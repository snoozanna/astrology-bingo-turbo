import React, { createContext, useContext, useState } from "react";
import { BirthChartContext } from "./birthchart.context";
import { UtilitiesContext } from "./utilities.context";

export const GameContext = createContext({
  getRandomPlanet: () => {},
  getRandomSign: () => {},
  pick: () => {},
  alreadyCalled: [],
  potentialCallList: [],
});

export const GameProvider = (props) => {
  const { BirthChart } = useContext(BirthChartContext);
  const { getRandomIntInclusive } = useContext(UtilitiesContext);
  const [alreadyCalled, setAlreadyCalled] = useState([]);
  // const [potentialCallList, setPotentialCallList] = useState([]);

  const potentialCallList = [];
  for (const sign of BirthChart.signs) {
    for (const planet of BirthChart.planets) {
      console.log(planet, sign);
      // setPotentialCallList(...potentialCallList, { planet, sign });
      potentialCallList.push({ planet, sign });
    }
  }

  const getRandomPlanet = () => {
    const Rn = getRandomIntInclusive(0, BirthChart.planets.length - 1);
    let planetToCall = BirthChart.planets[Rn];
    // console.log("planetToCall", planetToCall);
    return planetToCall;
  };

  const getRandomSign = () => {
    const Rn = getRandomIntInclusive(0, BirthChart.signs.length - 1);
    let signToCall = BirthChart.signs[Rn];
    // console.log("signToCall", signToCall);
    return signToCall;
  };

  const pick = (picked = {}) => {
    // console.log("in app.pick", picked, `appId: ${this._id}`);
    if (!picked.planet) {
      picked.planet = getRandomPlanet();
      picked.sign = getRandomSign();
    }

    // Find the object
    const pickedItemIndex = potentialCallList.findIndex(
      ({ sign, planet }) => sign === picked.sign && planet === picked.planet,
    );

    // move from 'potentialCallList' to 'alreadyCalled'
    //Todo set State with new potentialcall list?
    const pickedItem = potentialCallList.splice(pickedItemIndex, 1)[0];
    pickedItem.callPosition = alreadyCalled.length + 1;

    setAlreadyCalled([...alreadyCalled, pickedItem]);
    console.log("potential call list", potentialCallList);

    // for (const player of players) {
    //   player.markCalled(pickedItem);
    // }

    // this.save();
  };

  return (
    <GameContext.Provider
      value={{
        getRandomPlanet,
        getRandomSign,
        pick,
        alreadyCalled,
        potentialCallList,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
