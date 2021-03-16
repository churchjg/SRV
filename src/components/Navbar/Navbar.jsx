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
import LockIcon from "@material-ui/icons/Lock";

///can use Link inside of components so that buttons/headers/images all link to a a new route example: <IconButton component={Link} to="/cart">
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo/logo.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit">
            <img
              src={logo}
              alt="Senedo Ridge"
              height="25px"
              className={classes.image}
            />
            Senedo Ridge Vineyard
          </Typography>
          <div className={classes.grow} />

          {/* only show cart if on home route, will have to change to shop page */}
          {location.pathname === "/products" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
          {location.pathname === "/cart" && (
            <div className={classes.button}>
              
              <IconButton color="inherit">
                <Typography variant="subtitle1" color="textPrimary" className={classes.secure}>Secure Checkout</Typography>
                <LockIcon className={classes.secureButton} />
                
                
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
