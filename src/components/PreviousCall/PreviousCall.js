import React, { useContext } from "react";
import "./PreviousCall.scss";
import { GameContext } from "../../contexts/game.context";

const PreviousCall = ({ planet, sign }) => {
  return (
    <>
      <div className="prevCallContainer">
        <h2 className="prevCallTitle">PREVIOUS CALL</h2>
        <div className="prevCallItem">
          <h3 className="call">
            <span className="planet">{planet}</span> <span>in</span>{" "}
            <span className="sign">{sign}</span>
          </h3>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default PreviousCall;
