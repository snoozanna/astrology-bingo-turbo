import React from "react";
import "./PreviousCall.scss";

const PreviousCall = ({ planet, sign }) => {
  if (!planet && !sign) {
    return null;
  }
  return (
    <div className="prevCallContainer">
      <h2 className="prevCallTitle">PREVIOUS CALL</h2>
      <div className="prevCallItem">
        <h3 className="call">
          <span className="planet">{planet}</span> <span>in</span>{" "}
          <span className="sign">{sign}</span>
        </h3>
      </div>
    </div>
  );
};

export default PreviousCall;
