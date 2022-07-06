import React, { Component } from 'react'

const HocSamefunction = (OriginalComponrnt,ComponentProps) => {
    class HocSame extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        clickHandler = () => {
            this.setState((prevState) => (
                {
                    count: prevState.count + ComponentProps
                }
            ));
        }

        render() {
            return (
                <div>
                    <OriginalComponrnt count={this.state.count} event={this.clickHandler} 
                    {...this.props}/>
                </div>
            )
        }
    }
    return HocSame;
}

export default HocSamefunction;
