import React, { Component } from 'react';


export class Msp_child extends Component {
  render() {
    const {EventMethod} = this.props;
    return (
      <div>
        <button onClick={EventMethod}>EventMethod</button>
      </div>
    )
  }
}

export default Msp_child;