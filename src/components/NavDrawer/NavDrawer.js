import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { MenuContext } from "./../../contexts/menu.context";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const NavDrawer = () => {
  const classes = useStyles();
  const { isOpen, toggle } = useContext(MenuContext);
  const handleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    toggle();
  };
  return (
    <Drawer anchor="left" open={isOpen} onClose={handleDrawer()}>
      <div
        className={classes.list}
        role="presentation"
        onClick={handleDrawer()}
        onKeyDown={handleDrawer()}
      >
        <List>
          {[
            { text: "Home", to: "/" },
            { text: "Login", to: "/login" },
            { text: "Add Birth Chart", to: "/add-birth-chart" },
            { text: "My Birth Chart", to: "/my-birth-chart" },
            { text: "Admin", to: "/admin" },
            { text: "Game", to: "/public-display" },
            { text: "Grid", to: "/public-grid" },
            { text: "In play", to: "/in-play" },
          ].map(({ text, to }) => (
            <ListItem button component={NavLink} to={to} key={text}>
              <ListItemText>{text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavDrawer;
