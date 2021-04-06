  
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    height: '100%',
    borderRadius: 10
  },
  media: {
    height: 100,
    maxWidth: '100%',
    paddingTop: '56.25%', // 16:9
    backgroundSize: 'contain',
    backgroundColor: '#080706'
    
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  description: {
    ['@media (max-width:1025px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%',
      overflowWrap: "anywhere"
      
      // overflow: "auto",
      // display: "block"
    }
  }
}));