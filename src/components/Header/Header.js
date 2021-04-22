import React, { useContext } from "react";
import "./Header.scss";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./../NavDrawer/NavDrawer";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

import { MenuContext } from "./../../contexts/menu.context";

const useStyles = makeStyles({
  HeaderContainer: {
    flexGrow: 1,
    marginBlockEnd: 40,
    backgroundColor: "rgb(213, 123, 214)",

    // display: "none",
  },

  menuButton: {
    marginRight: -50, // Because it off-centers the title (logically -64px)
  },

  title: {
    flexGrow: 1,
  },
});

export default function Header({ pageName }) {
  const { toggle } = useContext(MenuContext);
  const classes = useStyles();
  return (
    <>
      <NavDrawer />
      <AppBar position="static" className={classes.HeaderContainer}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <h1 className={classes.title} variant="h6" noWrap>
            {pageName}
          </h1>
        </Toolbar>
      </AppBar>
    </>
  );
}
