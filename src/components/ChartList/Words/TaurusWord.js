import React from "react";

const TaurusWord = ({ transform, x, y, className, font }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <text
          fontSize={font}
          fontFamily="WolpePegasus-Regular"
          transform={transform}
          x={x}
          y={y}
          className={className}
        >
          Tau
        </text>
      </svg>
    </>
  );
};
export default TaurusWord;
