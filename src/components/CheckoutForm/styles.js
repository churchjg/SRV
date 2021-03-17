import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  birthday: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "13px",
    marginLeft: "2%",
    width: "46%",
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "13px",
      marginLeft: "3.25%",
      width: "93%",
      
    },
  },
}));
