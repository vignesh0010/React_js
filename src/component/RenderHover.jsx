import React, { Component } from 'react'

export class RenderHover extends Component {
    render() {
        const { variable, commonfun } = this.props;
        return (
            <div>
                <label htmlFor="Value">{variable}</label>
                <h1 onMouseOver={commonfun}> Click Me</h1>
            </div>
        )
    }
}

export default RenderHover;