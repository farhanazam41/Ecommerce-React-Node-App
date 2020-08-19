import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';
import StickyFooter from './Footer';


const useStyles = makeStyles((theme) => ({
    hero : {
        height: '300px',
        backgroundPosition:'center'
    }
}))

const Layout = ({title='Title', description="Description", className, children}) => {
    
    const classes = useStyles();

    return (
       <div >
       <Menu/>
        <div className='jumbotron jumbotron-fluid'>
        <h2>{title}</h2>
        <p className='lead'>{description}</p>
        </div>
        <div className={className}>{children}</div>
        <div>
        <StickyFooter/>
        </div>
       </div>

    )
}

export default Layout;
