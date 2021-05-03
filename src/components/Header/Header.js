import React, { useContext } from "react";
import "./Header.scss";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./../NavDrawer/NavDrawer";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { MenuContext } from "./../../contexts/menu.context";
import { AuthContext } from "./../../contexts/auth.context";

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

export default function Header({ pageName }) {
  const { toggle } = useContext(MenuContext);
  const { user, logout } = useContext(AuthContext);
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
          <div
            className={classes.user}
            style={{ position: "absolute", right: "15px" }}
          >
            {user && (
              <>
                <span style={{ marginRight: "15px" }}>Hello Admin</span>
                <Button variant="outlined" color="secondary" onClick={logout}>
                  Log out
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
