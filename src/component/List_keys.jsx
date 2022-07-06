import React, { Component } from 'react';
import Person from './Person'

class List_keys extends Component {
    
  render() {
    const nameList = [
        {   id:1,
            name:"vignesh",
            skill:"react"
        },
        {
            id:2,
            name:"guru",
            skill:"php"
        },
        {
            id:3,
            name:"prasanth",
            skill:"fullter"
            
        }
        
    ];

        const personList = nameList.map((persondata,index)=>(<Person key={index} person={persondata} />));
       
    
    return (
      <div>
        {personList}
      </div>
    )
  }
}

export default List_keys