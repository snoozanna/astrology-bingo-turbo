import React, { useContext } from "react";
import "./Header.scss";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./../NavDrawer/NavDrawer";
import AppBar from "@material-ui/core/AppBar";

import { MenuContext } from "./../../contexts/menu.context";



export default function Header({ pageName }) {
  const { toggle } = useContext(MenuContext);
  return (
 <>
      <NavDrawer />
      <AppBar position="static" className="Header--container">
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="open drawer"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
          <h1 className="title" variant="h6" noWrap>
            {pageName}
          </h1>
        </Toolbar>
      </AppBar>
</>
  );
}
