import React, { useContext } from "react";
import NavIcon from "../../components/NavIcon/NavIcon";
import PlayerOrb from "../../components/PlayerOrb/PlayerOrb";
// import { makeStyles } from "@material-ui/core/styles";
import "./landing.scss"
import logo from "../../assets/img/logo/ab-logo-white.png";

import { PlayersContext } from "../../contexts/players.context";

// const useStyles = makeStyles({
//   listGroup: {
//     display: "grid",
//     gridTemplateColumns: "repeat(5, 1fr)",
//     // gridAutoRows: '',
//     justifyItems: "center",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     listStyleType: "none",
//     padding: 0,
//     gap: "1rem",
//     width: "100%",
//   },

//   listGroupItem: {
//     // width: 'calc(20% - calc(1rem/5))',
//     display: "flex",
//   },

//   logoLanding: {
//     position: "absolute",
//   },
// });

function Landing() {
  // const classes = useStyles();
  const { players } = useContext(PlayersContext);
  // debugger;
  return (
    <>
      <div className="App landing">
        <NavIcon pageName="Landing Page" />
        <main className="landingMain">
          {/* <h1 className={classes.landingTitle}>ASTROLOGY BINGO</h1> */}
          <img src={logo} alt="Astrology Bingo Logo" className="logoLanding" />
          <div className="playerOrbContainer">
            <ul className="orbGroup">
              {players?.map((player) => (
                // console.log("player", player._id),
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
