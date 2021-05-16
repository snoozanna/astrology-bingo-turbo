import React, { createContext, useEffect /*, useState */ } from "react";
// import firebase from "./firebase";
import firebase from "firebase/app";
import 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";

var app = firebase.initializeApp({
  apiKey: "AIzaSyDt33A_WcPQ4uHoxhVQMAJlw9AtwXRnMM8",
  authDomain: "astrology-bingo-turbo.firebaseapp.com",
  databaseURL: "https://astrology-bingo-turbo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "astrology-bingo-turbo",
  storageBucket: "astrology-bingo-turbo.appspot.com",
  messagingSenderId: "626576818122",
  appId: "1:626576818122:web:e0a4f651ae4f5062169933",
  measurementId: "G-0DNG6GEJR6"
}); // your values here...

// console.log("useHistory", useHistory);
export const AuthContext = createContext({
  user: null,
  loading: false,
  error: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  // const [user, setUser] = useState(false);
  const [user, loading, error] = useAuthState(firebase.auth());
  const history = useHistory();
  // console.log('history', history);
  // console.log('user', user);
  const { addToast } = useToasts();
  // const login = (user) => setUser(user);
  // const logout = () => setUser(null);

  const login = ({ email, password }) => {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(`/`);
      })
      .catch((error) => {
        addToast(`Error: ${error}`, {
          appearance: "error",
        });
      });
  };
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push(`/`);
      })
      .catch((error) => {
        addToast(`Error: ${error}`, {
          appearance: "error",
        });
      });
  };

  useEffect(() => {
    if (error) {
      addToast(`Error: ${error}`, {
        appearance: "error",
      });
    }
  }, [error, addToast]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
