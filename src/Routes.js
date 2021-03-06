import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Singup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Shop from './core/Shop';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';
import 'semantic-ui-css/semantic.min.css';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';


const Routes = () => {
    return (
        
        <BrowserRouter>
           
            <Switch>
                <Route path='/signup' exact component={Singup} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/' exact component={Home} />
                <Route path='/shop' exact component={Shop} />
                <PrivateRoute path='/user/dashboard' exact component={Dashboard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
                <AdminRoute path='/create/category' exact component={AddCategory} />
                <AdminRoute path='/create/product' exact component={AddProduct} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;