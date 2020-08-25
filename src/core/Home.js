import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import {getProducts} from './apiCore';
import EcommercePage from './Card'
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';

import CarouselPage from './Carousel';


  

const Home = () => {

   const [productsBySell, setProductsBySell] = useState([]);
   const [productsByArrival, setProductsByArrival] = useState([]);
   const [error , setError] = useState(false);


   const loadProductsBySell = () => {

    getProducts('sold').then(data => {
        if(data.error) {
            setError(data.error)
        }
        else {
            setProductsBySell(data)
        }
    })
   }

   const loadProductsByArrival = () => {

    getProducts('createdAt').then(data => {
        if(data.error) {
            setError(data.error)
        }
        else {
            setProductsByArrival(data)
        }
    })
   }

   useEffect(() => {
    loadProductsByArrival()
    loadProductsBySell()
   },[])
  
  //  let ecomCardBySell = productsBySell.map((product, i) => (
            
  //   <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>   
  //   <EcommercePage key={i} product={product} />
  //   </MDBCol>
 
  //    ))

    //  let ecomCardByArrival = productsByArrival.map((product, i) => (
            
    //     <MDBCol lg='3' md='6' className='mb-lg-0 mb-4'>   
    //     <EcommercePage key={i} product={product} />
    //     </MDBCol>
     
    //      ))

    return (
        <Layout  title='Home Page' description='This is a Home Page'>
        
        <CarouselPage/>
        <Container maxWidth='md'>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Arrivals

      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>

      <Grid container spacing={4} >
      {productsByArrival.map((product, i) => (
            
         <Grid item xs={12} sm={6} md={4}> 
         
         <EcommercePage key={i} product={product} />
         
         </Grid>
        
        
     
         ))}
      </Grid>
       
      <h2 className="h1-responsive font-weight-bold text-center my-5">
      Our bestsellers
    </h2>
    <p className="grey-text text-center w-responsive mx-auto mb-5">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
      error amet numquam iure provident voluptate esse quasi, veritatis
      totam voluptas nostrum quisquam eum porro a pariatur veniam.
    </p>

    
    
    <Grid container spacing={4} >
    {productsBySell.map((product, i) => (
          
       <Grid item xs={12} sm={6} md={4}> 
       
       <EcommercePage key={i} product={product} />
       
       </Grid>
      
      
   
       ))}
    </Grid>


      </Container>
    
        </Layout>
    )
} 

export default Home;