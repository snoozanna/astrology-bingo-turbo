import React, { createContext, useContext, useState } from "react";
import { UtilitiesContext } from "./utilities.context";
import SignSymbol from "./../components/ChartList/SignSymbol";

export const BirthChartContext = createContext({
  // BirthChart, /// how do you do this for a class?
  BirthChart: () => {},
});

export const BirthChartProvider = (props) => {
  const { uuidv4, isElement } = useContext(UtilitiesContext);

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
      _id = uuidv4(),
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
              icon: BirthChart.getIconSVG(Sun),
              location: { x: 515, y: -190 },
              word: BirthChart.getSignWordSVG(Sun),
              wordLocation: { x: 450, y: -260 },
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Sun;

      this.Mercury =
        typeof Mercury === "string"
          ? {
              sign: Mercury,
              icon: BirthChart.getIconSVG(Mercury),
              location: { x: 590, y: -140 },
              word: BirthChart.getSignWordSVG(Mercury),
              wordLocation: { x: 630, y: -120 },
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Mercury;

      this.Venus =
        typeof Venus === "string"
          ? {
              sign: Venus,
              icon: BirthChart.getIconSVG(Venus),
              location: { x: 635, y: -65 },
              word: BirthChart.getSignWordSVG(Venus),
              wordLocation: { x: 700, y: 30 },
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Venus;

      this.Mars =
        typeof Mars === "string"
          ? {
              sign: Mars,
              icon: BirthChart.getIconSVG(Mars),
              location: { x: 650, y: 30 },
              word: BirthChart.getSignWordSVG(Mars),
              wordLocation: { x: 675, y: 260 },
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Mars;

      this.Jupiter =
        typeof Jupiter === "string"
          ? {
              sign: Jupiter,
              icon: BirthChart.getIconSVG(Jupiter),
              location: { x: 600, y: 100 },
              word: BirthChart.getSignWordSVG(Jupiter),
              wordLocation: { x: 550, y: 420 },
              viewBox: "-500 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Jupiter;

      this.Saturn =
        typeof Saturn === "string"
          ? {
              sign: Saturn,
              icon: BirthChart.getIconSVG(Saturn),
              location: { x: 515, y: 140 },
              word: BirthChart.getSignWordSVG(Saturn),
              wordLocation: { x: 530, y: 495 },
              viewBox: "-100 60 600 600",
              textAnchor: "end",
              called: false,
            }
          : Saturn;

      this.Uranus =
        typeof Uranus === "string"
          ? {
              sign: Uranus,
              icon: BirthChart.getIconSVG(Uranus),
              location: { x: 430, y: 140 },
              word: BirthChart.getSignWordSVG(Uranus),
              wordLocation: { x: 340, y: 490 },
              viewBox: "-150 60 600 600",
              called: false,
            }
          : Uranus;

      this.Neptune =
        typeof Neptune === "string"
          ? {
              sign: Neptune,
              icon: BirthChart.getIconSVG(Neptune),
              location: { x: 340, y: 90 },
              word: BirthChart.getSignWordSVG(Neptune),
              wordLocation: { x: 190, y: 395 },
              viewBox: "-100 60 600 600",
              called: false,
            }
          : Neptune;

      this.Pluto =
        typeof Pluto === "string"
          ? {
              sign: Pluto,
              icon: BirthChart.getIconSVG(Pluto),
              location: { x: 285, y: 15 },
              word: BirthChart.getSignWordSVG(Pluto),
              wordLocation: { x: 95, y: 245 },
              viewBox: "-100 60 600 600",
              called: false,
            }
          : Pluto;

      this.Ascendant =
        typeof Ascendant === "string"
          ? {
              sign: Ascendant,
              icon: BirthChart.getIconSVG(Ascendant),
              location: { x: 300, y: -65 },
              word: BirthChart.getSignWordSVG(Ascendant),
              wordLocation: { x: 90, y: 40 },
              viewBox: "-50 60 600 600",
              textAnchor: "start",
              called: false,
            }
          : Ascendant;

      this.Descendant =
        typeof Descendant === "string"
          ? {
              sign: Descendant,
              icon: BirthChart.getIconSVG(Descendant),
              location: { x: 340, y: -150 },
              word: BirthChart.getSignWordSVG(Descendant),
              wordLocation: { x: 150, y: -140 },
              viewBox: "-100 60 600 600",
              called: false,
            }
          : Descendant;

      this.Moon =
        typeof Moon === "string"
          ? {
              sign: Moon,
              icon: BirthChart.getIconSVG(Moon),
              location: { x: 430, y: -190 },
              word: BirthChart.getSignWordSVG(Moon),
              wordLocation: { x: 315, y: -250 },
              viewBox: "-100 60 600 600",
              textAnchor: "start",
              called: false,
            }
          : Moon;

      this._id = _id;
    }

    markCalled({ planet: p, sign }) {
      const planet = this[p];
      if (planet.sign === sign) {
        planet.called = true;
      }
    }
    unMarkCalled() {
      for (const planet of BirthChart.planets) {
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

    static getIconSVG(sign) {
      switch (sign) {
        case "Aries":
          // return "./../assets/symbols/aries.svg";
          return `	<path d="M243.46,123.91c0-4.75-.41-8.92.2-12.93.24-1.54,2.59-3.29,4.36-4,9.66-3.78,18.2-9,24.28-17.64,14.17-20.26,3.17-49.18-20.11-52.75-20.42-3.14-41.09,9.48-49.68,30.12C190.78,94.9,184,124.48,179,154.35,171,202.08,164.25,250,157,297.87a21.82,21.82,0,0,1-.57,2.13H142.54c-1.7-13-3.33-25.94-5.12-38.87-7.51-54.27-15.18-108.53-29.28-161.57A205.72,205.72,0,0,0,93.69,60.45C84.59,42.27,62.93,33,45,37.16,20,43,15.82,72.84,27.14,89.27c5.8,8.42,13.92,13.88,23.36,17.12C55.06,108,57,110,56.37,114.78c-.39,2.82-.07,5.73-.07,8.66C28.56,120.7,3.85,100,.62,71.09-1.47,52.42,1.44,35,13.37,19.87,29.63-.81,55-4.47,76.83,4.84c26.67,11.38,41.51,33.4,47.92,60.49,6.21,26.26,10.56,53,14.55,79.73,4.11,27.51,6.8,55.24,10.64,83,1.35-11.76,2.64-23.53,4.07-35.29,5.18-42.75,9.52-85.65,20.65-127.41,6.08-22.79,17.34-42.5,38-55.31,38.77-24,82.15-2.17,86.52,41,2.11,20.78-2.16,39.42-17.26,54.66C271.56,116.1,258.66,121.28,243.46,123.91Z" transform="translate(0)"/>`;
          break;
        case "Taurus":
          // return "./assets/img/taurus.svg";
          return `<path d="M95.92,113a62,62,0,0,1-18.16-15.9A82.46,82.46,0,0,1,67,78.15c-3.33-8-6.44-16-9.8-24a49.58,49.58,0,0,0-9.47-14.9C41.8,33,34.1,29.58,25.54,27.57A107.54,107.54,0,0,0,4,25.09c-1.27,0-2.54,0-4,0C.14,16.74.29,8.5.43.16,1.77.16,3,.13,4.2.16A134.3,134.3,0,0,1,34.05,3.85c13.47,3.42,25.21,9.46,34.4,19.27A75.3,75.3,0,0,1,82.71,45.49c3.56,8.38,6.82,16.87,10.36,25.26a49.8,49.8,0,0,0,9.47,14.89c5.89,6.26,13.58,9.69,22.16,11.67,10.21,2.36,20.62,2.75,31.08,2.4a98.8,98.8,0,0,0,20.43-2.62c8.27-2,15.66-5.47,21.33-11.54a49.83,49.83,0,0,0,9.38-14.79c3-7.12,5.77-14.32,8.7-21.46C219,41,223.13,33.13,229,26c7.69-9.31,17.62-15.8,29.47-19.94A107.45,107.45,0,0,1,287,.61c4.12-.27,8.24-.4,12.59-.61.15,8.41.3,16.65.45,25-3,.11-5.86.17-8.74.33a88.39,88.39,0,0,0-22.64,3.92,38.83,38.83,0,0,0-21.87,17.39c-4.09,6.8-6.69,14.15-9.58,21.39-2.63,6.62-5.2,13.27-8.71,19.57-5.74,10.28-13.41,19-24.11,25.23,36.44,21.3,55.75,51.35,54.32,91.25-1,27.71-13.46,51.1-36,69.65-46.08,37.93-117,33-156.63-10.64A95.26,95.26,0,0,1,44.59,224.7a91.06,91.06,0,0,1-1.77-43A94.18,94.18,0,0,1,61,142,106.59,106.59,0,0,1,95.92,113Zm54,161.34c45,.09,81.6-33.32,81.78-74.64s-36.47-74.82-81.63-74.91c-45-.08-81.59,33.32-81.77,74.64S104.76,274.21,149.92,274.3Z"/>`;
          break;
        case "Gemini":
          // return "./assets/img/gemini.svg";
          return `<path d="M300,284.44,288.22,299c-91.55-72.44-183.1-72.92-274.78,0L1.65,284.45c22.31-16.11,44.41-31.71,69-43.34,3.29-1.55,4.33-3.4,4.32-7Q74.82,150,75,65.92c0-3.58-1-5.41-4.34-7C46.16,47.54,24,32.33,1.67,16.22L13.47,1c91.6,73.73,183.16,73.22,274.72,0L300,16.27c-7.22,5.08-13.93,10.41-21.2,14.8-16,9.65-32.16,18.92-48.4,28.09-2.73,1.54-4,2.94-4,6.18q.14,84.63,0,169.26c0,3.57,1.43,5.08,4.39,6.47C255.36,252.69,277.5,268.25,300,284.44ZM191.59,228.11V71.86a210.86,210.86,0,0,1-81.69,0V228.13A266.7,266.7,0,0,1,191.59,228.11Z" transform="translate(-1.65 -1)"/>`;
          break;
        case "Cancer":
          // return "./assets/img/cancer.svg";
          return `<path d="M300,138.05H286.71c-1.73-6.36-3.29-12.79-5.21-19.12C266,67.86,226.83,35.78,173.67,30.17c-25.95-2.74-51.26-1.43-75.26,9.93a86.43,86.43,0,0,0-15.5,9.46c7.93,0,15.92-.64,23.77.11,26.13,2.5,47,20.78,50.56,43.59,4.28,27.68-7.85,50.85-34.18,61.48C95.68,165.8,68,165.63,42.3,149.66c-20.91-13-28.91-33.47-28.16-57.49.77-24.69,12.21-44.12,31-59.43C74.42,8.91,108.86.73,145.7.71c29.24,0,57.6,4.69,83.63,18.94C261,37,282.49,62.86,292.25,97.7,295.87,110.6,297.39,124.1,300,138.05ZM41.65,105.7a75.57,75.57,0,0,0,1.4,9.06,41.48,41.48,0,0,0,42,30c18.5-1,33.74-11.17,38.9-26,7.81-22.38-5-45-29-51.21C68.32,60.68,41.86,79.66,41.65,105.7Z" transform="translate(0 -0.71)"/><path d="M217.44,248.8c-9.72,0-19.65,1.32-29.1-.25-25.9-4.32-43.13-21.88-46.35-45.43-3.39-24.76,8.73-47,33.1-58.07s49.75-11.6,74.09-.43c25.67,11.77,37,33.48,36.47,61.34-.46,25.13-12,44.86-31,60.48-24.41,20.06-53.14,29.09-84.18,31.26-34.84,2.45-68.74-1.47-100.07-18.22-31.9-17.06-53.19-43.13-62.78-78C4,188.52,2.53,175.05,0,161.27H12.48c3.13,10,5.59,20.36,9.5,30.1,18.75,46.69,54.21,71.41,103.49,77.37,23.18,2.81,46.18,2.27,68.26-6.31,8.34-3.24,16.21-7.71,24.29-11.62C217.82,250.14,217.63,249.47,217.44,248.8Zm-3.81-15c5.66-1,11.49-1.51,17-3.18,24.53-7.52,35.26-36.52,21-57.7-10.35-15.36-25.58-20.68-43.7-18.3-21.28,2.79-36.9,23.83-33.75,45C176.57,215.89,193,232.72,213.63,233.82Z" transform="translate(0 -0.71)"/>`;
          break;
        case "Leo":
          // return "./assets/img/leo.svg";
          return `<path d="M99.84,123.25c-2.11-4.11-4.27-8.07-6.2-12.12A81.58,81.58,0,0,1,86,85.76a68.18,68.18,0,0,1,5.81-36.59C99.72,31.57,112.65,17.91,131.31,9c14.06-6.68,29.08-10,45-8.77,28.44,2.22,51.27,13.59,67.23,35.31a70.66,70.66,0,0,1,13.54,34.66,97,97,0,0,1-2.4,32.5c-2.71,11.69-7.17,22.87-11.75,34-7.47,18.2-16.63,35.71-25.75,53.25-6.34,12.2-12.58,24.44-17.9,37a49.68,49.68,0,0,0-3.64,28.22,30.54,30.54,0,0,0,6.62,14.86c5.87,7,13.81,9.88,23.31,9.53,7.88-.29,15-2.79,21.82-6.22a76.25,76.25,0,0,0,15.07-10.05l1-.8L279,277.19c-2.29,1.8-4.48,3.63-6.78,5.32A90.15,90.15,0,0,1,240.13,298c-11.34,2.8-22.65,2.91-33.8-.79a46.86,46.86,0,0,1-26.88-22.08c-5.43-9.61-7.19-19.92-6.75-30.62s3.78-20.76,8.25-30.59c7.22-15.88,15.41-31.34,23.48-46.87a471,471,0,0,0,23.38-51.94,117,117,0,0,0,6.77-26.15c1.47-11.47.68-22.71-4.57-33.44-9.61-19.67-26.56-30.71-49.58-34.41-10.9-1.75-21.46-.38-31.88,3.1C127.17,31.29,112.19,49.7,108.66,69c-2,11,0,21.49,4.41,31.72,3.7,8.58,8.71,16.55,13.65,24.55,4.68,7.56,9.38,15.11,13.16,23.09,3.71,7.8,6.73,15.83,7.81,24.29,3,23.9-6.27,43-27.9,56.89a65.39,65.39,0,0,1-29,9.9,72.36,72.36,0,0,1-19.22-.85c-25.11-4.09-44.93-22.75-50.81-44.81-6.13-23,4-50.2,30.79-64.13a69.73,69.73,0,0,1,37.2-8c3.39.22,6.75.94,10.12,1.44C99.16,123.11,99.48,123.19,99.84,123.25ZM126,180.8c-.26-2.32-.46-4.64-.79-6.94a27.24,27.24,0,0,0-.95-4.37c-6.78-21-31-32.45-52.63-25.9-15.73,4.76-28.92,16.26-30.26,35.2-.54,7.73,1.81,14.91,6.19,21.51,9.45,14.22,25.18,21,42.61,18.73C108.4,216.7,126.82,201,126,180.8Z" transform="translate(-19 0)"/>`;
          break;
        case "Virgo":
          // return "./assets/img/virgo.svg";
          return `<path d="M219.61,99.83a25.89,25.89,0,0,1,8.79-6.31c5.06-2,10.06-1.55,15,.47,6.12,2.5,10.94,6.72,15.11,11.72,7,8.42,11.49,18.15,14.48,28.61a100.44,100.44,0,0,1,3.67,21.14,160.54,160.54,0,0,1-6.38,57.4,109.69,109.69,0,0,1-19,37c-.17.21-.32.43-.54.73a238.42,238.42,0,0,0,37.12,30.19c-4.21,6.41-8.39,12.77-12.62,19.23a261,261,0,0,1-41.07-33.43c-21.32,15.72-45.73,20.93-71.76,21.15-.19-7.68-.38-15.29-.57-23,15.15-.08,29.84-2,43.76-8a71.8,71.8,0,0,0,13.28-7.49c-.28-.4-.53-.77-.79-1.12a118.6,118.6,0,0,1-15.57-26.88,76.08,76.08,0,0,1-5.41-21.08c-.29-3-.46-6.12-.46-9.18q0-57.37,0-114.75a25.87,25.87,0,0,0-2.28-10,129.6,129.6,0,0,0-24.21-38.41c-1.06-1.16-2.26-2.18-3.41-3.26-.24-.23-.53-.42-1-.8-1.9,2-3.94,3.86-5.67,6a107.33,107.33,0,0,0-18.7,33.68,40.3,40.3,0,0,0-2.27,13.18q.06,76,0,152.05v1.53h-23v-1.4q0-75.45,0-150.89a34.42,34.42,0,0,0-2-11.94,126.5,126.5,0,0,0-21.27-38c-1-1.21-2.17-2.27-3.22-3.44a.89.89,0,0,0-1.52,0c-3,3-6.22,5.84-9,9.07a109.24,109.24,0,0,0-16.39,26.1,45.59,45.59,0,0,0-4.07,13.24,24.67,24.67,0,0,0-.17,3.1c0,1.68,0,3.37,0,5.06q0,73.89,0,147.79v1.4h-23V81.24c0-11.75-1.51-23.25-5.51-34.34A74.23,74.23,0,0,0,15.79,22.16c-1.17-1.31-2.5-2.48-3.85-3.8L27.05,1A77.07,77.07,0,0,1,40.43,16.5,100.3,100.3,0,0,1,50,34.56c.28-.4.49-.7.69-1A124.19,124.19,0,0,1,69.13,10.4C72.91,6.79,77,3.53,81.88,1.52A18.52,18.52,0,0,1,99.06,2.84a42.16,42.16,0,0,1,10.24,8.82c6.87,7.76,12.33,16.5,17.25,25.59.15.27.29.53.53,1,.36-.67.66-1.23,1-1.79a116.55,116.55,0,0,1,18.08-25.69,38.17,38.17,0,0,1,12.07-9c6-2.64,11.77-2.1,17.41,1a43.35,43.35,0,0,1,10.69,8.64,151.58,151.58,0,0,1,29.5,46.42A47.3,47.3,0,0,1,219.65,77c-.18,7.09,0,14.19,0,21.29ZM236,116c-1,1.35-2,2.61-2.82,4A94.08,94.08,0,0,0,223,142.9c-1.89,6.13-3.37,12.36-3.39,18.83,0,10.09,0,20.18,0,30.27a51,51,0,0,0,1.72,13.07,78.83,78.83,0,0,0,10.91,23.19c1,1.49,2,3,3.16,4.6,1.5-2.38,3-4.54,4.27-6.79,6.51-11.21,10.23-23.38,12.37-36.1a155.44,155.44,0,0,0,2-22.9,95.48,95.48,0,0,0-2-21.6A60.73,60.73,0,0,0,242.77,123,26.07,26.07,0,0,0,236,116Z" transform="translate(-11.94 0)"/>`;
          break;
        case "Libra":
          // return "./assets/img/libra.svg";
          return `<path d="M299.93,191.38H181.67c0-.64-.08-1.21-.08-1.78,0-7.51,0-15,0-22.54a2.74,2.74,0,0,1,1.41-2.63c10.5-7.05,19.14-15.81,24.14-27.62,8.79-20.74,6.43-48-14.07-67.32-10.41-9.83-22.49-16-36.81-17.15-19.32-1.61-36,4.19-49.8,18.08-9.4,9.49-15.65,20.59-17.3,34-2.72,22,4.09,40.43,21.18,54.82,2.36,2,5,3.7,7.41,5.6a2.4,2.4,0,0,1,.92,1.51c0,8.27,0,16.54,0,24.95H.19V163.46h83c-1-1-1.62-1.72-2.26-2.42-8.89-9.64-15.62-20.54-18.47-33.45a77.73,77.73,0,0,1,9.39-58.31C83.19,50.36,99.2,36.7,120.06,29.13c12-4.34,24.43-5.58,37.13-4.72A82.91,82.91,0,0,1,197.68,37.6c16.82,11,29.92,25.26,37,44.36,6,16.19,7.15,32.76,2.23,49.49-3.28,11.17-9.37,20.76-17.18,29.3-.59.64-1.19,1.27-1.78,1.92a7.61,7.61,0,0,0-.44.65c.65,0,1.14.11,1.63.11h79.37a14,14,0,0,0,1.45-.14Z" transform="translate(-0.07 -24.15)"/><path d="M.07,275V247.31c.63,0,1.15-.08,1.68-.08H299.93V275Z" transform="translate(-0.07 -24.15)"/>`;
          break;
        case "Scorpio":
          // return "./assets/img/scorpio.svg";
          return `<path d="M205.17,300c-6-3.55-12.16-6.73-17.88-10.72-12.51-8.72-17.76-22.73-21.56-37.69-5.9-23.19-8.27-47-9.88-70.89-2.9-43.08-1.46-86.19-.73-129.29.06-3.93-1.18-5.13-4.39-6.24-10.24-3.55-20.36-5.54-30.87-1.32C117,45,115.71,46.44,115.73,50c.26,54.22.37,108.44.65,162.67A12,12,0,0,0,118.5,219c3.34,4.9,7,9.52,11,14.73-11.14,6.39-18.25,16.2-22,29.82-7.64-6.61-14.71-12.69-21.75-18.83-8.43-7.36-8.66-7.52-3.7-17.78a48.67,48.67,0,0,0,4.76-22.32c-.27-51-.19-101.9-.23-152.84v-7c-12.66-2.24-25-5-36,4.81a10.24,10.24,0,0,0-3,6.67q.06,80.24.54,160.48a14.92,14.92,0,0,0,1.54,6.11c2.69,5.59,5.64,11,8.79,17.1-10.19,6.21-16.35,16.16-21.7,27.49-1.17-1-2.21-1.71-3.1-2.62-6.54-6.65-13-13.42-19.63-20-2.12-2.09-3.21-3.89-1.43-6.87,7.51-12.58,8.06-26.59,8-41.19-.36-46.94-.05-93.88,0-140.83V49.57L0,45C6.17,33.45,12,22.47,18.1,11.12c10,5.79,21.14,9.56,33.51,8.17l-2.5,15.36,1,.71A60.06,60.06,0,0,0,55,29.06c3.76-6.39,7.22-13,11-19.36.8-1.35,2.79-3.11,3.81-2.82a97.08,97.08,0,0,0,41.25,2.2V28.47l1.15.32L127.14,4C137.21,5.85,147,8.36,156.86,9.26s20,.2,30.34.2c-.63,6.81-1.73,14.29-1.95,21.79-.94,32.16-2.36,64.33-2.13,96.48.17,22.3,2.24,44.63,4.36,66.84,2,20.56,5.14,41,12.75,60.15a63.78,63.78,0,0,0,7.51,13.94c6.75,9.24,15.17,10.91,23.88,3.85a93,93,0,0,0,16.81-18.17c5.76-8.09,10.33-17.23,15.36-26a8.15,8.15,0,0,0,1-4.82L232.07,246.3c-.48-4-.37-7.55-1.39-10.65-3.13-9.49,1.2-14.13,7.92-19,20.71-15.11,41-31,61.4-46.54v88.44l-18.39,11.71V230.58a18.76,18.76,0,0,0-4.59,6c-10.34,18.54-20.58,37.28-36.42,50.85-5.91,5.07-13,8.41-19.62,12.53Z" transform="translate(0 -4)"/>`;
          break;
        case "Sagittarius":
          // return "./../assets/symbols/sagittarius.svg";
          return `<path d="M104.72,213.24c-25.82,25.88-51,51.12-76.18,76.35C19.12,299,12.39,300.41,6.06,294.3-.48,288,.92,281,10.74,271.22q34.71-34.73,69.5-69.38c2.05-2,4.89-3.28,7.9-5.25L33.75,142.4c-1.13-1.12-2.34-2.18-3.39-3.38-5.22-5.86-5.18-13.64.05-18.58s12.83-4.68,18.58,1q24.67,24.44,49.1,49.13a75.82,75.82,0,0,1,5.15,6.27L252.79,27.29c-2-.15-4.2-.47-6.4-.47q-43.9,0-87.81.13c-8.58,0-14.16-5.16-14-12.84.2-7.37,5.75-12.23,13.83-12.26q60.67-.23,121.33-.49C295.36,1.3,299,5,299,20.61q-.15,60.68-.3,121.34c0,8.67-5.07,14.18-12.77,14.06s-12.51-5.87-12.51-14.47c0-31.38,0-62.75,0-92.88L124.74,197.3c10.81,10.77,23.24,23.15,35.65,35.53,5.28,5.26,10.59,10.49,15.8,15.81,7,7.18,7.71,14.66,2,20.26s-13.08,4.79-20.26-2.36C140.4,249.07,123,231.53,104.72,213.24Z" transform="translate(-2.05 -1.36)"/>`;
          break;
        case "Capricorn":
          // return "./assets/img/capricorn.svg";
          return `<path d="M60.65,224.94h-25v-1.63q0-70.58,0-141.14c0-11.73-1.64-23.16-6-34.11-4.27-10.75-10.28-20.34-19.13-28a2.38,2.38,0,0,1-.27-.37L26,.4C37.11,9.71,45,21.24,51.09,34.39c.29-.42.56-.76.8-1.11,5.47-8.15,11.46-15.9,18.74-22.53a67.75,67.75,0,0,1,9.09-7c8.42-5.37,17-4.91,25.2.89,6.76,4.81,12.26,10.87,17.36,17.33A156.26,156.26,0,0,1,143.76,57.3a51.61,51.61,0,0,1,4.46,20.83c-.13,28.79,0,57.59-.06,86.38A47.1,47.1,0,0,0,157.89,194a44.82,44.82,0,0,0,14.35,12.23c.24.13.51.22.93.4V205c.08-9-.17-18.09.32-27.11a58.13,58.13,0,0,1,11.25-32.19,49.49,49.49,0,0,1,29.65-19.18,68.77,68.77,0,0,1,23.72-.9,59.17,59.17,0,0,1,21.35,6.54,45.77,45.77,0,0,1,20.37,21.31,60.49,60.49,0,0,1,3.58,43.11c-4.26,14.92-13.7,25.87-27.23,33.33a62.27,62.27,0,0,1-30.31,7.6c-9.88,0-19.76,0-29.63,0a1.18,1.18,0,0,0-1.38,1c-10.05,30.81-31.05,50.11-62,58.85a77,77,0,0,1-21,2.7q-12.63,0-25.26,0h-.84V275h1.31c8.13,0,16.26.2,24.38,0,24.54-.69,43-11.73,55.17-33.07a67.33,67.33,0,0,0,2.93-6.47c.36-.83.61-1.71.94-2.64-1.68-.7-3.31-1.31-4.88-2-22-10.21-35.59-27.22-40.92-50.84a68.64,68.64,0,0,1-1.52-15.13c0-28.76,0-57.51,0-86.26a28.44,28.44,0,0,0-2.43-11.37,124.56,124.56,0,0,0-13.31-23.25A95,95,0,0,0,93.11,27.13c-1.73-1.53-1.35-1.58-3.22-.05A82.94,82.94,0,0,0,75.63,42.93,101.81,101.81,0,0,0,63.28,64.71a36.13,36.13,0,0,0-2.7,13.85c.12,21.08.07,42.17.07,63.25q0,40.69,0,81.39Zm137.52-12.5.81,0c9,0,18.08,0,27.12,0a37.55,37.55,0,0,0,16-3.47c8.6-4,14.77-10.35,17.39-19.62a36.57,36.57,0,0,0-1.24-22.94,22.38,22.38,0,0,0-13.67-13.69,43.7,43.7,0,0,0-23.34-2.11c-9.08,1.55-15.51,6.69-19.39,15-2.75,5.89-3.64,12.16-3.65,18.59q0,13.42,0,26.86Z" transform="translate(-10.27 0)"/>`;
          break;
        case "Aquarius":
          // return "./assets/img/aquarius.svg";
          return `<path d="M271.07,50.34,300,118.12l-18.43,8.12L262.05,79.93l-70.83,46.29c-6.56-15.43-13.06-30.69-19.7-46.29l-70,46.29c-6.58-15.5-13-30.72-19.63-46.29L11.09,126.25.15,110,90.63,50.34l20,46.3L181,50.35l19.69,46.29Z" transform="translate(0 -50.34)"/><path d="M10.91,251,0,234.71l90.46-59.6c6.66,15.42,13.23,30.66,20,46.29l70.38-46.28c6.59,15.48,13.08,30.75,19.69,46.29l70.39-46.3c9.67,22.64,19.25,45.09,28.94,67.77L281.41,251,261.94,204.7,191.22,251l-19.7-46.29-70,46.29c-6.6-15.42-13.13-30.69-19.8-46.29Z" transform="translate(0 -50.34)"/>`;
          break;
        case "Pisces":
          // return "./assets/img/pisces.svg";
          return `<path d="M241.33.08q14,0,28,0c.36,0,1.17-.47,1,.56A289.28,289.28,0,0,0,246,30.84c-19.78,28.21-33.44,58.87-37.26,93.45-.33,2.94-.53,5.9-.8,9h60.64v21.35H208c0,.69,0,1.22,0,1.75a188.87,188.87,0,0,0,8.67,55.19,209.9,209.9,0,0,0,30.07,59.26,257.6,257.6,0,0,0,23.63,28.5c.18.9-.51.57-.88.57-4.1,0-8.2,0-12.3,0H239.57a14.72,14.72,0,0,0-.89-1.29,251,251,0,0,1-43.2-70.4c-9.58-23.34-15.81-47.45-16-72.87a3.48,3.48,0,0,0-.13-.69H120.7c0,.54-.08,1-.09,1.49A168.71,168.71,0,0,1,115.5,195c-9.3,36.93-26.3,70-50.36,99.41L60.63,300H29.3a276.05,276.05,0,0,0,23.92-28.83c14.23-19.87,25.21-41.35,31.87-64.94A190.32,190.32,0,0,0,92.16,156c0-.42,0-.84-.09-1.41H31.5V133.23H92.13a167.14,167.14,0,0,0-3.25-25C84.2,85.4,75.2,64.33,63.12,44.52A289.12,289.12,0,0,0,29.3.08H58.87c.27.34.52.7.82,1A250.4,250.4,0,0,1,86.56,35.6a218.18,218.18,0,0,1,33.83,96.13c.13,1.22.53,1.6,1.79,1.59q27.88-.06,55.78,0c.48,0,.95,0,1.49-.08.05-.31.08-.55.12-.78,1-6.32,1.71-12.67,2.9-19a218.83,218.83,0,0,1,35.2-84A261.25,261.25,0,0,1,241.33.08Z" transform="translate(-29.3 0)"/>`;
          break;
        default:
          // // console.log("default");
          break;
      }
    }

    static getSignWordSVG(sign) {
      switch (sign) {
        case "Aries":
          return `<text transform="rotate(88.854 -12.926 30.334)" font-size="252.05" font-family="WolpePegasus-Regular">
    Ari
  </text>`;
          break;
        case "Taurus":
          return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Tau
  </text>`;
          break;
        case "Gemini":
          return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Gem
  </text>`;
          break;
        case "Cancer":
          return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Can
  </text>`;
          break;
        case "Leo":
          return `<text transform="rotate(88.854 2.112 15.074)" font-size="252.05" font-family="WolpePegasus-Regular">
    Leo
  </text>`;
          break;
        case "Virgo":
          return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Vir
  </text>`;
          break;
        case "Libra":
          return `<text transform="rotate(88.854 -11.61 29.074)" letter-spacing="25" font-size="252.05" font-family="WolpePegasus-Regular">
    Lib
  </text>`;
          break;
        case "Scorpio":
          return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Sco
  </text>`;
          break;
        case "Sagittarius":
          return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Sag
  </text>`;
          break;
        case "Capricorn":
          return `<text transform="rotate(88.854 .623 10.473)" font-size="252.05" font-family="WolpePegasus-Regular">
    Cap
  </text>`;
          break;
        case "Aquarius":
          return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Aqu
  </text>`;
          break;
        case "Pisces":
          return `<text transform="rotate(88.854 -14.881 32.32)" letter-spacing="25" font-size="252.05" font-family="WolpePegasus-Regular">
    Pis
  </text>`;
          break;
        default:
          // console.log("default");
          break;
      }
    }

    static signArr = (data) => {
      const arr = [];
      console.log("data", data);
      Object.entries(data.data).map(([key, value]) => {
        if (BirthChart.planets.includes(key)) {
          const { sign } = value;
          console.log("sign", sign);
          arr.push(sign);
        } else {
          return null;
        }
      });
      console.log("arr", arr);
      return arr;
    };

    static descDict = Object.freeze({
      Aries: "Libra",
      Taurus: "Scorpio",
      Gemini: "Sagittarius",
      Cancer: "Capricorn",
      Leo: "Aquarius",
      Virgo: "Pisces",
      Libra: "Aries",
      Scorpio: "Taurus",
      Sagittarius: "Gemini",
      Capricorn: "Cancer",
      Aquarius: "Leo",
      Pisces: "Virgo",
    });

    static signs = Object.freeze([
      "Aries",
      "Taurus",
      "Gemini",
      "Cancer",
      "Leo",
      "Virgo",
      "Libra",
      "Scorpio",
      "Sagittarius",
      "Capricorn",
      "Aquarius",
      "Pisces",
    ]);

    static planets = Object.freeze([
      "Sun",
      "Moon",
      "Ascendant",
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
      "Pluto",
      "Descendant",
    ]);
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
