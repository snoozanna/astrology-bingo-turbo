import React, { createContext, useState, useEffect, useCallback } from "react";
import localForage from "localforage";
import { useToasts } from "react-toast-notifications";

import { getRandomIntInclusive } from "./../utils/utils";
import {
  clearCollection,
  getCollection,
  bindListeners,
  swap,
} from "./../utils/firebase.utils";

import {
  addToLocal,
  removeFromLocal,
  updateInLocal,
} from "./../utils/state.utils";

import { populateFirebase } from "./../utils/game.utils";

import { appConfig } from "./../config";

const { PICKS_COLLECTION_NAME, CALLS_COLLECTION_NAME } = appConfig;

export const INITIALISED_KEY_NAME = "initialised";

export const GameContext = createContext({
  pick: () => {},
  [PICKS_COLLECTION_NAME]: [],
  [CALLS_COLLECTION_NAME]: [],
});

export const GameProvider = (props) => {
  const { addToast } = useToasts();

  // Initial state
  const [initialised, setIntialised] = useState(false);
  const [calls, setCalls] = useState([]);
  const [picks, setPicks] = useState([]);

  // Populate from local state

  const populateFromLocalRecords = async () => {
    const localCalls = await localForage.getItem(CALLS_COLLECTION_NAME);
    console.log(`Stored ${CALLS_COLLECTION_NAME}`, localCalls);
    if (localCalls) {
      setCalls(localCalls);
    }

    const localPicks = await localForage.getItem(PICKS_COLLECTION_NAME);
    console.log(`Stored ${PICKS_COLLECTION_NAME}`, localPicks);
    if (localPicks) {
      setPicks(localPicks);
    }
  };

  // GET calls list
  const getCalls = useCallback(async () => {
    try {
      const fb_calls = await getCollection(CALLS_COLLECTION_NAME);
      console.log(`${CALLS_COLLECTION_NAME} successfully loaded`, fb_calls);
      setCalls(fb_calls);
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
      const fb_picks = await getCollection(PICKS_COLLECTION_NAME);
      console.log(`${PICKS_COLLECTION_NAME} successfully loaded`, fb_picks);
      setPicks(fb_picks);
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

      // Check if initialised previously and set if so
      const initd = await localForage.getItem(INITIALISED_KEY_NAME);
      console.log("initd", initd);
      if (initd) {
        setIntialised(Boolean(initd));
      }

      // If not then initialise
      if (!initialised) {
        await populateFirebase();
        await localForage.setItem(INITIALISED_KEY_NAME, true);
        await localForage.setItem(CALLS_COLLECTION_NAME, []);
        await localForage.setItem(PICKS_COLLECTION_NAME, []);
        setIntialised(true);
      }

      // Fast get from Local
      await populateFromLocalRecords();

      // Get from FireStore
      await getCalls();
      await localForage.setItem(CALLS_COLLECTION_NAME, calls);
      console.log(`${CALLS_COLLECTION_NAME} in context`, calls);

      await getPicks();
      await localForage.setItem(PICKS_COLLECTION_NAME, picks);
      console.log(`${PICKS_COLLECTION_NAME} in context`, picks);

      // Bind to FireStore for live updates

      // Calls
      await bindListeners(CALLS_COLLECTION_NAME, {
        add: (doc) => {
          addToLocal(setCalls, doc);
        },
        update: (doc) => {
          updateInLocal(setCalls, doc);
        },
        remove: (doc) => {
          removeFromLocal(setCalls, doc);
        },
      });

      // Picks
      await bindListeners(PICKS_COLLECTION_NAME, {
        add: (doc) => {
          addToLocal(setPicks, doc);
        },
        update: (doc) => {
          updateInLocal(setPicks, doc);
        },
        remove: (doc) => {
          removeFromLocal(setPicks, doc);
        },
      });
    })();
  }, []);

  const pick = async () => {
    const idx = getRandomIntInclusive(0, calls.length - 1);
    const pickedItem = calls[idx];
    console.log(
      "🚀 ~ file: game.context.js ~ line 151 ~ pick ~ pickedItem",
      pickedItem,
    );
    try {
      return await swap(
        pickedItem,
        CALLS_COLLECTION_NAME,
        PICKS_COLLECTION_NAME,
      );
    } catch (err) {
      console.log(err);
    }
  };

  const reset = async () => {
    const consent = window.confirm("Are you sure you want to reset?");
    if (consent) {
      addToast(`Resetting game...`, {
        appearance: "info",
      });
      try {
        const done = await Promise.all([
          clearCollection(picks, PICKS_COLLECTION_NAME),
          clearCollection(calls, CALLS_COLLECTION_NAME),
          populateFirebase(),
        ]);
        addToast(`Game reset!`, {
          appearance: "success",
        });
        return done;
      } catch (err) {
        return Promise.reject(err.message);
      }
    }
  };

  const checkIfPicked = (planet, sign) => {
    // debugger;
    // console.log("picks", picks);
    if (Array.isArray(picks)) {
      for (const pick of picks) {
        // return pick.planet === planet && pick.sign === sign;
        if (pick.planet === planet && pick.sign === sign) {
          // console.log("This has been picked", planet, sign);
          return true;
        }
      }
    }
  };

  return (
    <GameContext.Provider
      value={{
        pick,
        reset,
        checkIfPicked,
        calls,
        picks,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
