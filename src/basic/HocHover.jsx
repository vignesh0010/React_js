import React, { Component } from 'react';
import HocSamefunction from './HocSame'

export class HocHover extends Component {
  render() {
    const {event,count,myname} = this.props
    return (
      <div>
        <h1 className='HocHover' onMouseOver={event}>Hover Me  ==== {count} -------{myname}</h1>        
      </div>
    )
  }
}

export default HocSamefunction(HocHover,5);