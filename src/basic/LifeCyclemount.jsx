import React, { Component } from 'react'

export class LifeCyclemount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name :'React LifeCycle'
      }
      console.log("Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDrivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
  render() {
    console.log("render")
    return (
      <div>Render</div>
      
    )
  }
}

export default LifeCyclemountp