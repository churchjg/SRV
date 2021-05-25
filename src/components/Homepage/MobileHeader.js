import * as React from "react";
import { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  
hamburger: {
marginTop: "12px",
marginBottom: "-30px",
height: "50px"
},

  list: {
    width: 250,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
    paddngTop: "800px",
    
  },
  mobileMenu: {
    fontSize: "large",
    align: "left",
    
  }
});

const MobileHeader = ({ navLinks }) => {
  const [state, setState] = useState({ left: false });
  const classes = useStyles();
  

  const toggleDrawer = (link, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ [link]: open });
  };

  const sideDrawerList = (link) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(link, false)}
      onKeyDown={toggleDrawer(link, false)}>
      <List component="nav">
      {navLinks.map((section) => (
          <a
            href={section.url}
            key={section.title}
            className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={section.title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
      className={classes.hamburger}
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("left", true)}>
        <Menu className={classes.mobileMenu} />
      </IconButton>
      <Drawer
        anchor="left"
        open={state.left}
        onOpen={toggleDrawer("left", true)}
        onClose={toggleDrawer("left", false)}>
        {sideDrawerList("left")}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileHeader;
