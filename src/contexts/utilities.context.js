import React, { createContext, useState } from "react";
import { useToasts } from "react-toast-notifications";

/****************************************************************
 * Holds utility functions
 ****************************************************************/

export const UtilitiesContext = createContext({
  uuidv4: () => {},
  getRandomIntInclusive: () => {},
  deepFreeze: () => {},
  isElement: () => {},
  makeCall: () => {},
  connectToWebSocket: () => {},
});

export const UtilitiesProvider = (props) => {
  const { addToast } = useToasts();

  const uuidv4 = () => {
    return "xxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function isElement(obj) {
    try {
      //Using W3 DOM2 (works for FF, Opera and Chrome)
      return obj instanceof HTMLElement || obj instanceof SVGElement;
    } catch (e) {
      //Browsers not supporting W3 DOM2 don't have HTMLElement and
      //an exception is thrown and we end up here. Testing some
      //properties that all elements have (works on IE7)
      return (
        typeof obj === "object" &&
        obj.nodeType === 1 &&
        typeof obj.style === "object" &&
        typeof obj.ownerDocument === "object"
      );
    }
  }

  function deepFreeze(object) {
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

  //TODO work out why M is undefined

  const makeCall = async (url = "", options = {}) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw response;
      }
      const data = await response.json();
      return data;
    } catch (err) {
      addToast({
        html: `<h2>Error</h2><p>${err.message}</p>`,
        classes: ["toast", "error"],
      });
      return err;
    }
  };

  // async function makeCall(url = "", options = {}) {
  //   try {
  //     const response = await fetch(url, options);
  //     if (!response.ok) {
  //       throw response;
  //     }
  //     const data = await response.json();
  //     return data;
  //   } catch (err) {
  //     addToast(({
  //       html: `<h2>Error</h2><p>${err.message}</p>`,
  //       classes: ["toast", "error"],
  //     });
  //     return err;
  //   }
  // }

  function connectToWebSocket(
    socketURL = "ws://localhost:3001/",
    connectionHandler = function connectionHandler(event) {
      // console.log("Socket open!!");
    },
    messageHandler = function messageHandler(event) {
      console.dir(event);
      // console.log("Message from server ", event.data);
    },
    errorHandler = function errorHandler(err) {
      console.log(err);
    },
    closeHandler,
  ) {
    let i = 1;
    // Create WebSocket connection.
    let socket = new WebSocket(socketURL);

    // Connection opened
    socket.addEventListener("open", connectionHandler);

    // Listen for messages
    socket.addEventListener("message", messageHandler);

    // Listen for errors
    socket.addEventListener("error", errorHandler);

    let ch =
      closeHandler ||
      function closeHandler() {
        // alert('socket closed');
        // console.log("Socket closed", arguments);
        // setTimeout(() => {
        //   if (i < 20) {
        //     socket = connectToWebSocket(
        //       socketURL,
        //       connectionHandler,
        //       errorHandler,
        //       closeHandler
        //     );
        //     i += 1;
        //   }
        // }, i * 200);
      };

    // Listen for close
    socket.addEventListener("close", ch);

    return socket;
  }

  return (
    <UtilitiesContext.Provider
      value={{
        uuidv4,
        getRandomIntInclusive,
        deepFreeze,
        isElement,
        makeCall,
        connectToWebSocket,
      }}
    >
      {props.children}
    </UtilitiesContext.Provider>
  );
};
