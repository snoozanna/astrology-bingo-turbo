import React from "react";
import "./PreviousCall.scss";

const PreviousCall = ({ planet, sign }) => {
  if (!planet && !sign) {
    return null;
  }
  return (
    <div className="prevCallContainer">
       <h3 className="prevCallItem">
            <span className="planet">{planet}</span>
            <span className="sign"> in {sign}</span>
          </h3>
      </div>

  );
};

export default PreviousCall;
