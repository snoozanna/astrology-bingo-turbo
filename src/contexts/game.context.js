import React, { createContext, useState, useEffect, useCallback } from "react";
// import { firestore as db } from "./../firebase";
import { signs, planets } from "./../constants";
import { getRandomIntInclusive } from "./../utils/utils";
import {
  clearCollection,
  addOne,
  addMany,
  getCollection,
  deleteOne,
  bindListeners,
} from "./../utils/firebase.utils";
import { useToasts } from "react-toast-notifications";

const PICKED_COLLECTION_NAME = "picked";
const POTENTIAL_PICKS_COLLECTION_NAME = "potential-picks";

export const GameContext = createContext({
  getRandomPlanet: () => {},
  getRandomSign: () => {},
  pick: () => {},
  alreadyCalled: [],
  potentialCallList: [],
});

export const GameProvider = (props) => {
  const { addToast } = useToasts();

  const [initialised, setIntialised] = useState(() => {
    const isInitialised = Boolean(localStorage.getItem('initialised'));
    if(!isInitialised) {
      localStorage.setItem('initialised', true);
    }
    return isInitialised;
  });
  const [alreadyCalled, setAlreadyCalled] = useState([]);
  const [potentialCallList, setPotentialCallList] = useState([]);

  const getFullCallsList = () => {
    const calls = [];
    for (const sign of signs) {
      for (const planet of planets) {
        calls.push({ planet, sign });
      }
    }
    return calls;
  };

  // CALLS
  // Load all possible calls to firestore
  const upload = useCallback(async () => {
    const data = getFullCallsList();
    console.log("🚀 ~ file: game.context.js ~ line 46 ~ upload ~ data", data)
    console.log('UPLOADING...', data.length);
    try {
      const calls = await getCollection(POTENTIAL_PICKS_COLLECTION_NAME);
      await clearCollection(calls, POTENTIAL_PICKS_COLLECTION_NAME);
      await addMany(data, POTENTIAL_PICKS_COLLECTION_NAME);
      console.log("Potential calls loaded to firestore");
    } catch (err) {
      console.log(`Error loading calls to firestore: ${err.message}`);
    }
  }, []);

  // GET calls list
  const getCalls = useCallback(async () => {
    try {
      const calls = await getCollection(POTENTIAL_PICKS_COLLECTION_NAME);
      console.log("calls successfully loaded", calls);
      setPotentialCallList(calls);
    } catch (err) {
      console.log(err);
      addToast(err.message, {
        appearance: "error",
      });
    }
  }, [addToast]);

  // PICKS
  const getPicks = useCallback(async () => {
    try {
      const picks = await getCollection(PICKED_COLLECTION_NAME);
      console.log("picks", picks);
      setAlreadyCalled(picks);
    } catch (err) {
      console.log(err);
      addToast(err.message, {
        appearance: "error",
      });
    }
  }, [addToast]);

  useEffect(() => {
    (async () => {
      console.log('running setup game');
      if(!initialised) {
        await upload();
        setIntialised(true);
        localStorage.getItem('initialised', true);
      }
      
      await getCalls();
      await getPicks();

      // react if calls change in firestore
      await bindListeners(POTENTIAL_PICKS_COLLECTION_NAME, {
        add: () => {

        },
        remove: () => {

        }
      });

      // react if picks changed in firestore
      await bindListeners(PICKED_COLLECTION_NAME, {
        add: () => {

        },
        remove: () => {

        }
      });
    })();
  }, []);

  const getRandomPlanet = () => {
    const Rn = getRandomIntInclusive(0, planets.length - 1);
    let planetToCall = planets[Rn];
    // console.log("planetToCall", planetToCall);
    return planetToCall;
  };

  const getRandomSign = () => {
    const Rn = getRandomIntInclusive(0, signs.length - 1);
    let signToCall = signs[Rn];
    // console.log("signToCall", signToCall);
    return signToCall;
  };

  const pick = async (
    pickedItem = {
      planet: getRandomPlanet(),
      sign: getRandomSign(),
    }
  ) => {
    // Find the item
    const pickedCall = potentialCallList.find(
      ({ sign, planet }) =>
        sign === pickedItem.sign && planet === pickedItem.planet
    );

    const pickedCallWithoutId = { ...pickedCall };
    delete pickedCallWithoutId._id;

    try {
      await Promise.all([
        addOne(pickedCallWithoutId, PICKED_COLLECTION_NAME),
        deleteOne(pickedCall._id, POTENTIAL_PICKS_COLLECTION_NAME),
      ]);
    } catch (err) {
      console.log(err);
      addToast(err.message, {
        appearance: "error",
      });
    }
  };

  const reset = async () => {
    const consent = window.confirm("Are you sure you want to reset?");
    if (consent) {
      await clearCollection(alreadyCalled, PICKED_COLLECTION_NAME);
      await clearCollection(potentialCallList, POTENTIAL_PICKS_COLLECTION_NAME);
      await upload();
    }
  };

  return (
    <GameContext.Provider
      value={{
        getRandomPlanet,
        getRandomSign,
        pick,
        reset,
        alreadyCalled,
        potentialCallList,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
