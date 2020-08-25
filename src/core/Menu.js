import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'; 
import {AccountCircle} from '@material-ui/icons';
import {signOut, isAuthenticated} from '../auth/index';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import StoreIcon from '@material-ui/icons/Store';
import Grid from '@material-ui/core/Grid';


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
      marginRight: theme.spacing(1),
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
      
      
      <AppBar>
      <Toolbar>
      <Typography variant="h6" className={classes.title}>
      <StoreIcon/>
             App
          </Typography>
          
      <Button className={classes.menuButton} component={Link} to='/' color='inherit' style={isActive(history,'/')} >
            Home
      </Button>
      <Button className={classes.menuButton} component={Link} to='/shop' color='inherit' style={isActive(history,'/shop')} >
            Shop
      </Button>
      
      {
        isAuthenticated() && isAuthenticated().user.role === 0 && (
          <Button className={classes.menuButton}  component={Link} to='/user/dashboard' color='inherit' style={isActive(history,'/user/dashboard')} >
            Dashboard
      </Button>
        )
      }
      {
        isAuthenticated() && isAuthenticated().user.role === 1 && (
          <Button className={classes.menuButton}  component={Link} to='/admin/dashboard' color='inherit' style={isActive(history,'/admin/dashboard')} >
            Dashboard
      </Button>)
      }
      {!isAuthenticated() && (
        <div>
        
        <Button className={classes.menuButton}  component={Link} to='/signup' color='inherit' style={isActive(history,'/signup')}>
            Signup
      </Button>
      
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
     
      
      <Button className={classes.menuButton}  component={Link} to='/profile' color='inherit' style={isActive(history,'/profile')}>
            Profile
      </Button>
      
      </Toolbar>
      </AppBar>
      
      
    )

}


export default withRouter(Menu) ;