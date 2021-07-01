import React from "react";
import "./PreviousCall.scss";

const PreviousCall = ({ planet, sign }) => {
  if (!planet && !sign) {
    return null;
  }
  return (
    <div className="prevCallContainer">
      <h3 className="prevCallItem">
        <span className="planet">{planet} in </span>
        <span className="sign"> {sign}</span>
      </h3>
    </div>
  );
};

export default PreviousCall;
