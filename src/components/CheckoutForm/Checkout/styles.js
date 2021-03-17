import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    width: "100%"
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secureCheckout: {
    marginLeft: "2%",
    
  },
  warning: {
    fontStyle: "italic",
    marginTop: "2%",
    marginBottom: "-3%",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "1px",
      width: "100%",
      justifyContent: "space-between",
      position: "relative",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "1px",
      width: "100%",
      justifyContent: "space-between",
      position: "relative",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "1px",
      width: "100%",
      justifyContent: "space-between",
      position: "relative",
    },
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
      marginTop: "15%",
      marginBottom: "-10%",
      marginLeft: "12%",
      fontSize: "12px",
      width: "70%",
      justifyContent: "space-between",
      position: "relative",
    },
  },
}));