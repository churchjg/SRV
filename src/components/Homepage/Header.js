import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `3px solid ${theme.palette.divider}`,
    marginTop: "1%",
    
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        marginTop: "5%",
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        marginTop: "5%",
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        marginTop: "5%",
    }
  },
  club: {
    [theme.breakpoints.down('xs')]: {
        display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
  },
  toolbarTitle: {
    flex: 1,
    fontStyle: "italic",
    fontFamily: "Belluccia",
    [theme.breakpoints.down('xs')]: {
        fontSize: "30px"
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: "30px"
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "30px"
    }
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        margin: "0px"
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        margin: "0px"
    }
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
  },
  cartButton: {
    [theme.breakpoints.down('xs')]: {
        float: "right"
        
    },
    [theme.breakpoints.down('sm')]: {
        float: "right"
       
    },
    [theme.breakpoints.down('md')]: {
        float: "right"
    }
  }
  
  
  
}));

export default function Header(props, {totalItems} ) {
  const classes = useStyles();
  const { sections, title } = props;
  const location = useLocation();

  return (
      
    <React.Fragment>
    <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h1"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}>
          {title}
        </Typography>
        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="h5"
            href={section.url}
            className={classes.toolbarLink}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
      
    </React.Fragment>
    
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
