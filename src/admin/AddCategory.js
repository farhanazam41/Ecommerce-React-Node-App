import React, {useState, useEffect} from  'react';
import Layout from '../core/Layout';
import {  Divider, Button, Form} from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import { isAuthenticated } from '../auth';
import {createCategory} from './apiAdmin';
import { Input } from '@material-ui/core';
import {Link} from 'react-router-dom';

const AddCategory = () => {
    
    const [values , setValues] = useState({name:''});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
     const isName = Object.values(values).every(el => Boolean(el)
     )
     isName ? setDisabled(false) : setDisabled(true);
    },[values]);
    // destructer user and token from localstorage
  const { user, token} = isAuthenticated();

  const {name} = values;

  const handleChange = name => event => {
      
      setError('');
      setValues ({values, [name]: event.target.value});
      
  }

  const onSubmitChange  = (e) => {
       e.preventDefault();
       setLoading(true);
       setError('');
       setSuccess(false);
       // make request to API to create category
       createCategory(user._id, token, {name})
       .then(data => {
           if(data.error){
               setError(true)
           }
           else{
            
            setError('');
            setSuccess(true);
            setValues({name:''}) // clearing out the form input

            
           }
           setLoading(false);  // setting loading false
           
           
       })
  };

  const showSuccess = () => {
      if(success) {
         return <h3 className='text-success'>Category created</h3>
      }
  }

  const showError = () => {
      if(error) {
          return  <h3 className='text-danger' >Category Name should be unique</h3>
      }
  }
  const goBack = () => {
    
    return (
        <div>
            <Link to='/admin/dashboard' className='text-warning'><h4>Back to dashboard</h4></Link>
        </div>
    )
}


  const newCategoryForm = () => (
    <Form loading={loading} onSubmit={onSubmitChange}>
    <Form.Group widths= '16'>
    <Form.Field
    required
    control={Input}
    name='name'
    label='Name'
    placeholder='Name'
    value={name}
    onChange={handleChange('name')}
    >
    </Form.Field>
    </Form.Group>
    <Form.Field
    control={Button}
    disabled={disabled || loading}
    color='blue'
    icon='pencil alternate'
    content="Create Category"
    type='submit'
    
    />
    </Form>

  )
    return (
        <Layout title='Add Category' description={`Welcome ${user.fname}!. Add New Category here`}>
          <Grid justify='center' container spacing={2}>
            
              <Grid item xs={6} >
              {showSuccess()}
              {showError()}
              {newCategoryForm()}
              
              <Divider/>
              {goBack()}
      
              </Grid>
          </Grid>
        </Layout>
    )
}

export default AddCategory;