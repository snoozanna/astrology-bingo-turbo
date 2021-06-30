import React from "react";
import "./CurrentCall.scss";

const CurrentCall = ({ planet, sign }) => {
  if (!planet && !sign) {
    return (<p>Awaiting first call...</p>);
  }
  return (
    <>
      <div className="callContainer">
          <h3 className="call">
            <span className="planet">{planet}</span>
            <span className="sign"> in {sign}</span>
          </h3>
      </div>
      {/* </div> */}
    </>
  );
};

export default CurrentCall;
