import React, { useState } from "react";
import Modal from "react-modal";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
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
    top: 35,
    right: 30,
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  modalImage: {
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
        [theme.breakpoints.up('xs')]: {
            position: "relative",
            padding: theme.spacing(12),
            paddingRight: 0,
            width: "855%",
            height: "1vh"
    
          },
      },
      [theme.breakpoints.up('xs')]: {
        position: "relative",
        padding: theme.spacing(12),
        paddingRight: 0,
        width: "855%",
        height: "1vh"

      },

  }
}));

Modal.setAppElement("#root");

export default function Gallery() {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);
  const [modalIsOpen4, setModalIsOpen4] = useState(false);
  const [modalIsOpen5, setModalIsOpen5] = useState(false);
  const [modalIsOpen6, setModalIsOpen6] = useState(false);
  const [modalIsOpen7, setModalIsOpen7] = useState(false);
  const [modalIsOpen8, setModalIsOpen8] = useState(false);
  const [modalIsOpen9, setModalIsOpen9] = useState(false);
  const [modalIsOpen10, setModalIsOpen10] = useState(false);
  const [modalIsOpen11, setModalIsOpen11] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default">
        <Toolbar className={classes.headbackground}>
          <CameraIcon className={classes.icon} />
          <Typography
            className={classes.header}
            variant="h6"
            color="default"
            noWrap>
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
              gutterBottom>
              Senedo Ridge Vineyard Gallery
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              Having owned a part-time photography business in the 1990s, Jon
              still loves to snap pictures around the Vineyard. This gallery has
              a lot of his favorites, as well as some contributions from friends
              & family!
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
                    <Link color="inherit" href="/contact">
                      Contact Us
                    </Link>
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
                  image="https://i.imgur.com/6EqeGER.jpg"
                  title="Misty Western View"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Misty Western View
                  </Typography>
                  <Typography>
                    The front of Senedo Ridge's property faces West towards West
                    Virginia. In the distance you can get a picturesque view of
                    the Appalachian Mountains, made even better after a
                    thunderstorm
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 200,
                    //     right: 200,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                        
                    //   },
                    // }}
                    >
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
                  image="https://i.imgur.com/clYDfsW.jpg"
                  title="Buck Head Mountain Snow Day"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Buck Head Mountain Snow Day
                  </Typography>
                  <Typography>
                    Here is our neighboring mountain, Buck Head Mountain, on a snowy
                    December day.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen1(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen1}
                    onRequestClose={() => setModalIsOpen1(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 200,
                    //     right: 200,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      id="Snow Day"
                      image="https://i.imgur.com/clYDfsW.jpg"
                      title="Buck Head Mountain Snow Day"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen1(false)}>
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
                  image="https://i.imgur.com/KttNoOC.jpg"
                  title="Buck Head Mountain Smokey"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Buck Head Mountain Smokey
                  </Typography>
                  <Typography>
                    Buck Mountain seen again, just before a spring storm rolls
                    in.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen2(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen2}
                    onRequestClose={() => setModalIsOpen3(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 200,
                    //     right: 200,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/KttNoOC.jpg"
                      title="Buck Head Mountain Smokey"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen2(false)}>
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
                  image="https://i.imgur.com/pNmdgcJ.jpg"
                  title="Friend 1 — Black Bear"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Friend 1 — Black Bear
                  </Typography>
                  <Typography>
                    We have many friends that visit our Vineyard, best to leave
                    this one some space.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen3(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen3}
                    onRequestClose={() => setModalIsOpen3(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 200,
                    //     right: 200,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/pNmdgcJ.jpg"
                  title="Friend 1 — Black Bear"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen3(false)}>
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
                  image="https://i.imgur.com/zbx4Eu8.jpg"
                  title="Friend 2 — Fox"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Friend 2 — Fox
                  </Typography>
                  <Typography>
                    This baby fox somehow breached our unbreachable defenses and
                    made it inside the fence. Hopefully he isn't as sly as
                    people say.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen4(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen4}
                    onRequestClose={() => setModalIsOpen4(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 200,
                    //     right: 200,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/zbx4Eu8.jpg"
                  title="Friend 2 — Fox"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen4(false)}>
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
                  image="https://i.imgur.com/02dm8v7.jpg?1"
                  title="Friend 3 — Hawk"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Friend 3 — Hawk
                  </Typography>
                  <Typography>
                    The view is so great at Senedo Ridge that many of our winged
                    friends stop in just to take in the scenery!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen5(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen5}
                    onRequestClose={() => setModalIsOpen5(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 200,
                    //     right: 200,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/02dm8v7.jpg?1"
                  title="Friend 3 — Hawk"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen5(false)}>
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
                  image="https://i.imgur.com/rONa5Hu.jpg"
                  title="Turkey Season"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Turkey Season
                  </Typography>
                  <Typography>
                    We often get flocks of turkey that wander around the
                    Vineyard. But we tend to get our Thanksgiving meals
                    elsewhere.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen6(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen6}
                    onRequestClose={() => setModalIsOpen6(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 100,
                    //     right: 100,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/rONa5Hu.jpg"
                    title="Turkey Season"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen6(false)}>
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
                  image="https://i.imgur.com/scJC7w3.jpg?1"
                  title="Appalachian Mountain Sunset"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Appalachian Mountain Sunset
                  </Typography>
                  <Typography>
                    The only thing that can beat a sunset over the Appalachian
                    Mountains is a sunset over the Appalachian Mountains with a
                    glass of wine by your side!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen7(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen7}
                    onRequestClose={() => setModalIsOpen7(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 100,
                    //     right: 100,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/scJC7w3.jpg?1"
                  title="Appalachian Mountain Sunset"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen7(false)}>
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
                  image="https://i.imgur.com/8RXtSh0.jpg?1"
                  title="Spring Bloom"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Spring Bloom
                  </Typography>
                  <Typography>
                    Taken on an early spring day, these vines grow so fast.
                    Eventually reaching 8 feet by the start of summer.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen8(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen8}
                    onRequestClose={() => setModalIsOpen8(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 100,
                    //     right: 100,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/8RXtSh0.jpg?1"
                  title="Spring Bloom"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen8(false)}>
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
                  image="https://i.imgur.com/nV39lSf.jpg"
                  title="The Storm"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Storm
                  </Typography>
                  <Typography>
                    Here you can catch a glimpse of the Vineyard's owner, Jon
                    Church, threading trellis wire. He didn't even take a break
                    duuring the thunderstorm seen passing behind him.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen9(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen9}
                    onRequestClose={() => setModalIsOpen9(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 100,
                    //     right: 100,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/nV39lSf.jpg"
                  title="The Storm"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen9(false)}>
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
                  image="https://i.imgur.com/yEMLAQA.jpg"
                  title="Tractor's First Snow Day"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tractor's First Snow Day
                  </Typography>
                  <Typography>
                    This was "Captain Kubota's" first adventure in the snow,
                    back in 2015. Yes, we named our tractor.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen10(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen10}
                    onRequestClose={() => setModalIsOpen10(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 100,
                    //     right: 100,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/yEMLAQA.jpg"
                      title="Tractor's First Snow Day"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen10(false)}>
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
                  image="https://i.imgur.com/fTjuTvG.jpg"
                  title="What Started It All"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    What Started It All
                  </Typography>
                  <Typography>
                    Aided by friends & family, Senedo Ridge's first planting
                    season occurred in 2014. Things have come a long way since
                    then but it's important to remember all the hard work that
                    got you where you are today!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => setModalIsOpen11(true)}
                    size="small"
                    color="primary"
                    variant="contained">
                    View
                  </Button>
                  <Modal
                  classname={classes.modalImage}
                    isOpen={modalIsOpen11}
                    onRequestClose={() => setModalIsOpen11(false)}
                    // style={{
                    //   overlay: {
                    //     position: "fixed",
                    //     top: 0,
                    //     left: 0,
                    //     right: 0,
                    //     bottom: 0,
                    //     backgroundColor: "rgba(200, 200, 200, .75)",
                    //   },
                    //   content: {
                    //     position: "absolute",
                    //     top: 100,
                    //     left: 100,
                    //     right: 100,
                    //     bottom: 100,
                    //     border: "1px solid #ccc",
                    //     background: "#fff",
                    //     overflow: "auto",
                    //     WebkitOverflowScrolling: "touch",
                    //     borderRadius: "4px",
                    //     outline: "none",
                    //     padding: "20px",
                    //   },
                    // }}
                    >
                    <CardMedia
                      className={classes.cardMedia1}
                      image="https://i.imgur.com/fTjuTvG.jpg"
                      title="What Started It All"
                    />
                    <div className={classes.modalButton}>
                      <Button
                        variant="contained"
                        color="default"
                        onClick={() => setModalIsOpen11(false)}>
                        CLOSE
                      </Button>
                    </div>
                  </Modal>
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
          component="p">
          Estate Grown & Operated
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
