import React, { Component } from 'react'

export class ReanderClick extends Component {
    render() {
        const { variable, commonfun } = this.props;
        return (
            <div>
                <label htmlFor="Value">{variable}</label>
                <button onClick={commonfun}> Click Me</button>
            </div>
        )
    }
}

export default ReanderClick;