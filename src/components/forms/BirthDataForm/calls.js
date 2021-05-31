
import { GEO_API_KEY, TIME_API_KEY } from "../../../config";

export async function getGeo(placename) {
  const GEO_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${placename}&key=${GEO_API_KEY}`;

  try {
    const response = await fetch(GEO_API_URL);
    if (!response.ok) throw response;
    const data = await response.json();
    console.log('data', data);
    return data;
  } catch (err) {
    console.log('err', err);
    return err
  }
}

export function findUTCOffset(datetime, lat, long) {
  const timestamp = Date.parse(datetime) / 1000;
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
