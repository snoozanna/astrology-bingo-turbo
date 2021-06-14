import React, { createContext, useState, useEffect, useCallback } from "react";
import localForage from "localforage";
// import { firestore as db } from "./../firebase";
import { signs, planets } from "./../constants";
import { getRandomIntInclusive } from "./../utils/utils";
import {
  clearCollection,
  // addOne,
  addMany,
  getCollection,
  // deleteOne,
  bindListeners,
  swap,
} from "./../utils/firebase.utils";
import {
  addToLocal,
  removeFromLocal,
  updateInLocal,
  // getFromLocalById,
} from "./../utils/state.utils";
import { useToasts } from "react-toast-notifications";

const {
  PICKED_COLLECTION_NAME = "picked",
  AVAILABLE_CALLS_COLLECTION_NAME = "potential-picks",
} = process.env;

export const GameContext = createContext({
  getRandomPlanet: () => {},
  getRandomSign: () => {},
  pick: () => {},
  alreadyCalledList: [],
  potentialCallList: [],
});

export const GameProvider = (props) => {
  const { addToast } = useToasts();

  // Initial state
  const [initialised, setIntialised] = useState(false);
  const [potentialCallList, setPotentialCallList] = useState([]);
  const [alreadyCalledList, setAlreadyCalledList] = useState([]);

  // Populate from local state

  const populateFromLocalRecords = async () => {
    const initd = await localForage.getItem("initialised");
    console.log("initd", initd);
    if (initd) {
      setIntialised(Boolean(initd));
    }

    const calls = await localForage.getItem("calls");
    console.log("calls", calls);
    if (calls) {
      setPotentialCallList(calls);
    }

    const picks = await localForage.getItem("picks");
    console.log("picks", picks);
    if (picks) {
      setAlreadyCalledList(picks);
    }
  };

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
  const populateFirebase = useCallback(async () => {
    const data = getFullCallsList();
    console.log(
      "🚀 ~ file: game.context.js ~ line 46 ~ populateFirebase ~ data",
      data
    );
    console.log("UPLOADING...", data.length);
    try {
      const calls = await getCollection(AVAILABLE_CALLS_COLLECTION_NAME);
      await clearCollection(calls, AVAILABLE_CALLS_COLLECTION_NAME);
      await addMany(data, AVAILABLE_CALLS_COLLECTION_NAME);
      console.log("Potential calls loaded to firestore");
    } catch (err) {
      console.log(`Error loading calls to firestore: ${err.message}`);
    }
  }, []);

  // GET calls list
  const getCalls = useCallback(async () => {
    try {
      const calls = await getCollection(AVAILABLE_CALLS_COLLECTION_NAME);
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
      setAlreadyCalledList(picks);
    } catch (err) {
      console.log(err);
      addToast(err.message, {
        appearance: "error",
      });
    }
  }, [addToast]);

  useEffect(() => {
    (async () => {
      // One time setup stuff
      console.log("running setup game");
      debugger;
      if (!initialised) {
        await populateFirebase();
        await localForage.setItem("initialised", true);
        await localForage.setItem("calls", []);
        await localForage.setItem("picks", []);
        setIntialised(true);
      }

      // Fast get from Local
      await populateFromLocalRecords();

      // Get from FireStore
      await getCalls();
      await localForage.setItem("calls", potentialCallList);
      console.log("calls in context", potentialCallList);

      await getPicks();
      await localForage.setItem("picks", alreadyCalledList);
      console.log("picks in context", alreadyCalledList);

      // Bind to FireStore for live updates

      // Calls
      await bindListeners(AVAILABLE_CALLS_COLLECTION_NAME, {
        add: (doc) => {
          addToLocal(setPotentialCallList, doc);
        },
        update: (doc) => {
          updateInLocal(setPotentialCallList, doc);
        },
        remove: (doc) => {
          removeFromLocal(setPotentialCallList, doc.id);
        },
      });

      // Picks
      await bindListeners(PICKED_COLLECTION_NAME, {
        add: (doc) => {
          addToLocal(setAlreadyCalledList, doc);
        },
        update: (doc) => {
          updateInLocal(setAlreadyCalledList, doc);
        },
        remove: (doc) => {
          removeFromLocal(setAlreadyCalledList, doc);
        },
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

  const pick = async () => {
    const idx = getRandomIntInclusive(0, potentialCallList.length - 1);
    const pickedItem = potentialCallList[idx];
    swap(
      pickedItem._id,
      AVAILABLE_CALLS_COLLECTION_NAME,
      PICKED_COLLECTION_NAME
    );
  };

  const reset = async () => {
    const consent = window.confirm("Are you sure you want to reset?");
    if (consent) {
      return Promise.All([
        clearCollection(alreadyCalledList, PICKED_COLLECTION_NAME),
        clearCollection(potentialCallList, AVAILABLE_CALLS_COLLECTION_NAME),
        populateFirebase(),
      ]);
    }
  };

  return (
    <GameContext.Provider
      value={{
        getRandomPlanet,
        getRandomSign,
        pick,
        reset,
        alreadyCalled: alreadyCalledList,
        potentialCallList,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
