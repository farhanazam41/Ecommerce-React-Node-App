import React from  'react';
import Layout from '../core/Layout';
import { Table , Divider} from 'semantic-ui-react';
import Grid from '@material-ui/core/Grid';
import { isAuthenticated } from '../auth';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const Dashboard = ( ) => {

  const {user:{_id, fname,lname,email,role}} = isAuthenticated();

  const userInfo = () => {
    return (
      <div>
    <Table stackable='true'  inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>User Information</Table.HeaderCell>
        
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

  const purchaseHistory = () => {
    return (
      <div>
      <Table size='small' stackable='true' inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Purchase History</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Name</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Email</Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Role</Table.Cell>
        
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

  const userLinks = () => {
    return (
      <div>
      
        <Table stackable='true'  inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>User Links</Table.HeaderCell>
        
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell><ShoppingCartIcon/><Link to='/cart' style={{cursor: 'pointer', color: '#ffffff'}}>My Cart</Link></Table.Cell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell><PersonIcon/><Link to='/profile/update' style={{cursor: 'pointer', color: '#ffffff'}}>Profile</Link></Table.Cell>
        
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
        <Layout title='User Dashboard' description={`Welcome ${fname}!. View your profile and purchase information here`}>
          <Grid  container spacing={2}>
            <Grid item xs={2}>
              {userLinks()}
            </Grid>
              <Grid item xs={5} >
              {userInfo()}
              <Divider/>
              {purchaseHistory()}
      
              </Grid>
          </Grid>
        </Layout>
    );
};

export default Dashboard ;