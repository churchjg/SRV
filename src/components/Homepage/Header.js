import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { useLocation } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import { Badge, CssBaseline } from "@material-ui/core";
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `2px solid ${theme.palette.divider}`,
    marginTop: "10px",
    [theme.breakpoints.down('xs')]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
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
        <Button className={classes.club} variant="outlined" size="small">
          Join Our Wine Club
        </Button>
        <Typography
          component="h1"
          variant="h2"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}>
          {title}
        </Typography>
        
        {location.pathname === '/' && (
            
            <div className={classes.cartButton}>
            <IconButton href="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </div>
            
            )}
        <Button variant="outlined" size="small">
          Sign In
        </Button>
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
            variant="subtitle1"
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
