/****************************************************************
 * Holds config info (e.g. API keys)
 ****************************************************************/

const {
  PLAYER_COLLECTION_NAME = "players",
  CELEB_COLLECTION_NAME = "celebs",
  PICKS_COLLECTION_NAME = "picks",
  CALLS_COLLECTION_NAME = "calls",
} = process.env;

export const GEO_API_KEY = "AIzaSyBRNa4FzlJkG1uhDvAHaB2SRbit53wq6L8";
export const TIME_API_KEY = "AIzaSyCVeMcz7k47EOLRUjdYKecPFJylBFdpdms";

export const FIREBASE_API_KEY = "AIzaSyDt33A_WcPQ4uHoxhVQMAJlw9AtwXRnMM8";

export const appConfig = {
  useCelebs: false,
  PLAYER_COLLECTION_NAME,
  CELEB_COLLECTION_NAME,
  PICKS_COLLECTION_NAME,
  CALLS_COLLECTION_NAME,
};
