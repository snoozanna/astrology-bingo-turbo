import React, { useContext } from "react";
import {
  Toolbar,
  Typography,
  // AppBar,
  Button,
} from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "../NavDrawer/NavDrawer";
import { makeStyles } from "@material-ui/core/styles";

import { MenuContext } from "../../contexts/menu.context";
import { AuthContext } from "./../../contexts/auth.context";

const useStyles = makeStyles({
  HeaderContainer: {
    flexGrow: 1,
    backgroundColor: "rgb(213, 123, 214)",
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
        <Typography
          className={classes.title}
          variant="h6"
          component="h1"
          noWrap
        >
          {pageName}
        </Typography>
        <div
          className={classes.user}
          style={{ position: "absolute", right: "15px" }}
        >
          {user && (
            <>
              <span style={{ marginRight: "15px" }}>Hello Fig</span>
              <Button variant="outlined" color="secondary" onClick={logout}>
                Log out
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </>
  );
}
