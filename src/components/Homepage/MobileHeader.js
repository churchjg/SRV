import * as React from "react";
import { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Grid
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  hamburger: {
    // marginTop: "7px",
    // marginBottom: "-70px",
    height: "50px",
    marginBottom: "-52px",
    zIndex: "2",
    color: "white"
    
  },

  list: {
    width: 400,
    [theme.breakpoints.down("md")]: {
      width: 400,
    },
    [theme.breakpoints.down("sm")]: {
      
      width: 250,
    },
    
    
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `black`,
    
    fontSize: "300px",
  },
  mobileMenu: {
    fontSize: "30px",
    position: "absolute",
    right: 25,
    top: 10,
    
  },
}))

const MobileHeader = ({ navLinks }) => {
  const [state, setState] = useState({ right: false });
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
      <Grid container justify="flex-end" alignItems="flex-end" >
      <IconButton
        className={classes.hamburger}
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}>
        <Menu className={classes.mobileMenu} />
      </IconButton>
      </Grid>
      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", true)}
        onClose={toggleDrawer("right", false)}>
        {sideDrawerList("right")}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileHeader;
