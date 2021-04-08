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
  catchPhraseDict: {},
});

export const UtilitiesProvider = (props) => {
  const { addToast } = useToasts();

  const catchPhraseDict = {
    Sun: {
      Aries: "A little bit scaries, Sun in Aries",
      Taurus: "Set meal for one Taurus Sun",
      Gemini: "Who even am I, Sun in Gemini",
      Cancer: "You ok hun? Cancer sun",
      Leo: "All about me-o, Sun in Leo",
      Virgo: "Marie Kondo Sun in Virgo",
      Libra: "Eenie Meanie Miney Moe - Libra Sun",
      Scorpio: "Where’s my gun, Scorpio sun",
      Sagittarius: "A bit precarious, Sun in Sagittarius",
      Capricorn: "No time for fun, Capricorn Sun",
      Aquarius: "I’m so random, Aquarius Sun",
      Pisces: "Cries when they’ve won, Pisces Sun",
    },
    Moon: {
      Aries: "Fighting by noon, Aries Moon",
      Taurus: "Nutella with spoon, Taurus Moon",
      Gemini: "Spoke to soon, Gemini Moon",
      Cancer: "Cosy cocoon, Cancer Moon",
      Leo: "Dine at Dishoom, Leo Moon",
      Virgo: "Clean up your room, Virgo Moon",
      Libra: "Takes long to groom, Libra Moon",
      Scorpio: "Orlando Bloom, Scorpio Moon",
      Sagittarius: "Travels in June, Sagittarius Moon",
      Capricorn: "Swampy lagoon, Capricorn Moon",
      Aquarius: "A bit of a loon, Aquarius Moon",
      Pisces: "Humming a tune, Pisces Moon",
    },
    Ascendant: {
      Aries: "1st amendment, Aries Ascendant",
      Taurus: "Loves pie and we don&#39;t mean Pythagorus, Ascendant in Taurus",
      Gemini: "Personality will Multiply, Ascendent in Gemini",
      Cancer: "Fiercely independent, Leo Ascendant",
      Leo: "Fiercely independent, Leo Ascendant",
      Virgo: "Work commitment, Virgo Ascendant",
      Libra: "Balancing Act, Libra Ascendant",
      Scorpio: "Moody Swamp, Scorpio Ascendant",
      Sagittarius: "I need to leave the country, Sagittarius Ascendant",
      Capricorn: "Let me speak to the manager, Capricorn Ascendant",
      Aquarius: "Feed the people, Aquarius Ascendant",
      Pisces: "Finding Nemo Pisces Ascendant",
    },
    Mercury: {
      Aries: "Things might get hairy, Mercury in Aries",
      Taurus: "No I’ll do it, but after my nap Taurus Mercury",
      Gemini: "Chatty Cathy, Gemini Mercury",
      Cancer: "Taking it personally, Cancer in Mercury",
      Leo: "Sandra Bullock, Leo in Mercury",
      Virgo: "The thinker who likes to tinker, Virgo Mercury",
      Libra: "Queen of Sheeba, Mercury Libra",
      Scorpio: "They’ll see through your perjury, Scorpio Mercury",
      Sagittarius: "Gorgeous &amp; Gregarious, Mercury in Sagittarius",
      Capricorn: "Thorough to the bone, Mercury Capricorn",
      Aquarius: "By the way, you will bore us, Mercury Aquarius",
      Pisces: "Can you repeat the question? Pisces Mercury",
    },
    Venus: {
      Aries: "Beunos Aries, Venus Aries",
      Taurus: "Stable as an ox’es knees its, Taurus Venus",
      Gemini: "Relationship genius, Gemini Venus",
      Cancer: "Deep Sea diver in the ocean of love, Venus Cancer",
      Leo: "Bossy Bottom, Venus Leo",
      Virgo: "Suck on my toe Venus Virgo",
      Libra: "Your cousins a zeebra Venus Libra",
      Scorpio: "Love you so much I’ll kill you Scorpio Venus",
      Sagittarius: "New phone who dis? Venus Sagittarius",
      Capricorn: "Who’s got the horn? Venus Capricorn",
      Aquarius: "That’s a big penis, Aquarius Venus",
      Pisces: "The Fish of your dreams Pisces Venus",
    },
    Mars: {
      Aries: "Raising the bars, Aries in Mars",
      Taurus: "Expensive cars, Taurus Mars",
      Gemini: "Poke you in the eye, Mars in Gemini",
      Cancer: "Spitting some lonely bars, Cancer in Mars",
      Leo: "Wannabee Superstars, Leo Mars",
      Virgo: "Put things in jars, Virgo Mars",
      Libra: "Makeup from NARS, Libra Mars",
      Scorpio: "You’ll end up with scars, Scorpio Mars",
      Sagittarius: "Spanish Guitars, Sagittarius Mars",
      Capricorn: "Can afford Cigars, Capricorn Mars",
      Aquarius: "Kooky bras, Aquarius Mars",
      Pisces: "Sensitive at heart, Pisces Mars",
    },
    Jupiter: {
      Aries: "Bloody Mary’s! Jupiter Aries",
      Taurus: "Eat your way through the Virus, Jupiter Taurus",
      Gemini: "Social Butterfly Jupiter Gemini",
      Cancer: "Being sad isn’t the answer, Jupiter Cancer",
      Leo: "Put up the gazebo, Jupiter Leo",
      Virgo: "On Furlough, Jupiter Virgo",
      Libra: "secret monsta, Jupiter Libra",
      Scorpio: "Spooky Scenario, Jupiter Scorpio",
      Sagittarius: "Very adventurous, Jupiter Sagittarius",
      Capricorn:
        "Behind your wildest dreams lies reality...of course, Jupiter Capricorn",
      Aquarius: "Very generous, Jupiter Aquarius",
      Pisces: "Will help you out of a crises, Jupiter Pisces",
    },
    Saturn: {
      Aries: "Eat my dust, Aries Saturn",
      Taurus: "Binge buy then return, Taurus Saturn",
      Gemini: "Gossip Hater Gemini Saturn",
      Cancer: "Tiny dancer, Saturn in Cancer",
      Leo: "Can’t take a joke, Leo Saturn",
      Virgo: "Download The Pattern, Virgo in Saturn",
      Libra: "Beyonce Knowles, Saturn in Libra",
      Scorpio: "Feel the burn, Scorpio Saturn",
      Sagittarius: "Why, Why, Why Sagittarius Saturn",
      Capricorn: "Tony Robbins, Capricorn Saturn",
      Aquarius: "Elvis Presley Aquarius in Saturn",
      Pisces: "Jesus christ, Dalai Lama and Isaac Newton Pisces in Saturn",
    },
    Uranus: {
      Aries: "Let’s push things forward, Aries Uranus",
      Taurus: "Slow and porous Uranus in Taurus",
      Gemini: "A hole in 2 Gemini Uranus",
      Cancer: "Dream catcher earring, Cancer Uranus",
      Leo: "Despacito, Uranus Leo",
      Virgo:
        "Possibly Vegan/It’s better to burn out than fade away, Virgo Uranus",
      Libra: "Making arty farty, Libra Uranus",
      Scorpio: "Shakira Shakira Scorpio Uranus",
      Sagittarius: "Pretty precarious Uranus Sagittarius",
      Capricorn: "Hot knife in butter, Capricorn Uranus",
      Aquarius: "Dance to the beat of your own drum, Aquarius Uranus",
      Pisces: "Slippery fish, Pisces Uranus",
    },
    Neptune: {
      Aries: "Covid Immune, Aries Neptune",
      Taurus: "Wake up at Noon, Taurus Neptune",
      Gemini: "Bday in June, Gemini Neptune",
      Cancer: "Swim to the moon, Cancer Neptune",
      Leo: "A bit of a goon, Leo Neptune",
      Virgo: "Ladies commune, Virgo Neptune",
      Libra: "Vidal Sassoon, Libra Neptune",
      Scorpio: "Bonking by noon, Scorpio Neptune",
      Sagittarius: "Holiday to Cancun, Sagittarius Neptune",
      Capricorn: "Read the room, Capricorn Neptune",
      Aquarius: "Fly a balloon, Aquarius Neptune",
      Pisces: "Wrinkly prune, Pisces Neptune",
    },
    Pluto: {
      Aries: "Fighting in the Dojo, Aries Pluto",
      Taurus: "Why go so slow slow? Taurus Pluto",
      Gemini: "Takes two to tango, Gemini Pluto",
      Cancer: "Heavy Flow, Cancer Pluto",
      Leo: "Bilbo looking For Frodo, Leo Pluto",
      Virgo: "The Cleaning Popo, Virgo Pluto",
      Libra: "Yes or no Yoyo, Libra Pluto",
      Scorpio: "Dancing some butoh, Scorpio Pluto",
      Sagittarius: "Tasty Prosciutto, Sagittarius Pluto",
      Capricorn: "Saving for a bungalow, Capricorn Pluto",
      Aquarius: "A Silly Dodo, Aquarius Pluto",
      Pisces: "Mermaid Hoe, Pisces Pluto",
    },
    Descendant: {
      Aries: "Married at first sight, Aries Descendant",
      Taurus: "You’re my lobster, Taurus Descendant",
      Gemini: "Easy Breezy Beautiful Cover Girls Gemini Descendant",
      Cancer: "Total independence, Cancer Descendant",
      Leo: "Live, Laugh, Love, Leo Descendant",
      Virgo: "Split the bill, Virgo Descendant",
      Libra: "There’s no I in team, but there is an I in Libra Descendant",
      Scorpio: "Tame a weirdo, Descendent Scorpio",
      Sagittarius: "Luck be a lady tonight, Sagittarius Descendant",
      Capricorn: "Adele Dazeem, Descendant in Capricorn",
      Aquarius: "Snakes on a Plane, Aquarius Descendant",
      Pisces: "Fishy Wishy Washy, Pisces Descendant",
    },
  };

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
        catchPhraseDict,
      }}
    >
      {props.children}
    </UtilitiesContext.Provider>
  );
};
