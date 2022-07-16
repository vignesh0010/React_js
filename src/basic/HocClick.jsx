import React, { Component } from 'react';
import HocSamefunction from './HocSame'

export class HocClick extends Component {

  render() {
    const {event,count,myname} = this.props
    return (
      <div>
        <label htmlFor="clickme">{count} {myname}</label>
        <button onClick={event}>Click Me</button>        
      </div>
    )
  }
}

export default HocSamefunction(HocClick,7)