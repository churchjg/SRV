import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "4%",
    marginBottom: "1.5%",
    fontFamily: "Calibri",
  },
  emptyButton: {
    minWidth: "150px",
    margin: "10px",
    opacity: "1",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
    margin: "10px",
    opacity: "1",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "7%",
    width: "100%",
    justifyContent: "space-between",
  },
  gridProducts: {
    marginBottom: "1%"
  },
  warning: {
    marginTop: "1%",
    fontStyle: "italic",
    align: "center",
    fontWeight: "bold",
    position: "sticky",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      marginTop: "15%",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginTop: "15%",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginTop: "15%",
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "column",
      marginTop: "15%",
    },
  },
  warning2: {
    fontStyle: "italic",
    align: "center",
  },
  taxes: {
    display: "flex",
    marginTop: "1%",
    width: "100%",
    fontStyle: "italic",
    align: "left",
  },

  footerCart: {
    display: "flex",
    marginTop: "-3%",
    marginBottom: "3%",
    marginLeft: "-1%",
    width: "60%",
    justifyContent: "space-between",
    position: "absolute",
    opacity: ".7",
    borderRadius: "15px",
    background: "#e6e6e6",
    padding: "20px",
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
      marginTop: "1px",
      width: "100%",
      justifyContent: "space-between",
      position: "relative",
    },
  },
}));
