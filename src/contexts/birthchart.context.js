import React, { createContext, useContext, useState } from "react";
import { UtilitiesContext } from "./utilities.context";

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

    // renderChart({ mountNode, clearNode = true, recreate = false, options = {} }) {
    //   if (!isElement(mountNode)) {
    //     throw new Error(
    //       `You must provide a DOM node to insert the chart in. Received ${mountNode} of type: ${typeof mountNode}; class: ${
    //         mountNode?.__proto__?.constructor
    //       }`
    //     );
    //   }

    //   if (clearNode) {
    //     mountNode.innerHTML = "";
    //   }

    //   if (recreate || this.image == null) {
    //     this.image = this.generateChartImage();
    //   }

    //   const defaults = {
    //     showControls: true,
    //     showBirthday: true,
    //   };

    //   const { showControls, showBirthday } = { ...defaults, ...options };

    //   if (showControls) {
    //     const controls = document.createElement("div");
    //     controls.classList.add("controls");
    //     controls.id = "controls";

    //     const heading = document.createElement("h2");
    //     heading.classList.add("chart-heading");
    //     heading.textContent = `${this.ownerName}`;
    //     controls.append(heading);

    //     const printButton = document.createElement("button");
    //     printButton.textContent = "print chart";
    //     printButton.classList.add(
    //       "btn",
    //       "waves-effect",
    //       "waves-light",
    //       "print-btn"
    //     );
    //     printButton.addEventListener("click", () => {
    //       window.print();
    //       // printJS({
    //       //   printable: "chart",
    //       //   type: "html",
    //       //   css: "./styles/styles.css",
    //       // });
    //     });

    //     const transButton = document.createElement("button");
    //     transButton.textContent = "Remove outline";
    //     transButton.classList.add(
    //       "btn",
    //       "waves-effect",
    //       "waves-light",
    //       "trans-btn"
    //     );
    //     transButton.addEventListener("click", () => {
    //       const outline = document.getElementById("chart");
    //       const children = outline.childNodes;
    //       for (const child of children) {
    //         if (!child.classList.contains("sign")) {
    //           child.classList.toggle("transparent");
    //         } else {
    //           return;
    //         }
    //       }
    //       // // console.log("children", children);
    //       // children.classList.add("transparent");
    //       // outline.classList.add("transparent");
    //     });

    //     controls.append(printButton, transButton);
    //     mountNode.append(controls);
    //     mountNode.append(this.image);
    //   }

    //   if (showBirthday) {
    //     const birthdayDisplay = document.createElement("ul");
    //     birthdayDisplay.classList.add("birthday");
    //     const dateDisplay = document.createElement("li");
    //     dateDisplay.textContent = `Birthday: ${this.birthday}`;
    //     const timeDisplay = document.createElement("li");
    //     timeDisplay.textContent = `Time: ${this.time.slice(
    //       0,
    //       2
    //     )}:${this.time.slice(2)}`;
    //     const locationDisplay = document.createElement("li");
    //     locationDisplay.textContent = `Lat: ${this.latitude.toFixed(
    //       2
    //     )}, Long: ${this.longitude.toFixed(2)}`;
    //     console.log(dateDisplay, timeDisplay);
    //     birthdayDisplay.append(dateDisplay, timeDisplay, locationDisplay);
    //     // heading.append(birthdayDisplay);
    //     mountNode.append(birthdayDisplay);
    //   }
    // }

    // generateChartImage() {
    //   const { planets } = BirthChart;
    //   // Created a document fragment, so we append lis as few times as possible
    //   // const imgfrag = document.createDocumentFragment();
    //   // console.log("chart to be rendered", this);
    //   const symbolsToPopulate = [];
    //   // console.log("planets", planets);
    //   for (const [planet, sign] of Object.entries(this)) {
    //     console.log(planet, sign);
    //     if (!planets.includes(planet)) {
    //       console.log(`skipping ${planet}`);
    //       continue;
    //     }

    //     const currentSymbol = document.createElementNS(
    //       "http://www.w3.org/2000/svg",
    //       "svg"
    //     );

    //     const currentWord = document.createElementNS(
    //       "http://www.w3.org/2000/svg",
    //       "svg"
    //     );
    //     // console.log("currentWord", currentWord);
    //     currentSymbol.setAttribute("viewBox", "0 0 300 300");
    //     currentSymbol.setAttribute("width", "60");
    //     currentSymbol.classList.add("sign", "icon", "chart");
    //     currentSymbol.innerHTML = sign.icon;
    //     currentSymbol.location = sign.location;

    //     currentWord.setAttribute("viewBox", `${sign.viewBox}`);

    //     currentWord.setAttribute("width", "230");
    //     currentWord.classList.add(
    //       "sign",
    //       "word",
    //       "chart",
    //       `${sign.sign.toLowerCase()}`
    //     );
    //     currentWord.innerHTML = sign.word;
    //     currentWord.location = sign.wordLocation;
    //     const toRotate = currentWord.firstChild;
    //     toRotate.classList.add("inner-word", `${planet.toLowerCase()}`);
    //     const degrees = sign.wordRotation;
    //     const anchor = sign.textAnchor;
    //     // toRotate.setAttribute("transform", `${degrees}`); // no rotataion
    //     toRotate.setAttribute("text-anchor", `${anchor}`);
    //     gsap.to(
    //       currentSymbol,
    //       // duration: 6,
    //       {
    //         attr: {
    //           x: `${currentSymbol.location.x}`,
    //           y: `${currentSymbol.location.y}`,
    //         },
    //       }
    //     );
    //     gsap.to(currentWord, {
    //       attr: {
    //         x: `${currentWord.location.x}`,
    //         y: `${currentWord.location.y}`,
    //       },
    //     });

    //     symbolsToPopulate.push(currentSymbol, currentWord);
    //     // symbolsToPopulate.push( currentWord);
    //   }
    //   // console.log("symbolsToPopulate", symbolsToPopulate);

    //   ///BINGO CARD USING AN IMG

    //   // const chartImg = document.createElement("img");
    //   // // console.log("chartImg", chartImg);
    //   // chartImg.classList.add("bc-template", "materialboxed");
    //   // chartImg.src = "./assets/img/fake-bc-template.svg";

    //   ///BINGO CAR USING AN SVG

    //   const chartImg = document.createElementNS(
    //     "http://www.w3.org/2000/svg",
    //     "svg"
    //   );
    //   // console.log("chartImg", chartImg);
    //   chartImg.id = "chart";
    //   chartImg.classList.add("bc-template", "materialboxed", "chart-outline");
    //   chartImg.setAttribute("viewBox", "-30 -30 1060 1060");
    //   chartImg.innerHTML = `<defs><clipPath id="a" transform="translate(.67 -1)"><path fill="none" d="M-1 1h997v997H-1z"/></clipPath><clipPath id="b" transform="translate(.67 -1)"><path fill="none" d="M457.08 461h81.72v81.72h-81.72z"/></clipPath></defs><g clip-path="url(#a)" fill="none"><circle cx="498.17" cy="498.5" r="495.71" stroke="#000" stroke-width="1.914"/><circle cx="498.68" cy="501.66" r="411.6" stroke="#1d1d1b" stroke-width="6"/></g><text transform="rotate(82.75 -294.441 291.786)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">P</text><text transform="rotate(80.62 -317.211 304.402)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">l</text><text transform="rotate(79.2 -330.395 310.24)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">u</text><text transform="rotate(77.08 -353.564 322.403)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">t</text><text transform="rotate(75.67 -368.85 330.046)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">o</text><text transform="rotate(74.27 -388.049 342.358)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(72.87 -402.524 348.16)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(71.48 -417.492 354.12)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.33 .94 -.94 .33 54.86 649.23)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(63.86 -500.17 372.802)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(58 -620.584 460.37)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(56 -654.282 471.969)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">N</text><text transform="rotate(53 -712.9 504.725)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(.63 .78 -.78 .63 128.11 785)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">p</text><text transform="rotate(49.5 -798.026 551.801)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">t</text><text transform="matrix(.68 .74 -.74 .68 147.48 808.31)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">u</text><text transform="rotate(45.38 -902.89 602.458)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(.74 .68 -.68 .74 173.36 835.2)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">e</text><text transform="rotate(41.26 -1031.117 668.622)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(37.11 -1173.792 708.942)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(32.23 -1421.222 871.43)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(31.53 -1461.205 894.784)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(30.12 -1543.336 930.76)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(29.42 -1589.145 957.054)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(28.71 -1637.451 984.945)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(27.3 -1737.205 1028.988)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(26.59 -1793.023 1060.792)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(24.46 -1972.469 1132.639)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">U</text><text transform="matrix(.93 .38 -.38 .93 314.75 928.62)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">r</text><text transform="rotate(20.17 -2461.137 1386.407)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">a</text><text transform="rotate(18.02 -2791.023 1548.78)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="rotate(15.86 -3212.659 1763.96)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">u</text><text transform="rotate(14 -3704.492 2036.395)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">s</text><text transform="rotate(10.06 -5223.942 2693.084)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(.64 -86183.023 40016.252)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-6.54 8702.743 -4300.45)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-7.96 7193.837 -3499.215)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">S</text><text transform="rotate(-10.09 5723.174 -2758.323)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">a</text><text transform="rotate(-11.5 5029.144 -2434.936)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">t</text><text transform="rotate(-13.62 4297.223 -2030)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">u</text><text transform="rotate(-15.73 3748.828 -1757.648)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">r</text><text transform="rotate(-17.83 3332.847 -1535.827)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="rotate(-18.52 3209.598 -1517.034)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.94 -.33 .33 .94 648.68 940.73)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-20 3006.45 -1398.215)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-21.3 2819.187 -1294.902)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-21.6 2764.913 -1287.827)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.92 -.4 .4 .92 677.05 930.09)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-24.07 2516.243 -1140.577)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-24.76 2450.39 -1112.024)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-26.14 2332.187 -1042.555)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-26.82 2276.614 -1018.888)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-27.51 2222.773 -995.99)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-28.88 2127.23 -939.182)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-29.57 2080.465 -919.653)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.86 -.5 .5 .86 731.35 903.2)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.85 -.52 .52 .85 737.9 899.43)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-31.8 1932.126 -857.512)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-32.9 1896.207 -828.513)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-33.9 1826.545 -797.62)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-35 1793.2 -773.024)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-35.73 1747.838 -754.527)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-37 1699.085 -726.555)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">J</text><text transform="matrix(.78 -.63 .63 .78 785.24 867.14)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">u</text><text transform="rotate(-41.19 1537.96 -636.3)" font-size="34.454" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">p</text><text transform="rotate(-43.25 1469.963 -605.029)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">i</text><text transform="rotate(-44.62 1429.572 -581.861)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">t</text><text transform="matrix(.69 -.72 .72 .69 828.75 828.73)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">e</text><text transform="rotate(-48 1343.393 -535.73)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">r</text><text transform="rotate(-52.89 1237.039 -450.652)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-57.77 1125.913 -433.198)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-58.47 1112.453 -428.5)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-59.88 1090.023 -412.583)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-60.58 1077.418 -408.118)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-61.29 1064.871 -403.732)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-62.7 1044.47 -388.925)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-63.41 1032.547 -384.826)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-64.12 1020.934 -380.746)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-65.54 1002.202 -366.973)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-66.25 991.109 -363.185)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-68.39 966.738 -340.91)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">M</text><text transform="rotate(-71.26 925.78 -327.881)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">a</text><text transform="rotate(-73.42 900.42 -313.586)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">r</text><text transform="rotate(-74.87 882.532 -306.378)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">s</text><text transform="rotate(-79.21 846.526 -268.814)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-89.36 762.964 -210.75)" font-size="34.455" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.09 -1 1 .09 49.67 476.31)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">A</text><text transform="rotate(-82.74 283.28 197.132)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">s</text><text transform="matrix(.16 -.99 .99 .16 53.53 440.82)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">c</text><text transform="rotate(-79 287.024 180.366)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">e</text><text transform="rotate(-76.96 288.786 169.365)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="rotate(-74.79 289.707 156.378)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">d</text><text transform="rotate(-72.61 290.643 142.616)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">a</text><text transform="rotate(-70.44 292.948 130.046)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="rotate(-68.26 294.105 114.967)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">t</text><text transform="rotate(-63.92 309.259 102.074)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-58.89 301.42 40.368)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-58 301.707 31.615)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-56.04 308.136 20.806)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">D</text><text transform="rotate(-53 311.055 -9.785)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">e</text><text transform="rotate(-51.9 308.482 -29.1)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">c</text><text transform="rotate(-49.67 314.543 -51.062)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">e</text><text transform="rotate(-47.57 318.207 -76.2)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(.7 -.71 .71 .7 171.89 196.86)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">d</text><text transform="matrix(.73 -.69 .69 .73 184.75 183.86)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">a</text><text transform="rotate(-41.31 327.704 -173.39)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(.77 -.63 .63 .77 209.61 161.48)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">t</text><text transform="rotate(-37.86 334.246 -240.814)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-35.12 348.288 -278.422)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-32.38 347.71 -375.918)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-31.01 354.166 -409.466)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.86 -.5 .5 .86 267.82 120.1)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-29.64 357.044 -459.653)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-28.27 364.258 -500.38)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-27.1 365.897 -536.025)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-26.91 368.183 -559.894)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.9 -.43 .43 .9 299.79 102.72)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-24.86 379.112 -645.026)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-24.5 384.297 -678.91)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(-21.44 406.084 -797.04)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">M</text><text transform="rotate(-18.7 424.228 -1013.325)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">o</text><text transform="rotate(-16.64 445.087 -1205.525)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">o</text><text transform="rotate(-14 490.477 -1523.149)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="rotate(-9.72 593.352 -2304.888)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(.83 -3613.685 31195.479)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(8.1 -143.873 3983.777)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(8.1 -155.783 3767.252)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.98 .18 -.18 .98 570.71 62.18)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">S</text><text transform="rotate(12.31 -8.518 2756.395)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">u</text><text transform="rotate(15.21 44.204 2299.997)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="rotate(18.11 80.65 1989.352)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(27.1 154.285 1396.193)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(34.67 161.31 1269.508)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="matrix(.82 .58 -.58 .82 756.83 137.81)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(35.9 159.153 1241.527)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(38.92 177.63 1160.905)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">M</text><text transform="rotate(41.73 179.552 1121.292)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">e</text><text transform="rotate(43.83 184.007 1085.953)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">r</text><text transform="rotate(45.22 185.382 1067.5)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">c</text><text transform="rotate(47.3 190.124 1035.59)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">u</text><text transform="rotate(49.38 192.348 1010.86)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">r</text><text transform="matrix(.63 .77 -.77 .63 843.4 217.29)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">y</text><text transform="rotate(56 211.189 916.538)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(61.04 202.194 899.458)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(62.6 204.986 881.087)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(63.09 204.923 881.504)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(63.9 203.983 874.777)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(65.14 207.408 864.58)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(65.8 208.22 862.56)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(67.88 213.151 839.748)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">V</text><text transform="rotate(69.93 212.948 828.745)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">e</text><text transform="rotate(72 215.186 815.865)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">n</text><text transform="rotate(74.05 215.653 803.585)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">u</text><text transform="rotate(76.1 216.565 793.01)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700">s</text><text transform="rotate(82.37 238.32 738.713)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><text transform="rotate(94.39 249.946 684.089)" font-size="33.112" font-family="WolpePegasus-Bold,Wolpe Pegasus" font-weight="700"></text><g clip-path="url(#a)" fill="none"><path stroke="#1d1d1b" stroke-width="6" d="M498.36 0v497.71"/><path stroke="#000" stroke-width=".334" d="M500.79 499.93V997M498.33 499.93V997M495.93 499.93V997"/></g><path fill="none" stroke="#000" stroke-width=".334" d="M992.5 504.46H4.87M992.5 502H4.87M992.5 499.6H4.87M772.39 84.59L231.22 917.92M770.33 83.25L229.16 916.58M768.32 81.94L227.15 915.28M495.6 503.32L63.01 258.58M496.81 501.19L64.22 256.44M497.99 499.1L65.4 254.35"/><path fill="none" stroke="#1d1d1b" stroke-width="2.229" d="M929.3 745.44l-78.79-44.58"/><path fill="none" stroke="#000" stroke-width=".334" d="M746.29 927.78L244.56 76.02M748.4 926.53L246.68 74.77M750.47 925.31L248.75 73.55"/><path fill="none" stroke="#1d1d1b" stroke-width="6" d="M60.99 729.78l439.44-228.76"/><g clip-path="url(#a)" fill="#1d1d1b"><path d="M660.83 93.42a20.43 20.43 0 10-20.4-20.78 20.4 20.4 0 0020.4 20.78m.07-44.81a24.53 24.53 0 11-24.57 24.54 24.54 24.54 0 0124.57-24.54"/><path d="M660.86 67.55A5.45 5.45 0 11655.4 73a5.46 5.46 0 015.46-5.44M419.23 30.51c8.62 4.47 13.28 11 13.69 19.66-.11 8.72-4.54 15.36-12.93 20.09 7.48.37 16.25-2.72 21.09-10.08a17.69 17.69 0 00-1.81-22.11c-5.1-5.54-11.84-7.94-20-7.56m2.85 42.62a30.87 30.87 0 01-8.11-.84 1.51 1.51 0 01-1.34-1.29 1.41 1.41 0 011.16-1.42 24.79 24.79 0 006.84-3.22A20.09 20.09 0 00428.76 56a16.83 16.83 0 00.79-7.2 18.52 18.52 0 00-6.15-11.89 23.12 23.12 0 00-10-5.36c-.74-.19-1.28-.53-1.39-1.25a1.32 1.32 0 01.95-1.47c1-.28 2-.53 3-.73a26.57 26.57 0 015-.49 28.39 28.39 0 0116.45 4.85 22.15 22.15 0 019.29 12.69 19.24 19.24 0 01.61 6.45 20.83 20.83 0 01-5.79 13 26.36 26.36 0 01-12.23 7.4 29.12 29.12 0 01-7.21 1.14M877.41 255.08a9.74 9.74 0 10-9.74-10.21 9.71 9.71 0 009.72 10.21m1.54 10.25v2.31a1.16 1.16 0 01-1.16 1.16h-.87a1 1 0 01-1-1v-2.45a.07.07 0 00-.08-.07h-2.43a1.08 1.08 0 01-1.08-1.08v-.74a1.24 1.24 0 011.24-1.24h2.24a.08.08 0 00.08-.08v-4a.07.07 0 00-.07-.07c-5.61-1.06-9.3-4.23-10.85-9.78-1.19-6.37 1.16-11.1 6.58-14.41a.08.08 0 000-.13 11 11 0 01-4.86-7.18 1 1 0 01.88-1.18l.76-.07a1.25 1.25 0 011.41.94 7.83 7.83 0 002.68 4.32 8 8 0 0012.85-4.22 1.39 1.39 0 011.48-1h.39a1.24 1.24 0 011.14 1.52 11 11 0 01-4.87 6.91.08.08 0 000 .13c5.42 3.4 7.74 8.17 6.43 14.58-1.61 5.42-5.26 8.52-10.79 9.55a.09.09 0 00-.06.08v3.94a.08.08 0 00.08.08h2.07a1.37 1.37 0 011.37 1.37v.3a1.39 1.39 0 01-1.39 1.39h-2.08a.08.08 0 00-.07.08M965.12 439.82a13.11 13.11 0 10-13.27 13.06 13.08 13.08 0 0013.27-13.06m-21 27.83V464a.46.46 0 01.46-.45h4.87a.46.46 0 00.45-.46v-4.92a1.41 1.41 0 00-1.14-1.39 17.29 17.29 0 116.23.05 1.12 1.12 0 00-.91 1.1V463a.45.45 0 00.45.45h4.88a.46.46 0 01.46.45v3.69h-5.41c-.3 0-.41.08-.4.4v5.8c0 .55-4.13.5-4.13 0v-1-4.72c0-.36-.12-.44-.45-.43M944.23 582.59a13.41 13.41 0 0013.44-13.66 13.46 13.46 0 10-13.45 13.66m19.86-36.31h-6.37v-4.18h13.56v13.54h-4.16v-6.24l-8.92 8.91c.24.35.54.75.81 1.17a16.85 16.85 0 012.79 7.79 17.35 17.35 0 01-4.25 13.47 16.85 16.85 0 01-10.1 5.77 17.24 17.24 0 01-14.69-4 16.88 16.88 0 01-5.82-9.86 17.24 17.24 0 013.37-14.4 17 17 0 0110.11-6.38 17.32 17.32 0 0114.42 3.1c.19.14.32.25.54 0 2.82-2.85 5.66-5.67 8.49-8.51l.23-.25M847.83 783.67v-1.06a1.22 1.22 0 011.25-1.19h.63a11.19 11.19 0 006.57-2.37 16.78 16.78 0 005.79-8.66 14.65 14.65 0 00.65-5.8 7.23 7.23 0 00-2.05-4.66 6 6 0 00-4.31-1.69 7.07 7.07 0 00-6.4 4.92 5.19 5.19 0 00.19 3 1.94 1.94 0 00.41.66 2 2 0 01.56 1.46v1a1 1 0 01-1.33.94c-2.24-.89-3.14-3-3.28-5.55a8.49 8.49 0 011.8-5.61 10.28 10.28 0 016.32-4 9.17 9.17 0 017.77 1.89 10 10 0 013.56 6.31 15.06 15.06 0 01.18 4 20.73 20.73 0 01-1.93 7 20.43 20.43 0 01-4 5.85c-.41.41-.84.79-1.29 1.19a.15.15 0 00.09.26l10.58.18a.14.14 0 00.15-.14l.42-24a1.81 1.81 0 011.84-1.78 1.58 1.58 0 011.55 1.61l-.42 24.26a.15.15 0 00.14.15l3.32.06a1 1 0 01.93 1 2.42 2.42 0 01-2.46 2.38h-1.84a.15.15 0 00-.15.15l-.11 6.2a1.46 1.46 0 01-1.49 1.43h-.56a1.35 1.35 0 01-1.33-1.37l.11-6.3a.15.15 0 00-.14-.15l-20.53-.36a1.15 1.15 0 01-1.13-1.17M668.83 933.93l-2.8.05a.42.42 0 01-.43-.41l-.41-23.83a.42.42 0 00-.43-.41h-2.84a.43.43 0 01-.43-.41v-2.41a.43.43 0 01.41-.43h2.83a.41.41 0 00.41-.42v-2.7a.43.43 0 01.41-.43h2.41a.41.41 0 01.42.41v2.67a.42.42 0 00.43.41l5.24-.09a.41.41 0 01.42.41v2.44a.41.41 0 01-.41.42l-5.22.09a.41.41 0 00-.4.43l.07 4.27a.42.42 0 00.68.32 11.73 11.73 0 012.68-1.6 11.26 11.26 0 013.58-1 7.62 7.62 0 015.3 1.13 8.77 8.77 0 013.26 4.26 12.74 12.74 0 01.89 5.56 17.87 17.87 0 01-4.75 11.34 9.75 9.75 0 00-2.27 3.59 4 4 0 00-.21 1.91 1.84 1.84 0 001.54 1.31.71.71 0 00.42-.14c.43-.34.84-.71 1.25-1.08a4.91 4.91 0 00.43-.48l1.46 1.41a1.25 1.25 0 010 1.78 5.8 5.8 0 01-2.86 1.72 4.39 4.39 0 01-3.42-.89 4.69 4.69 0 01-2.11-4.48 10.43 10.43 0 012.72-6.12 20.6 20.6 0 002.61-3.4 16 16 0 001.86-5.75 10.07 10.07 0 00-1.15-6.28 4.09 4.09 0 00-3.16-2.24 7.92 7.92 0 00-3.44.46 9.37 9.37 0 00-4.83 4.2 2.8 2.8 0 00-.4 1.62q.13 6.25.23 12.5v.31M427.41 967.28a3.8 3.8 0 10-.16-7.6 3.8 3.8 0 00.16 7.6m-2.26-20.87l-3.79.07a.17.17 0 00-.17.14 12.32 12.32 0 01-6.23 9 12 12 0 01-5 1.53.77.77 0 01-.84-.75v-2.29a.75.75 0 01.66-.75 8.59 8.59 0 007.71-9.18 8.62 8.62 0 00-7.93-7.91.84.84 0 01-.76-.81v-2.26a.71.71 0 01.75-.72 12.12 12.12 0 017.32 2.84 12.24 12.24 0 014.28 7.24.19.19 0 00.18.15l3.62-.07a.17.17 0 00.18-.18l-.14-8.34a1 1 0 011-1h1.94a.88.88 0 01.9.87l.15 8.43a.18.18 0 00.18.18l3.63-.07a.16.16 0 00.17-.15 12.34 12.34 0 015.5-8.52 12.17 12.17 0 014.22-1.75 2 2 0 012.33 1.89 1.83 1.83 0 01-1.49 1.83 8.39 8.39 0 00-5.63 4 8.11 8.11 0 00-1.21 5.26 8.59 8.59 0 007 7.61 2 2 0 011.66 1.9v.23a1.64 1.64 0 01-1.84 1.67 12 12 0 01-6.22-2.74 12.24 12.24 0 01-4.27-7.23.18.18 0 00-.18-.15l-3.81.07v.3l.15 9.16c0 .25.09.32.31.39a7.3 7.3 0 015.43 6.09 7.61 7.61 0 01-15 2.58 7.93 7.93 0 015.56-8.71M221.25 871.45c-1.22-.16-2.4-.25-3.56-.46a9.91 9.91 0 01-4.9-2.27 11 11 0 01-3.18-5.35 26.06 26.06 0 01-.91-7.66c0-2.08.17-4.16.27-6.24 0-.35 0-.71.09-1.14l-1.78 1.48a.68.68 0 01-1-.13l-1.12-1.52a.8.8 0 01.12-1.08l5.33-4.46a.91.91 0 011.34.18l4.16 5.86a.73.73 0 01-.13 1l-1.48 1.19a.71.71 0 01-1-.14l-1.24-1.71c-.07.91-.17 1.7-.19 2.5-.06 1.87-.14 3.75-.1 5.62a18.52 18.52 0 001.07 6.21 6.21 6.21 0 004.67 4.15c1.07.24 2.19.3 3.29.44h.19l-.27-15.17-1.37 1.4a.93.93 0 01-1.34 0l-1.15-1.15a.84.84 0 010-1.13l4.71-5.4a.74.74 0 011.12 0l5 5.17a.75.75 0 010 1l-1.34 1.36a.66.66 0 01-1 0l-1.24-1.35-.12.05.27 15.13c.53-.05 1.06-.1 1.59-.17a10.69 10.69 0 003.08-.85 6.47 6.47 0 003.46-4.37 16.13 16.13 0 00.65-4.42c0-1.74 0-3.49-.1-5.23a37.1 37.1 0 00-.45-3.84c-.41.6-.81 1.2-1.23 1.8a.68.68 0 01-1 .17l-1.52-1.18a.73.73 0 01-.15-1l4.2-6.19a.61.61 0 01.9-.15l5.78 4.6a.7.7 0 01.13 1l-1.13 1.65a.61.61 0 01-.9.14l-1.75-1.39c.12 1 .13 1.05.32 3.14.16 1.69.26 3.38.26 5.08a24.6 24.6 0 01-.86 6.94 9.75 9.75 0 01-7 7.1 18.1 18.1 0 01-3.93.63h-.24c0 1.63.06 3.25.09 4.89l5.25-.09a.76.76 0 01.74.76v2a.7.7 0 01-.66.73l-5.32.09v.48c0 1.92.06 3.62.1 5.54a.61.61 0 01-.54.6h-2.14a.64.64 0 01-.58-.62c0-1.93-.06-3.61-.1-5.55v-.41l-5.12.09a.92.92 0 01-.91-.95v-1.53a.92.92 0 01.86-1l5.11-.09zM80.17 676.43h-6.7c-1.2-.06-1.2-.06-1.17 1.18v8h-3.51c-.56 0-.56 0-.56-.54v-8.67h-7.88a1.18 1.18 0 01-1.17-1.18v-1.67a1.17 1.17 0 011.17-1.18h7.85c.09 0 .06-.35.06-.47v-7.82c0-.35-.08-.43-.43-.48a18.28 18.28 0 01-10.06-4.71 18.56 18.56 0 01-5.84-10.42 10.53 10.53 0 01-.3-2.76c0-.84.38-.74.4-.83h2.58a1.05 1.05 0 011 1 14.65 14.65 0 006 11 14.12 14.12 0 009.73 2.83A14.83 14.83 0 0084.92 646a1.18 1.18 0 011.17-1.09h1.65a1.18 1.18 0 011.17 1.27 18.83 18.83 0 01-15.64 17.38 1.16 1.16 0 00-.94 1.15v6.47c0 1.3 0 1.18 1.17 1.18h6.67a1.18 1.18 0 011.17 1.19v1.69a1.18 1.18 0 01-1.17 1.19"/><path d="M70.35 652.61a7.79 7.79 0 10-7.68-7.79 7.75 7.75 0 007.69 7.79m-11.74-7.76a11.76 11.76 0 1123.51.06 11.76 11.76 0 11-23.51-.06M82.41 327.11v-31a.69.69 0 00-1.19-.51l-12.08 12.62a.68.68 0 01-1 0l-.88-.79a.75.75 0 010-1.06l15.88-16.76a.67.67 0 011 0l15.91 16.78a.76.76 0 010 1.07l-.84.75a.68.68 0 01-1 0l-12-12.63a.69.69 0 00-1.19.51v31a.71.71 0 01-.69.73h-1.22a.72.72 0 01-.7-.73M235.86 108v31a.69.69 0 001.19.51l12.08-12.61a.69.69 0 01.95 0l.88.79a.76.76 0 010 1.07l-15.88 16.75a.67.67 0 01-1 0l-15.91-16.78a.75.75 0 010-1.06l.84-.76a.69.69 0 01.95 0c4 4.21 8 8.41 12.05 12.63a.69.69 0 001.19-.51V108a.71.71 0 01.69-.73h1.19a.71.71 0 01.69.73"/></g><path fill="none" stroke="#1d1d1b" stroke-width="6" d="M926.55 744.29L495.96 500.67"/><path fill="none" stroke="#000" stroke-width=".334" d="M498.73 500.03l438.84-228.44M499.86 502.21L938.7 273.77M500.97 504.34L939.81 275.9"/><g clip-path="url(#b)"><path d="M498.67 539a38.18 38.18 0 10-38.18-38.18A38.17 38.17 0 00498.67 539" fill="#fff"/><circle cx="498.61" cy="500.86" r="38.17" fill="none" stroke="#1d1d1b" stroke-width="2"/></g><path d="M498.84 501V4.91c272.01 0 495.83 223.92 495.83 496.09a496.21 496.21 0 01-64.41 244.5z" fill="#0ff" opacity=".4"/><path d="M499.61 498.81L933.3 744.6c-134.84 237.92-441.57 322.74-679.48 187.91a498.56 498.56 0 01-195.1-201.06z" fill="#f0f" opacity=".4"/><path d="M498.5 501.78L54.81 729A498.55 498.55 0 010 501.78C0 228.31 225 3.28 498.5 3.28z" fill="#f15a24" opacity=".4"/>`;

    //   chartImg.append(...symbolsToPopulate);
    //   // this.image = chartImg;
    //   return chartImg;
    // }

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
