import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { BirthChartContext } from "./../../../contexts/birthchart.context";
import { GameContext } from "./../../../contexts/game.context";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  head: {
    backgroundColor: "hsl(258.75,53.33%,94.12%)",
  },
});

const GameDisplayGrid = () => {
  const classes = useStyles();
  const { BirthChart } = useContext(BirthChartContext);
  const { alreadyCalled } = useContext(GameContext);
  // alreadyCalled.map(([key, value]) => {
  //   console.log(key, value);
  //   return;
  // });
  console.log("alreadyCalled", alreadyCalled);
  const Text = ({ alreadyCalled, myPlanet, mySign }) => {
    for (const [key, value] of Object.entries(alreadyCalled)) {
      const { planet, sign } = value;
      if (planet === myPlanet && sign === mySign) {
        return (
          <p>
            {planet} in {sign}
          </p>
        );
      }
    }

    return Text;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell> </TableCell>
            {BirthChart.planets.map((planet) => (
              <TableCell key={planet}>{planet} </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {BirthChart.signs.map((sign) => (
            <TableRow key={sign}>
              <TableCell
                component="th"
                scope="row"
                className={classes.head}
                sign={sign}
              >
                {sign}
              </TableCell>
              {BirthChart.planets.map((planet) => (
                <TableCell sign={sign} planet={planet}>
                  <Text
                    alreadyCalled={alreadyCalled}
                    mySign={sign}
                    myPlanet={planet}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameDisplayGrid;
