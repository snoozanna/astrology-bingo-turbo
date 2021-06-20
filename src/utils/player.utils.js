import { addMany, getCollection, deleteMany } from "./../utils/firebase.utils";
import { descDict } from "./../constants";
import {
  createBirthChartURL,
  fetchBirthChart,
  findUTCOffset,
  getGeo,
} from "./../utils/astro-api.utils";
import { appConfig } from "./../config";

const {
  PLAYER_COLLECTION_NAME,
  CELEB_COLLECTION_NAME,
} = appConfig;

export const getPlayerBirthChartData = async (newPlayer) => {
  try {
    const fetchURL = createBirthChartURL(newPlayer);
    console.log("URL", fetchURL);
    const birthChartData = await fetchBirthChart(fetchURL, newPlayer);
    console.log("birthChartData", birthChartData);
    const chartData = JSON.parse(birthChartData);
    // debugger;
    chartData.Ascendant = chartData.Asc;
    delete chartData.Asc;
    chartData.Descendant = descDict[chartData.Ascendant];
    console.log("new player with chart", newPlayer);
    return chartData;
  } catch (err) {
    return Promise.reject(err.message);
  }
};

export const processCeleb = async (celeb) => {
  celeb.isCeleb = true;

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
  celeb.chartData = await getPlayerBirthChartData(celeb);
  celeb.score = 0;
  return celeb;
};

export const processCelebs = async () => {
  const celebs = await getCollection(CELEB_COLLECTION_NAME);
  const prms = [];
  for (const celeb of celebs) {
    prms.push(processCeleb(celeb));
  }
  const celebsWithBirthChart = await Promise.all(prms);
  const fullCelebs = await addMany(celebsWithBirthChart, PLAYER_COLLECTION_NAME);
  return fullCelebs;
};

export const removeCelebs = async (players =[]) => {
  const celebs = players.filter((player) => player.isCeleb);
  const celebIdsArray = celebs.map(({_id}) => _id);
  await deleteMany(celebIdsArray, PLAYER_COLLECTION_NAME);
};