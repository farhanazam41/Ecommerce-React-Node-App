import React , { useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {API} from '../config';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  // declaring states
  const [open, setOpen] = useState(false);
  const [values , setValues] = useState({
    fname: '',
    lname:'',
    email:'',
    password: '',
    error: '',
    success: false
  });

 
  // closing fucntion for snackbar 
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  

// handling change for user input
  const {fname,lname,email,password,success,error} = values;

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  }

  const signup = (user) => {
    
    return fetch(`${API}/signup`, {
         method:"POST",
         headers:{
           Accept: 'application/json',
           "Content-Type" : "application/json"
         },
         body: JSON.stringify(user)
    }).then(response => {
      
     return response.json();
    })
    .catch(err => {
       console.log(err);
    });
  };

  const onSubmit = (event) => {
   
    event.preventDefault();
    signup({fname,lname,email,password})
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error, success: false});
        
      }
      else {
        setValues({...values, 
        fname:'',
        lname:'',
        email:'',
        password:'',
        error:'',
        success:true
      }) ;
      setOpen(true);
      }
      
    })
  } ;


  return (
    
    <Container component="main" maxWidth="xs">
    <showSuccess/>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate  >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required='true'
                helperText={error ? 'Required' : ''}
                error ={error ? true : false}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange('fname')}
                value={fname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleChange('lname')}
                value={lname}
                helperText={error ? 'Required' : ''}
                error ={error ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange('email')}
                value={email}
                helperText={error ? 'Required' : ''}
                error ={error ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange('password')}
                value={password}
                helperText={error ? 'Required' : ''}
                error ={error ? true : false}
              />
            </Grid>
            <Grid item xs={12}>
            
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign Up
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          New account created. You can Sign in now!
        </Alert>
         </Snackbar>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    
    
  );
}