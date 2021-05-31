import React from "react";
import "./CurrentCall.scss";

const CurrentCall = ({ planet, sign }) => {
  if (!planet && !sign) {
    return (<p>Awaiting first call...</p>);
  }
  return (
    <>
      <div className="callContainer">
        <div className="callItem">
          {/* <h2 className="callTitle">CURRENT CALL</h2> */}
          {/* <div className="callContainer"> */}
          <h3 className="call">
            <span className="planet">{planet}</span>
            <span>in</span>{" "}
            <span className="sign">{sign}</span>
          </h3>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default CurrentCall;
