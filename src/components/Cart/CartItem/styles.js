  
import { makeStyles } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';

export default makeStyles(() => ({
  media: {
    height: 270,
    backgroundSize: 'contain',
    backgroundColor: '#080706'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));