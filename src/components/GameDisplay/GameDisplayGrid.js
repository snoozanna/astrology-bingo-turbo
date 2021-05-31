import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { signs, planets } from "./../../constants";
import { GameContext } from "./../../contexts/game.context";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontVariantCaps: "all-petite-caps",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  head: {
    backgroundColor: "hsl(258.75,53.33%,94.12%)",
    textAlign: "center",
  },
  calledItem: {
    textAlign: "center",
    backgroundColor: "hsla(86, 96%, 78%, 1.0);",
  },
  callTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  callMain: {
    fontSize: "1.5rem",
  },
});

const GameDisplayGrid = () => {
  const classes = useStyles();
  const { alreadyCalled } = useContext(GameContext);

  const checkCall = (planet, sign) => {
    // debugger;
    // console.log("alreadyCalled", alreadyCalled);
    if (alreadyCalled != null && Array.isArray(alreadyCalled)) {
      for (const oneCall of alreadyCalled) {
        // return oneCall.planet === planet && oneCall.sign === sign;
        if (oneCall.planet === planet && oneCall.sign === sign) {
          console.log("this has been called", planet, sign);
          return true;
        }
      }
    }
  };

  ///TODO

  const Text = ({ alreadyCalled, myPlanet, mySign }) => {
    for (const [key, value] of Object.entries(alreadyCalled)) {
      const { planet, sign } = value;
      if (planet === myPlanet && sign === mySign) {
        return (
          <p className={classes.callTextContainer}>
            <span className={classes.callMain}>{planet}</span>
            <span>in</span>
            <span className={classes.callMain}>{sign}</span>
          </p>
        );
      }
    }

    return Text;
  };

  const ControlledCell = ({
    alreadyCalled,
    myPlanet,
    mySign,
    sign,
    planet,
  }) => {
    return (
      <TableCell
        sign={sign}
        planet={planet}
        className={checkCall(planet, sign) ? classes.calledItem : ""}
      >
        <Text alreadyCalled={alreadyCalled} mySign={sign} myPlanet={planet} />
      </TableCell>
    );
  };

  // useEffect(() => {
  //   console.log("hello");
  // }, [Text]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell> </TableCell>
            {planets.map((planet) => (
              <TableCell key={planet} className={classes.head}>
                {planet}{" "}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {signs.map((sign) => (
            <TableRow key={sign}>
              <TableCell
                component="th"
                scope="row"
                className={classes.head}
                sign={sign}
              >
                {sign}
              </TableCell>
              {planets.map((planet) => (
                // <TableCell sign={sign} planet={planet}>
                //   <Text
                //     alreadyCalled={alreadyCalled}
                //     mySign={sign}
                //     myPlanet={planet}
                //   />
                // </TableCell>
                <ControlledCell
                  alreadyCalled={alreadyCalled}
                  mySign={sign}
                  myPlanet={planet}
                  sign={sign}
                  planet={planet}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameDisplayGrid;
