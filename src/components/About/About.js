import React from "react";
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
import { Icon } from "@iconify/react";
import bottleWine from "@iconify-icons/mdi/bottle-wine";

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
    marginRight: "1%",
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
    padding: theme.spacing(6, 0, 4),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(1),
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

export default function About() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" color="default">
        <Toolbar className={classes.headbackground}>
              <Icon icon={bottleWine} color="white" height="3em" />
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
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom>
              About Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              Senedo Ridge is family owned and operated by the Church family.
              Our wine is estate grown and produced among the foothills of the
              Shenandoah Valley. The Vineyard operates on two acres of a sloping
              mountainside with high quality, clay-based soil that helps to
              produce complex Red Wines.
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
                  <Button variant="contained" color="default">
                    <Link color="inherit" href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="default">
                    <Link color="inherit" href="/products">
                      Wine Store
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
            <Grid item xs={12} sm={3} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://i.imgur.com/fTjuTvG.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    The Beginning
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={3} md={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://i.imgur.com/hRMV0G1.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Where We Are Now
                  </Typography>
                  <Typography></Typography>
                </CardContent>
                <CardActions></CardActions>
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
