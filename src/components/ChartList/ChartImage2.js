import React, { useContext, useState, useEffect, useRef } from "react";
import SignSymbol from "./SignSymbol";
import { BirthChartContext } from "./../../contexts/birthchart.context";
import TemplateChartComp from "./TemplateChart";

// const iconsToShow = (data, BirthChart) => {
//   console.log("data", data);
//   Object.entries(data.data).map(([key, value]) => {
//     if (BirthChart.planets.includes(key)) {
//       const { icon } = value;
//       console.log("iconzzz", icon);
//       return { icon };
//     } else {
//       return null;
//     }
//   });
// };

// const ChartImageTwo = (data) => {
//   const { BirthChart } = useContext(BirthChartContext);
//   const [icons, setIcons] = useState("state");
//   const signArr = BirthChart.signArr(data);
//   useEffect(() => {
//     setIcons(signArr);
//   }, [data]);
//   // console.log("icons", icons);

//   return (
//     <>
//       <p>Template chart inline in the parent component</p>
//       {icons}
//       <svg
//         style={{
//           border: "2px solid gold",
//         }}
//       />
//     </>
//   );
// };

// export default ChartImageTwo;

///using a ref

export default function ChartImageTwo() {
  const [sign, setSign] = useState("aries");
  return (
    <div className="App">
      <button
        onClick={() =>
          setSign((prevName) => (prevName === "aries" ? "virgo" : "aries"))
        }
      >
        Change Icon
      </button>
      <Icon sign={sign} fill="gray" />
      <Icon sign="cancer" fill="gray" width="300" />
      <Icon sign="gemini" fill="darkblue" height="100" />
      <TemplateChartComp height="500" sign={sign} />;
    </div>
  );
}

const Icon = ({ sign, ...rest }) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("usingeffect");
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`./../../assets/symbols/${sign}.svg`)
        ).ReactComponent;
      } catch (err) {
        // Your own error handling logic, throwing error for the sake of
        // simplicity
        console.log(err);
      } finally {
        console.log("finished useEffetc");
        setLoading(false);
      }
    };
    importIcon();
  }, [sign]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};
