import React from "react";

const CancerWord = ({ transform, x, y, className, font }) => {
  console.log("rotation", transform);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <text
          font-size={font}
          font-family="WolpePegasus-Regular"
          transform={transform}
          x={x}
          y={y}
          className={className}
        >
          Can
        </text>
      </svg>
    </>
  );
};

export default CancerWord;
