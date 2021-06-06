// import { update } from "@react-spring/core";
// import { firestore as db } from "./../firebase";
// import { useToasts } from "react-toast-notifications";

// import {
//   // GEO_API_KEY,
//   // TIME_API_KEY
// } from "../config";

import {
  useState,
  useCallback,
  // useEffect,
  // useReducer,
} from "react";


export function getRandomIntInclusive(min, max) {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min + 1) + _min); //The maximum is inclusive and the minimum is inclusive
}

export function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self

  for (const name of propNames) {
    const value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}


// export const useFetch = async (
//   url = "",
//   options = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }
// ) => {
//   const initialState = {
//     error: null,
//     loading: false,
//     loaded: false,
//     data: null,
//   };

//   const callStates = {
//     loading: "loading",
//     error: "error",
//     loaded: "loaded",
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case callStates.loading:
//         return {
//           loading: true,
//         };
//       case callStates.error:
//         return {
//           loading: false,
//           loaded: true,
//           error: action.payload,
//         };
//       case callStates.loaded:
//         return {
//           loaded: true,
//           data: action.payload,
//         };
//       default:
//         console.log(
//           `Unrecognised value: ${action.type} passed to useFetch reducer`
//         );
//         return state;
//     }
//   };

//   const [state, dispatch] = useState(reducer, initialState);

//   const { error, loading, loaded, data } = state;

//   useEffect(() => {
//     if (!loading) {
//       dispatch({ type: callStates.loading });
//       (async () => {
//         try {
//           const response = await fetch(url, options);
//           if (!response.ok) {
//             throw response;
//           }
//           const data = await response.json();
//           console.log("data", data);

//           dispatch({ type: callStates.loaded, payload: data });
//         } catch (err) {
//           dispatch({ type: callStates.error, payload: err });
//           return err;
//         }
//       })();
//     }
//   }, [
//     callStates.error,
//     callStates.loaded,
//     callStates.loading,
//     loading,
//     options,
//     url,
//   ]);

//   return { error, loading, loaded, data };
// };

// export function connectToWebSocket(
//   socketURL = "ws://localhost:3001/",
//   connectionHandler = function connectionHandler(event) {
//     // console.log("Socket open!!");
//   },
//   messageHandler = function messageHandler(event) {
//     console.dir(event);
//     // console.log("Message from server ", event.data);
//   },
//   errorHandler = function errorHandler(err) {
//     console.log(err);
//   },
//   closeHandler
// ) {
//   // let i = 1;
//   // Create WebSocket connection.
//   let socket = new WebSocket(socketURL);

//   // Connection opened
//   socket.addEventListener("open", connectionHandler);

//   // Listen for messages
//   socket.addEventListener("message", messageHandler);

//   // Listen for errors
//   socket.addEventListener("error", errorHandler);

//   let ch =
//     closeHandler ||
//     function closeHandler() {
//       // alert('socket closed');
//       // console.log("Socket closed", arguments);
//       // setTimeout(() => {
//       //   if (i < 20) {
//       //     socket = connectToWebSocket(
//       //       socketURL,
//       //       connectionHandler,
//       //       errorHandler,
//       //       closeHandler
//       //     );
//       //     i += 1;
//       //   }
//       // }, i * 200);
//     };

//   // Listen for close
//   socket.addEventListener("close", ch);

//   return socket;
// }

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
};

