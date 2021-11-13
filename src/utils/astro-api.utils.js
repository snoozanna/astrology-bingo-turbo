import { GEO_API_KEY, TIME_API_KEY } from "../config";
const ASTRO_SERVER = process.env.ASTRO_SERVER || "http://localhost:8000";

export const createBirthChartURL = ({
  datetime,
  latitude,
  longitude,
  utcoffset,
}) => {
  const dob = datetime.slice(0, 10).replaceAll("-", "");
  const tob = datetime.slice(11, 16).replace(":", "");
  const d = new Date(datetime);
  const timestamp = d.getTime();

  const params = new URLSearchParams();
  params.append("location", `${latitude},${longitude}`);
  params.append("timestamp", timestamp);
  params.append("key", TIME_API_KEY);

  const fetchURL = `${ASTRO_SERVER}/formatData?date=${dob}&time=${tob}&location1=${latitude}&location2=${longitude}&utc=${utcoffset}&action=`;

  return fetchURL;
};

export async function getGeo(placename) {
  const GEO_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${placename}&key=${GEO_API_KEY}`;
  console.log("GEO URL", GEO_API_URL);

  try {
    const response = await fetch(GEO_API_URL);
    if (!response.ok) throw response;
    const data = await response.json();
    console.log("data from geoAPI", placename, data);
    console.log("hello");
    return data;
  } catch (err) {
    console.log("err", err);
    return err;
  }
}

export function findUTCOffset(datetime, lat, long) {
  const timestamp = Date.parse(datetime) / 1000;
  if (Number.isNaN(timestamp))
    throw new Error(`Bad timestamp value ${datetime}`);
  const fetchURLUTC = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=${timestamp}&key=${TIME_API_KEY}`;
  return getUTC(fetchURLUTC);
}

async function getUTC(currentURL) {
  try {
    const response = await fetch(currentURL);
    if (!response.ok) throw response;
    const data = await response.json();
    console.log("utc data", data);
    const offset = data.rawOffset + data.dstOffset;
    const offsetUTC = Math.floor(offset / 60 / 60);
    return offsetUTC;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const fetchBirthChart = async (fetchURL, { firstName, lastName }) => {
  try {
    const response = await fetch(fetchURL);
    if (!response.ok) throw response;

    const data = await response.json();
    return data;
  } catch (err) {
    console.log("fetchBirthChart error", err);
    return err;
  }
};
