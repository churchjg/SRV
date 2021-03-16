import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
// import { Route, Redirect, Switch } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Senedo Ridge Vineyard
      </Link>{" "}
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
  },
  header: {
    color: "white",
    fontStyle: "italic",
    fontFamily: "Belluccia",
    fontSize: "25px",
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
  cardMedia1: {
    paddingTop: "56.25%", // 16:9
    overflow: "auto",
  },

  modalButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


Modal.setAppElement("#root");
 

export default function Event() {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default">
        <Toolbar className={classes.headbackground}>
          
          <Typography
            className={classes.header}
            variant="h6"
            color="default"
            noWrap
            
          >
            Senedo Ridge Vineyard Events
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
              Senedo Ridge Vineyard Events
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Come visit us at Senedo Ridge Vineyard! We have plenty of events for everyone's taste. Check out what is happening now down below!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="default" >
                  <Link color="inherit" href="/">
                      Back to Home
                    </Link>
                    {""}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="default" href="/contact">
                    Contact Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="100%">
          {/* End hero unit */}
          <Grid container spacing={6}>
            <Grid item xs={12} sm={3} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://i.imgur.com/SbgtmjG.jpg"
                  title="Wine & Pizza"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Wine & Pizza Night — 04/17/2021
                  </Typography>
                  <Typography>
                  Join us and bring your friends for a Wine & Pizza night! Our pizza is made by an Italian chef and baked in a wood fire oven. Enjoy amazing scenic views while you enjoy the greatest pairing on Earth — WINE & PIZZA
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen(true)}
                    size="small"
                    color="primary"
                    variant="outlined">
                    RSVP
                  </Button>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                      overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(200, 200, 200, .75)",
                      },
                      content: {
                        position: "absolute",
                        top: 100,
                        left: 200,
                        right: 200,
                        bottom: 100,
                        border: "1px solid #ccc",
                        background: "#fff",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "20px",
                      },
                    }}>
                    <CardMedia
                      className={classes.cardMedia1}
                      id="Misty"
                      image="https://i.imgur.com/6EqeGER.jpg"
                      title="Misty Western View"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen(false)}>
                        CLOSE
                      </Button>
                    </div>
                  </Modal>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image=""
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Stay Tuned for More Events!
                  </Typography>
                  <Typography>
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Sign Up
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image=""
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Stay Tuned for More Events!
                  </Typography>
                  <Typography>
                  
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Sign Up
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image=""
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                   Stay Tuned for More Events!
                  </Typography>
                  <Typography>
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Sign Up
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image=""
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                   Stay Tuned for More Events
                  </Typography>
                  <Typography>
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Sign Up
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image=""
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                   Stay Tuned for More Events
                  </Typography>
                  <Typography>
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Sign Up
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            
            
          </Grid>
        </Container>
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