import React, {useState, useEffect} from  'react';
import Layout from '../core/Layout';
import { Button, Form,Image, Header, Icon, Loader} from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import { isAuthenticated } from '../auth';
import {createProduct, getCategories} from './apiAdmin';
import {Link} from 'react-router-dom';



const AddProduct = () => {

    const [values, setValues] = useState({

        name:'',
        description:'',
        price:'',
        categories:[],
        category:'',
        shipping:'',
        quantity:'',
        photo:'',
        loading: false,
        error:'',
        createdProduct:'',
        redirectToProfile:false,
        formData:''

    })

    const [success, setSuccess] = useState(false);
    const [photoPreview, setPhotoPreview] = useState('');
    
    
    const {
        name,
        description,
        price,
        categories,
        category,
        shipping,
        quantity,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData

    } = values;

    
   

    

    const init =( ) => {
        getCategories().then(data => {
            if(data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, categories: data, formData: new FormData()});
            }
        });
    };

    useEffect(() => {
        
        init();
    },[]) ;
    

    // const handleChange = name => event => {
    //     // setPhotoPreview(window.URL.createObjectURL(event.target.files[0]))
    //     const value = name === 'photo' ?event.target.files[0] : event.target.value;
        
    //     formData.set(name,value);

    //     setValues({ ...values, [name] : value});
    // }
    const handleChange = name => event => {
        // setPhotoPreview(window.URL.createObjectURL(event.target.files[0]))
        const value = name === 'photo' ?  event.target.files[0] : event.target.value;
        const pic = name === 'photo' ? setPhotoPreview(window.URL.createObjectURL(event.target.files[0])) : ''
        formData.set(name,value);

        setValues({ ...values, [name] : value});

        console.log(values);
    }
    

    const { user, token} = isAuthenticated();

    const clickSubmit = (event) => {
       
       event.preventDefault();
       setSuccess(false);
       setValues({...values, error:'', loading: true});

       createProduct(user._id, token, formData)
       .then(data => {
           if(data.error) {
               setValues({...values, error: data.error})
           }
           else{
              setSuccess(true);
              setValues({...values, name:'', description:'',photo:'',price:'',quantity:'',categories:[],shipping:'',loading:false,createdProduct: data.name});
              setPhotoPreview('');
           }
           
       });
    };

  const newPostForm = () => (
    <Grid justify='center' container >
            
    <Grid item xs={8} >
    
    <Header as="h2" block >
    <Icon name='add'  />
      Create New Product
      </Header>
      
      <form className="mb-3" onSubmit={clickSubmit}>
      
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
                </label>
            </div>
            <Image src={photoPreview} rounded centered size='medium ' />
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea onChange={handleChange('description')} className="form-control" value={description} />
            </div>

            <div className="form-group">
                <label className="text-muted">Price</label>
                <input onChange={handleChange('price')} type="number" className="form-control" value={price} />
            </div>

            <div className="form-group">
                <label className="text-muted">Category</label>
                <select onChange={handleChange('category')} className="form-control">
                    <option>Please select</option>
                    {categories &&
                        categories.map((c, i) => (
                            <option key={i} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Shipping</label>
                <select onChange={handleChange('shipping')} className="form-control">
                    <option>Please select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity} />
            </div>
            <Form.Field
            control={Button}
            disabled={values.name && values.description && values.price  ? false : true}
            color='blue'
            icon='pencil alternate'
            content="Create Category"
            type='submit'
            />
        </form>
        
      </Grid>
          </Grid>
  )

  const showError =() => (
      <div className='alert alert-danger' style={{display: error ? '' : 'none'}}>{error}</div>
  )

  const showSuccess = () => {
    if(success) {
       return <div className='alert alert-info'>Product created</div>
    }
}
const showLoading =() => 
    loading && (
      <Loader active >Loading...</Loader>
    )

 
    return (
        <Layout title='Add Product' description={`Welcome ${user.name}. Add New Product here`}>
          
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
          
        </Layout>
    )
}

export default AddProduct;