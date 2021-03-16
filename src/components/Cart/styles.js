import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '2%',
    marginBottom: '3%',
    fontFamily: "Calibri"
  },
  emptyButton: {
    minWidth: '150px',
    margin: '10px',
    opacity: "1",
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    margin: '10px',
    opacity: "1",
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '7%',
    width: '100%',
    justifyContent: 'space-between',
  },
  warning: {
    marginTop: '1%',
    fontStyle: "italic",
    align: "center",
    fontWeight: "bold",
    position: "sticky"
  },
  warning2: {
    fontStyle: "italic",
    align: "center",
    
  },
  taxes: {
    display: 'flex',
    marginTop: '1%',
    width: '100%',
    fontStyle: 'italic',
    align: "left"
  },

  footerCart: {
    display: 'flex',
    marginTop: '-10%',
    marginBottom: '7%',
    marginLeft: "-5%",
    width: '75%',
    justifyContent: 'space-between',
    position: "fixed",
    opacity: ".9",
    borderRadius: "25px",
    background: "#e6e6e6",
    padding: "20px",
    
    
    
  },

}));