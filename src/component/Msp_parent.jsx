import React, { Component } from 'react';
import Msp_child from './Msp_child'

class Msp_parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         alertmessage: "Method As Passed Successfully"
      }
    }

    alertfunction =()=>{
        alert(`hi, this is ${this.state.alertmessage}`);
    }
  render() {
    return (
      <div>
         <Msp_child EventMethod = {this.alertfunction} />
         {/* <h1>hi</h1> */}
      </div>
    )
  }
}

export default Msp_parent