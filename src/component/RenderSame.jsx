import React, { Component } from 'react'

export class RenderSame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    eventHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                {this.props.children(
                    this.state.count,
                    this.eventHandler
                )}
            </div>
        )
    }
}

export default RenderSame