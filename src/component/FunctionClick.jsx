import React from 'react';

const FunctionClick = ()=>{
    
    const clickme = ()=>{
        console.log('hi, I am From Function Click')
    }

    return(
        <button onClick = {clickme}>Click Me</button>
    )
}

export default FunctionClick;