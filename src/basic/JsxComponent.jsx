 import React  from 'react';

//  const JsxComponent = ()=>{
//     return (
//         <h2> Hi, I Am Form JsxComponent</h2>
//     )
//  }
 const JsxComponent = ()=>{
    return React.createElement('h4',{id:'h4_tag',className:'h4_tag' },'H4 Contant',React.createElement('p',{ },'hi Jsx'));
    
 }

 export default JsxComponent;
