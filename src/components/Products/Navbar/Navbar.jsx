import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
            <Typography variant="h6" className={classes.title} color="inherit">
            <img src={} alt="Senedo Ridge" height="25px" className={classes.image} />
            Senedo Ridge Vineyard

            </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
