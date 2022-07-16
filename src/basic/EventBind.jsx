import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'this is eventBinding',
        }
    }


    clickBinding = ()=> {
        this.setState({
            message: 'Event BInding is Success'
        })
        console.log(this);
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickBinding}>EventBinding</button>
            </div>

        )
    }
}

export default EventBind