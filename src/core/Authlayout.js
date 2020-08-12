import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './Menu';
import StickyFooter from './Footer';


const useStyles = makeStyles((theme) => ({
    hero : {
        height: '300px',
        backgroundPosition:'center'
    }
}))

const Authlayout = ({title='Title', description="Description", className, children}) => {
    
    const classes = useStyles();

    return (
       <div >
       <Menu/>
        <div className={className}>{children}</div>
        <div>
        <StickyFooter/>
        </div>
       </div>

    )
}

export default Authlayout;
