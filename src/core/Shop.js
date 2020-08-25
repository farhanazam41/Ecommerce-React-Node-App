import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import EcommercePage from './Card'
import {getCategories} from '../admin/apiAdmin';
import CheckBox from './Checkbox';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(20),
        height: theme.spacing(40),
      },
    },
  }));


const Shop = () => {

    const classes = useStyles();
 
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState();
   
    const init =( ) => {
        getCategories().then(data => {
            if(data.error) {
               setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    useEffect(() => {
     init();
    }, [])


    return (
        <Layout  title='Shop Page' description='Find products of your choice'>
        
      
        <Grid container>
        <Grid item xs={4} sm={4} md={4}>
        <h3>Filter products by categories</h3>
       
        <div className={classes.root}>
        <Paper elevation={3}>
        
        <ul>
        <CheckBox categories={categories} />
        </ul>
       
        </Paper>
        </div>
        </Grid>
        <Grid item xs={8} sm={8} md={8}>
        Right
        </Grid>
        </Grid>

    
    
        </Layout>
    )
}

export default Shop;