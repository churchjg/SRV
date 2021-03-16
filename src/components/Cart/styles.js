import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '2%',
    marginBottom: '3%',
    
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
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
    fontWeight: "bold"
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
  }
}));