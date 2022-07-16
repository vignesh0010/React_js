import React, { Component, createRef } from 'react';
import FRrefs from './FRrefs';

class Refs extends Component {
    constructor(props) {
      super(props)
    
     this.inputRefs = React.createRef(); 
     this.FRinputRefs = React.createRef(); 

    }

    componentDidMount(){
        this.inputRefs.current.focus()
        console.log(this.inputRefs.current)
    }

    clickevent = ()=>{
        alert(this.inputRefs.current.value);
    }

    clickHandler(){
      this.FRinputRefs.current.focus()
    }

  render() {
    return (
      <div>
        <label htmlFor="refs">Name : </label>
        <input type="text" name="refs" id="refs" ref={this.inputRefs} placeholder='Enter your name '/>&nbsp;&nbsp;&nbsp;
        <button onClick={this.clickevent}>Send Value</button><br /><br />
        <FRrefs ref={this.FRinputRefs} />
        <button onClick={this.clickHandler}>Give Focus</button><br /><br />
      </div>
    )
  }
}

export default Refs