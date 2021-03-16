import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { Route, Redirect, Switch } from "react-router-dom";
import "./contact.css"
import { Icon, InlineIcon } from '@iconify/react';
import contactCard24Regular from '@iconify-icons/fluent/contact-card-24-regular';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Senedo Ridge Vineyard—
      </Link>
      {""}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  headbackground: {
    backgroundColor: "#212529",
    align: "center",
  },
  header: {
    color: "white",
    fontStyle: "italic",
    fontFamily: "Belluccia",
    fontSize: "25px",
    align: "center",
    marginLeft: "1%"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default">
        <Toolbar className={classes.headbackground}>
        <Icon icon={contactCard24Regular} color="white" height="3em" />
          <Typography
            className={classes.header}
            variant="h6"
            color="default"
            noWrap
          >
            Senedo Ridge Vineyard
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Senedo Ridge Vineyard
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              display="block"
              paragraph
            >
              To get in contact with Senedo Ridge Vineyard, please fill out the
              form below. We welcome any feedback, questions, or memories that
              you have. 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="default">
                    <Link color="inherit" href="/">
                      Back to Home
                    </Link>
                    {""}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="default">
                    <Link color="inherit" href="/products">
                      Wine Store
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <div id="contact">
          <h2>Get in Touch</h2>
          <div id="contact-form">
            <form action="https://formspree.io/f/xjvpanvd" method="POST">
              <input
                type="hidden"
                name="_subject"
                value="Contact request from personal website"
              ></input>
              <input
                type="email"
                name="_replyto"
                placeholder="Your email"
                required
              ></input>
                <textarea
                  name="message"
                  placeholder="Your message"
                  required
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Senedo Ridge Vineyard
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Estate Grown & Operated
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
