import { addMany, getCollection } from "./../utils/firebase.utils";
import { descDict } from "./../constants";
import {
  createBirthChartURL,
  fetchBirthChart,
  findUTCOffset,
  getGeo,
} from "./../utils/astro-api.utils";
import { appConfig } from "./../config";

const {
  // PLAYER_COLLECTION_NAME,
  CELEB_COLLECTION_NAME,
} = appConfig;

export const processCeleb = async (celeb) => {
  const place = await getGeo(celeb.locationSearchTerm);
  console.log(
    "🚀 ~ file: players.context.js ~ line 43 ~ processCeleb ~ place",
    place
  );
  const { results } = place;
  const {
    place_id,
    geometry: {
      location: { lat, lng },
    },
    // formatted_address,
  } = results[0];

  celeb.latitude = lat;
  celeb.longitude = lng;
  celeb.location = place_id;

  const offset = await findUTCOffset(celeb.datetime, lat, lng);

  celeb.utcoffset = offset;
  return celeb;
};

export const processCelebs = async () => {
  const celebs = await getCollection(CELEB_COLLECTION_NAME);
  const prms = [];
  for (const celeb of celebs) {
    prms.push(processCeleb(celeb));
  }
  const celebsWithBirthChart = await Promise.all(prms);
  const fullCelebs = await addMany(celebsWithBirthChart);
  return fullCelebs;
};

export const addBirthChartToPlayer = async (newPlayer) => {
  try {
    const fetchURL = createBirthChartURL(newPlayer);
    console.log("URL", fetchURL);
    const birthChartData = await fetchBirthChart(fetchURL, newPlayer);
    console.log("birthChartData", birthChartData);
    newPlayer.chartData = JSON.parse(birthChartData);
    // debugger;
    newPlayer.chartData.Ascendant = newPlayer.chartData.Asc;
    delete newPlayer.chartData.Asc;
    newPlayer.chartData.Descendant = descDict[newPlayer.chartData.Ascendant];
    console.log("new player with chart", newPlayer);
    return newPlayer;
  } catch (err) {
    return Promise.reject(err.message);
  }
};
