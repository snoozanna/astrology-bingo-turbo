import React, { useContext } from "react";
import "./NavIcon.scss";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "../NavDrawer/NavDrawer";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

import { MenuContext } from "../../contexts/menu.context";

const useStyles = makeStyles({
  HeaderContainer: {
    flexGrow: 1,
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

export default function NavIcon({ pageName }) {
  const { toggle } = useContext(MenuContext);
  const classes = useStyles();
  return (
    <>
      <NavDrawer />
      {/* <AppBar position="static" className={classes.HeaderContainer}> */}
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
      </Toolbar>
      {/* </AppBar> */}
    </>
  );
}
