import React, { Component } from 'react';
import { ContextConsumer } from './UserContext';

export class ComponentC extends Component {
    render() {
        return (
            <ContextConsumer>
                {
                    (myname) => {
                        return (
                            <div>
                                {myname}
                                <h1>tamilan</h1>
                            </div>
                        )
                    }
                }
            </ContextConsumer>
        )
    }
}

export default ComponentC