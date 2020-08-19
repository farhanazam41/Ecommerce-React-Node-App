import React from 'react';


import Menu from './Menu';





const Authlayout = ({title='Title', description="Description", className, children}) => {
    
    
    return (
       <div >
       <Menu/>
        <div className = {className}>{children}</div>
        <div>
        
        </div>
        </div>
    )
}

export default Authlayout;
