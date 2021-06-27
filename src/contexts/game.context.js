import React, {
  createContext,
  useState,
  useEffect,
  // useCallback,
  useContext,
} from "react";
import localForage from "localforage";
import { useToasts } from "react-toast-notifications";
import { useLocation } from "react-router-dom";
import { getRandomIntInclusive } from "./../utils/utils";
import {
  // clearCollection,
  // getCollection,
  bindListeners,
  swap,
  merge,
} from "./../utils/firebase.utils";

import {
  resetPlayerScores,
  unmeshCelebs,
  processCelebs,
} from "./../utils/player.utils";

import {
  // bulkAddToLocal,
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
  celebsIncluded: false,
  removeCelebs: () => {},
  loadCelebs: () => {},
  calls: [],
  picks: [],
  winners: [],
});

export const GameProvider = (props) => {
  const { addToast } = useToasts();
  let location = useLocation();

  const { updatePlayer, players } = useContext(PlayersContext);

  // Initial state
  // const [initialised, setIntialised] = useState(false);
  const [winners, setWinners] = useState([]);
  const [calls, setCalls] = useState([]);
  const [picks, setPicks] = useState([]);
  const [celebsIncluded, setCelebsIncluded] = useState(false);

  const markCard = async (player) => {
    console.log(`Running markCard`);
    if (!picks.length) return;
    console.log(`Running markCard for ${player.firstName} ${player.lastName}`);
    const chartDataArray = Object.entries(player.chartData);

    // Checks only last pick. Cannot be used if you add in-game pick CRUD functionality
    const latestPick = picks[picks.length - 1];
    const latestPickId = latestPick._id;

    const match = chartDataArray.find(([playerPlanet, playerSign]) => {
      console.log(`${playerPlanet}-${playerSign}`.toLowerCase(), latestPickId);
      return `${playerPlanet}-${playerSign}`.toLowerCase() === latestPickId;
    });

    // Bail if no match
    if (!match) return;

    // Deal with 1
    if (player.matches.length[player.matches.length - 1] === latestPickId)
      return;

    // continue if there is
    const updates = {
      matches: [...player.matches, latestPickId], // 'mars-sagitarius'
    };

    // Dynamic - you can CRUD picks
    // for (const [playerPlanet, playerSign] of chartDataArray) {
    //   // [['mars', 'sag']]
    //   const match = picks.find(
    //     ({ _id }) => _id === `${playerPlanet}-${playerSign}`
    //   );
    //   if (match) {
    //     // console.log("This has been picked", playerPlanet, playerSign);
    //     updates.matches.push(match._id); // check!
    //   }
    // }

    if (updates.matches.length === 12 && location !== '/public-view') {
      addToast(`${player.firstName} ${player.firstName} HAS WON!!!!`, {
        appearance: "success",
      });
      setWinners([...winners, player]);
    }

    try {
      return updatePlayer(player, updates);
    } catch (err) {
      console.log("err marking", err);
    }
  };

  const markPlayers = (players) => {
    for (const player of players) {
      markCard(player);
    }
  };

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
    // One time setup stuff
    console.log("running setup game");
    // Bind to FireStore for live updates
    // Calls
    const unbindCalls = bindListeners(CALLS_COLLECTION_NAME, {
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
    const unbindPicks = bindListeners(PICKS_COLLECTION_NAME, {
      add: (doc) => {
        addToLocal(setPicks, doc);
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

    (async () => {
      // If not then initialise
      if (!initd) {
        await localForage.setItem(CALLS_COLLECTION_NAME, []);
        await localForage.setItem(PICKS_COLLECTION_NAME, []);
        await populateFirebase();
        localStorage.setItem(INITIALISED_KEY_NAME, true);
      }

      // Fast get from Local
      // await populateFromLocalRecords();
    })();

    return () => {
      unbindCalls();
      unbindPicks();
    };
  }, []);

  useEffect(() => {
    console.log('picks changed, marking players');
    markPlayers(players);
  }, [picks]);

  const pick = async () => {
    const idx = getRandomIntInclusive(0, calls.length - 1);
    const pickedItem = calls[idx];
    console.log(
      "🚀 ~ file: game.context.js ~ line 151 ~ pick ~ pickedItem",
      pickedItem
    );
    try {
      await swap(pickedItem, CALLS_COLLECTION_NAME, PICKS_COLLECTION_NAME);
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
        await Promise.all([
          merge(picks, PICKS_COLLECTION_NAME, CALLS_COLLECTION_NAME),
          resetPlayerScores(players),
          removeCelebs(),
        ]);
        addToast(`Game reset!`, {
          appearance: "success",
        });
      } catch (err) {
        console.log(`Error resetting game: ${err}`);
        // return Promise.reject(err.message);
      }
    }
  };

  // const checkIfPicked = (planet, sign) => {
  //   const match = picks.find(({ _id }) => {
  //     console.log(_id, `${planet}-${sign}`.toLowerCase());
  //     return _id === `${planet}-${sign}`.toLowerCase();
  //   });
  //   return !!match;
  // };

  const removeCelebs = async () => {
    if (celebsIncluded) {
      addToast(`Removing celebrities...`, {
        appearance: "info",
      });
      await unmeshCelebs(players);
      setCelebsIncluded(false);
      addToast(`Celebrities removed!`, {
        appearance: "success",
      });
    }
  };

  const loadCelebs = async () => {
    addToast(`Adding celebrities...`, {
      appearance: "info",
    });
    await processCelebs(players);
    setCelebsIncluded(true);
    addToast(`Celebrities Added!`, {
      appearance: "success",
    });
  };

  return (
    <GameContext.Provider
      value={{
        pick,
        reset,
        // checkIfPicked,
        markCard,
        markPlayers,
        calls,
        picks,
        celebsIncluded,
        removeCelebs,
        loadCelebs,
        winners,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
