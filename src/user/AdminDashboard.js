import React from  'react';
import Layout from '../core/Layout';
import { Table , Divider} from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import { isAuthenticated } from '../auth';
import {Link} from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const adminDashboard = ( ) => {

  const {user:{_id, fname,lname,email,role}} = isAuthenticated();

  const adminInfo = () => {
    return (
      <div>
    <Table stackable='true'  inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Admin Information</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>{fname}</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>{lname}</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>{email}</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>{role === 1 ? 'Admin' : 'Registered User'}</Table.Cell>
        
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        
      </Table.Row>
    </Table.Footer>
     
  
  </Table>
    </div>
    )
    
  }

  

  const adminLinks = () => {
    return (
      <div>
      
        <Table stackable='true'  inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Admin Links</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><AddCircleIcon/><Link to='/create/category' style={{cursor: 'pointer', color: '#ffffff'}}>Create Category</Link></Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell><AddCircleIcon/><Link to='/create/product' style={{cursor: 'pointer', color: '#ffffff'}}>Create Products</Link></Table.Cell>
        
      </Table.Row>
      
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        
      </Table.Row>
    </Table.Footer>
     
  
  </Table>
        
      </div>
    )
  }
  
        return (
        <Layout title='User Dashboard' description={`Welcome ${fname}!. View & Edit Categories and Products here`}>
          <Grid  container spacing={2}>
            <Grid item xs={2}>
              {adminLinks()}
            </Grid>
              <Grid item xs={5} >
              {adminInfo()}
              <Divider/>
              
      
              </Grid>
          </Grid>
        </Layout>
    );
};

export default adminDashboard ;