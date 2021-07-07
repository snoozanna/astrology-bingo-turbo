import React, { useContext } from "react";
import NavIcon from "../../components/NavIcon/NavIcon";
import PlayerOrb from "../../components/PlayerOrb/PlayerOrb";
import "./landing.scss";
// import logo from "../../assets/img/logo/ab-logo-white.png";

import { PlayersContext } from "../../contexts/players.context";

function Landing() {
  // const classes = useStyles();
  const { players } = useContext(PlayersContext);

  return (
    <>
      <div className="App landing">
        <NavIcon pageName="Landing Page" />
        <main className="landingMain">
          <div className="playerOrbContainer">
            <ul className="orbGroup">
              {players?.map((player) => (
                <li key={player._id} className="orbGroupItem">
                  <PlayerOrb player={player} />
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default Landing;
