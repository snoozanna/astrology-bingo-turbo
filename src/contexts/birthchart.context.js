import React, { createContext } from "react";
import { signs, planets } from "./../constants";

export const BirthChartContext = createContext({
  BirthChart: () => {},
});

export const BirthChartProvider = (props) => {
  /****************************************************************
   * Constructor for a basic birthchart
   * Holds static dictionaries; imagery and birthchart data
   ****************************************************************/

  class BirthChart {
    constructor({
      // name,
      birthday,
      time,
      latitude,
      longitude,
      ownerName,
      Sun,
      Mercury,
      Venus,
      Mars,
      Jupiter,
      Saturn,
      Uranus,
      Neptune,
      Pluto,
      Ascendant,
      Descendant,
      Moon,
      _id,
      image = null,
    }) {
      // console.log("chart", arguments[0]);
      if (typeof ownerName !== "string" || !ownerName.length) {
        throw new Error(`No ownerName provided. Instead received ${ownerName}`);
      }
      // this.name = name;
      this.birthday = birthday;
      this.time = time;
      this.latitude = latitude;
      this.longitude = longitude;
      this.ownerName = ownerName;
      this.image = image;

      this.Sun =
        typeof Sun === "string"
          ? {
              sign: Sun,
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Sun;

      this.Mercury =
        typeof Mercury === "string"
          ? {
              sign: Mercury,
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Mercury;

      this.Venus =
        typeof Venus === "string"
          ? {
              sign: Venus,
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Venus;
      this.Mars =
        typeof Mars === "string"
          ? {
              sign: Mars,
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Mars;

      this.Jupiter =
        typeof Jupiter === "string"
          ? {
              sign: Jupiter,
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Jupiter;

      this.Saturn =
        typeof Saturn === "string"
          ? {
              sign: Saturn,
              viewBox: "-100 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Saturn;

      this.Uranus =
        typeof Uranus === "string"
          ? {
              sign: Uranus,
              viewBox: "-150 60 600 600",
              called: false,
            }
          : Uranus;

      this.Neptune =
        typeof Neptune === "string"
          ? {
              sign: Neptune,
              viewBox: "-100 60 600 600",
              called: false,
            }
          : Neptune;

      this.Pluto =
        typeof Pluto === "string"
          ? {
              sign: Pluto,
              viewBox: "-100 60 600 600",
              called: false,
            }
          : Pluto;

      this.Ascendant =
        typeof Ascendant === "string"
          ? {
              sign: Ascendant,
              viewBox: "-50 60 600 600",
              textAnchor: "start",
              called: false,
            }
          : Ascendant;

      this.Descendant =
        typeof Descendant === "string"
          ? {
              sign: Descendant,
              viewBox: "-100 60 600 600",
              called: false,
            }
          : Descendant;

      this.Moon =
        typeof Moon === "string"
          ? {
              sign: Moon,

              viewBox: "-100 60 600 600",
              textAnchor: "start",
              called: false,
            }
          : Moon;

    }

    markCalled({ planet: p, sign }) {
      const planet = this[p];
      if (planet.sign === sign) {
        planet.called = true;
      }
    }
    unMarkCalled() {
      for (const planet of planets) {
        this[planet].called = false;
      }
    }

    bcReport() {
      return `
    Sun: ${this.Sun.sign}
    Moon: ${this.Moon.sign}
    Ascendant: ${this.Ascendant.sign}
    Mercury: ${this.Mercury.sign}
    Venus: ${this.Venus.sign}
    Mars: ${this.Mars.sign}
    Jupiter: ${this.Jupiter.sign}
    Saturn: ${this.Saturn.sign}
    Uranus: ${this.Uranus.sign}
    Neptune${this.Neptune.sign}
    Id: ${this._id}`;
    }

    static signArr = (data) => {
      const arr = [];
      console.log("data", data);
      Object.entries(data.data).forEach(([planet, value]) => {
        if (planets.includes(planet)) {
          const { sign } = value;
          console.log("sign", sign);
          arr.push(sign);
        }
      });
      console.log("arr", arr);
      return arr;
    };
  }

  return (
    <BirthChartContext.Provider
      value={{
        BirthChart,
      }}
    >
      {props.children}
    </BirthChartContext.Provider>
  );
};
