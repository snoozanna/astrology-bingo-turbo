import React from "react";

const AriesWord = ({ transform, x, y, className, font, textAnchor }) => {
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
          textAnchor={textAnchor}
        >
          Ari
        </text>
      </svg>
    </>
  );
};

export default AriesWord;
