import React, { useContext } from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction.js";
import { PlayersContext } from "./../../contexts/players.context";

const Result = (props) => {
  const { state, actions } = useStateMachine({ updateAction });
  const { addPlayer } = useContext(PlayersContext);

  const onSubmit = async (data) => {
    console.log("add player to game", data);
    addPlayer(data);
    actions.updateAction({
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      latitude: "",
      longitude: "",
      datetime: "",
      utcoffset: "",
    });
  };

  return (
    <>
      <h2>Does this all look okay?</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => console.log("state from result", state)}>
        Start form again
      </button>

      <button onClick={() => onSubmit(state.data)}> Add me to the game</button>
    </>
  );
};

export default Result;
