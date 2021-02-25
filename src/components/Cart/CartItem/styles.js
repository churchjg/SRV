  
import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
  media: {
    height: 270,
    backgroundSize: 'contain',
    backgroundColor: '#080706',
    borderRadius: 5
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    border: "1px solid black",
    borderRadius: 10
  },
}));