import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'; 
import {AccountCircle} from '@material-ui/icons';


const isActive = (history, path) => {
    if ( history.location.pathname === path ){
        return {color: '#000000'};
    } else {
        return {color: '#ffffff'};
    }
};


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    circle:{
     color: 'white'
    }

  }));

const Menu =({history}) => {

    const classes = useStyles();

    return (
      <AppBar position="static" >
      <Toolbar>
      <Typography variant="h6" className={classes.title}>
             E-Commerce App
          </Typography>
      <Button component={Link} to='/' color='inherit' style={isActive(history,'/')} >
            Home
      </Button>
      <Button component={Link} to='/signup' color='inherit' style={isActive(history,'/signup')}>
            Signup
      </Button>
      <Button component={Link} to='/signin' color='inherit' style={isActive(history,'/signin')}>
            Signin
      </Button>
      <IconButton color='inherit' aira-label='account' >
      <AccountCircle  />
      </IconButton>
      </Toolbar>
      </AppBar>
    )

}


export default withRouter(Menu) ;