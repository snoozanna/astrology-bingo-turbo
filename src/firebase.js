// import * as firebase from "firebase";
import firebase from "firebase/app";
import { FIREBASE_API_KEY } from "./config";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "astrology-bingo-turbo.firebaseapp.com",
  databaseURL:
    "https://astrology-bingo-turbo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "astrology-bingo-turbo",
  storageBucket: "astrology-bingo-turbo.appspot.com",
  messagingSenderId: "626576818122",
  appId: "1:626576818122:web:e0a4f651ae4f5062169933",
  measurementId: "G-0DNG6GEJR6",
};

const app = firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();
// export { firestore };
export default app;
