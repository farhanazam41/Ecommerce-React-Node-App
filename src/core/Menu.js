import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'; 
import {AccountCircle} from '@material-ui/icons';
import {signOut, isAuthenticated} from '../auth/index';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';

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
      marginRight: theme.spacing(2.5),
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
          <HomeIcon/>
      <Button className={classes.menuButton} component={Link} to='/' color='inherit' style={isActive(history,'/')} >
            Home
      </Button>
      <DashboardIcon/>
      <Button className={classes.menuButton}  component={Link} to='/dashboard' color='inherit' style={isActive(history,'/dashboard')} >
            Dashboard
      </Button>
      {!isAuthenticated() && (
        <div>
        <PersonAddIcon/>
        <Button className={classes.menuButton}  component={Link} to='/signup' color='inherit' style={isActive(history,'/signup')}>
            Signup
      </Button>
      <PersonIcon/>
      <Button className={classes.menuButton}  component={Link} to='/signin' color='inherit' style={isActive(history,'/signin')}>
            Signin
      </Button>
        </div>
      )}
      {
        isAuthenticated() && (
          <Button className={classes.menuButton}  component={Link} color='inherit' style={{cursor: 'pointer', color: '#ffffff'}}
      onClick={() => signOut( () => {
        history.push('/');
      })} >
            Signout
      </Button>
        )
      }
      <IconButton color='inherit' aira-label='account' >
      <AccountCircle  />
      <Button className={classes.menuButton}  component={Link} to='/profile' color='inherit' style={isActive(history,'/profile')}>
            Profile
      </Button>
      </IconButton>
      </Toolbar>
      </AppBar>
    )

}


export default withRouter(Menu) ;