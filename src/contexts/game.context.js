import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
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
  resetPlayerScores,
  removeCelebs,
} from './../utils/player.utils';

import {
  bulkAddToLocal,
  addToLocal,
  removeFromLocal,
  updateInLocal,
} from "./../utils/state.utils";

import { populateFirebase } from "./../utils/game.utils";

import { appConfig } from "./../config";

import { PlayersContext } from "./players.context";

const { PICKS_COLLECTION_NAME, CALLS_COLLECTION_NAME } = appConfig;

export const INITIALISED_KEY_NAME = "initialised";

export const GameContext = createContext({
  pick: () => {},
  [PICKS_COLLECTION_NAME]: [],
  [CALLS_COLLECTION_NAME]: [],
  markCard: () => {},
  markPlayers: () => {},
});

export const GameProvider = (props) => {
  const { addToast } = useToasts();

  const { updatePlayer, players } = useContext(PlayersContext);

  // Initial state
  const [initialised, setIntialised] = useState(false);
  const [won, setWon] = useState(false);
  const [calls, setCalls] = useState([]);
  const [picks, setPicks] = useState([]);

  const markCard = async (player) => {
    const chartDataArray = Object.entries(player.chartData);
    const updates = {
      score: player.score,
      matches: player.matches,
    };
    for (const [playerPlanet, playerSign] of chartDataArray) {
      for (const pick of picks) {
        if (pick.planet === playerPlanet && pick.sign === playerSign) {
          // console.log("This has been picked", playerPlanet, playerSign);
          updates.score += 1;
          updates.matches.push(pick._id); // check!
        }
      }
    }
    if (updates.score === 12) {
      addToast(`${player.firstName} ${player.firstName} HAS WON!!!!`, {
        appearance: "success",
      });
      setWon(true);
    }

    if (player.score === updates.score) return;
    
    try {
      return updatePlayer(player, updates);
    } catch (err) {
      console.log("err marking", err);
    }
  };

  const markPlayers = (players) => {
    for(const player of players) {
      markCard(player);
    }
  }



  // Populate from local state (optional for speed)

  // const populateFromLocalRecords = async () => {
  //   const localCalls = await localForage.getItem(CALLS_COLLECTION_NAME);
  //   console.log(`Stored ${CALLS_COLLECTION_NAME}`, localCalls);
  //   if (localCalls) {
  //     setCalls(localCalls);
  //   }

  //   const localPicks = await localForage.getItem(PICKS_COLLECTION_NAME);
  //   console.log(`Stored ${PICKS_COLLECTION_NAME}`, localPicks);
  //   if (localPicks) {
  //     setPicks(localPicks);
  //   }
  // };

  // GET calls list
  // const getCalls = useCallback(async () => {
  //   try {
  //     const fb_calls = await getCollection(CALLS_COLLECTION_NAME);
  //     console.log(`${CALLS_COLLECTION_NAME} successfully loaded`, fb_calls);
  //     return fb_calls;
  //   } catch (err) {
  //     console.log(err);
  //     addToast(err.message, {
  //       appearance: "error",
  //     });
  //   }
  // }, [addToast]);

  // PICKS
  // const getPicks = useCallback(async () => {
  //   try {
  //     const fb_picks = await getCollection(PICKS_COLLECTION_NAME);
  //     console.log(`${PICKS_COLLECTION_NAME} successfully loaded`, fb_picks);
  //     return fb_picks;
  //   } catch (err) {
  //     console.log(err);
  //     addToast(err.message, {
  //       appearance: "error",
  //     });
  //   }
  // }, [addToast]);

  useEffect(() => {
    let unbindCalls = () => {};
    let unbindPicks = () => {};
    (async () => {
      // One time setup stuff
      console.log("running setup game");
      // Bind to FireStore for live updates
      // Calls
      unbindCalls = await bindListeners(CALLS_COLLECTION_NAME, {
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
      unbindPicks = await bindListeners(PICKS_COLLECTION_NAME, {
        add: (doc) => {
          addToLocal(setPicks, doc);
          markPlayers(players);
        },
        update: (doc) => {
          updateInLocal(setPicks, doc);
          // markPlayers(players); // can be used if we give picks full CRUD functionality
        },
        remove: (doc) => {
          removeFromLocal(setPicks, doc);
          // markPlayers(players); // here too...
        },
      });

      // Check if initialised previously and set if so
      const initd = localStorage.getItem(INITIALISED_KEY_NAME);
      console.log("initd", initd);

      // If not then initialise
      if (!initd) {
        localStorage.setItem(INITIALISED_KEY_NAME, true);
        await localForage.setItem(CALLS_COLLECTION_NAME, []);
        await localForage.setItem(PICKS_COLLECTION_NAME, []);
        await populateFirebase();
        setIntialised(true);
      }

      // Fast get from Local
      // await populateFromLocalRecords();

      // Get from FireStore
      // const c = await getCalls();
      // bulkAddToLocal(setCalls, c);
      // await localForage.setItem(CALLS_COLLECTION_NAME, calls);
      // console.log(`${CALLS_COLLECTION_NAME} in context`, calls);

      // const p = await getPicks();
      // bulkAddToLocal(setPicks, p);
      // await localForage.setItem(PICKS_COLLECTION_NAME, picks);
      // console.log(`${PICKS_COLLECTION_NAME} in context`, picks);
    })();

    return () => {
      unbindCalls();
      unbindPicks();
    };
  }, []);

  const pick = async () => {
    const idx = getRandomIntInclusive(0, calls.length - 1);
    const pickedItem = calls[idx];
    console.log(
      "🚀 ~ file: game.context.js ~ line 151 ~ pick ~ pickedItem",
      pickedItem
    );
    try {
      return swap(pickedItem, CALLS_COLLECTION_NAME, PICKS_COLLECTION_NAME);
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
          resetPlayerScores(players),
          removeCelebs(),
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
    for (const pick of picks) {
      // return pick.planet === planet && pick.sign === sign;
      if (pick.planet === planet && pick.sign === sign) {
        // console.log("This has been picked", planet, sign);
        return true;
      }
    }
  };

  return (
    <GameContext.Provider
      value={{
        pick,
        reset,
        checkIfPicked,
        markCard,
        markPlayers,
        calls,
        picks,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
