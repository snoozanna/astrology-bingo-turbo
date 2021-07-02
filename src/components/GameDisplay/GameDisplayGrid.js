import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./GameDisplayGrid.scss";
import { signs, planets } from "./../../constants";
import { GameContext } from "./../../contexts/game.context";

import Text from "./Text";
import ControlledCell from "./ControlledCell";

const useStyles = makeStyles({
  table: {
    maxHeight: "90vh",
    fontVariantCaps: "all-petite-caps",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  head: {
    backgroundColor: "#FF9472",
    textAlign: "center",
    border: "1px solid #700FB5",
    fontSize: "1.5rem",
    color: "#fff",
    fontWeight: "bold",
    padding: "4px",
  },
});

const GameDisplayGrid = () => {
  const classes = useStyles();
  const { picks } = useContext(GameContext);
  const pickedIds = picks.map((pick) => pick._id);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell />
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
              {planets.map((planet) => {
                const isPicked = pickedIds.includes(
                  `${planet}-${sign}`.toLowerCase(),
                );
                return (
                  <ControlledCell key={`${planet}-${sign}`} isPicked={isPicked}>
                    <Text sign={sign} planet={planet} isPicked={isPicked} />
                  </ControlledCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GameDisplayGrid;
