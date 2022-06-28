import React from 'react';

const  Functional = (props)=>{
    const {name,children} = props;
    return(
        <div>
            <h1>I am vignesh from {name}</h1>
            {children}
        </div>
        
    )
}

export default Functional;