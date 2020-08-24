import React from 'react';


import Menu from './Menu';
import {Divider} from 'semantic-ui-react';




const Authlayout = ({title='Title', description="Description", className, children}) => {
    
    
    return (
       <div >
       <Menu/>
       <Divider/>
        <div className = {className}>{children}</div>
        <div>
        
        </div>
        </div>
    )
}

export default Authlayout;
