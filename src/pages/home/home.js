// import React from "react";
// import Header from "./../../components/Header/Header";

// function Home() {
//   return (
//     <>
//       <div className="App">
//         <Header pageName="Homepage" />
//         <main>
//         <h1>Home Page</h1>
//         </main>
//       </div>
//     </>
//   );
// }

// export default Home;

import React, { useContext } from "react";
import NavIcon from "./../../components/NavIcon/NavIcon";
import PlayerOrb from "./../../components/PlayerOrb/PlayerOrb";
import { makeStyles } from "@material-ui/core/styles";

import { PlayersContext } from "./../../contexts/players.context";

const useStyles = makeStyles({
  listGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    // gridAutoRows: '',
    justifyItems: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    listStyleType: "none",
    padding: 0,
    gap: "1rem",
    width: "100%",
  },

  listGroupItem: {
    // width: 'calc(20% - calc(1rem/5))',
  },

  homeTitle: {
    fontSize: "15rem",
    position: "absolute",
    color: "hsla(313, 96%, 98%, 0.4)",
    margin: "auto",
  },
});

function Home() {
  const classes = useStyles();
  const { players } = useContext(PlayersContext);
  // debugger;
  return (
    <>
      <div className="App">
        <NavIcon pageName="Homepage" />
        <main>
          <h1 className={classes.homeTitle}>ASTROLOGY BINGO</h1>
          <div className="playerOrbContainer">
            <ul className={classes.listGroup}>
              {players?.map((player) => (
                // console.log("player", player._id),
                <li key={player._id} className={classes.listGroupItem}>
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

export default Home;
