import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  age: {
    fontStyle: "italic",
    fontWeight: "bold",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "13px",
      marginLeft: "3.25%",
      width: "93%",
    },
  },
}));
