import { getRandomIntInclusive } from "./../utils/utils";
import { signs, planets } from "./../constants";
import { clearCollection, addMany, getCollection } from "./firebase.utils";
import { appConfig } from "./../config";

const { CALLS_COLLECTION_NAME } = appConfig;

export const getRandomPlanet = () => {
  const Rn = getRandomIntInclusive(0, planets.length - 1);
  let planetToCall = planets[Rn];
  // console.log("planetToCall", planetToCall);
  return planetToCall;
};

export const getRandomSign = () => {
  const Rn = getRandomIntInclusive(0, signs.length - 1);
  let signToCall = signs[Rn];
  // console.log("signToCall", signToCall);
  return signToCall;
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
export const populateFirebase = async () => {
  const data = getFullCallsList();
  console.log(
    "🚀 ~ file: game.context.js ~ line 46 ~ populateFirebase ~ data",
    data
  );
  console.log("UPLOADING...", data.length);
  try {
    const calls = await getCollection(CALLS_COLLECTION_NAME);
    await clearCollection(calls, CALLS_COLLECTION_NAME);
    await addMany(data, CALLS_COLLECTION_NAME);
    console.log("Potential calls loaded to firestore");
  } catch (err) {
    console.log(`Error loading calls to firestore: ${err.message}`);
  }
};
