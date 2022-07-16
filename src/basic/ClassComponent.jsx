import React,{ Component } from "react";

class ClassComponent extends Component{
    render(){
        const {heroName} = this.props;
        return(
            <>
                <h1>hi, I am from ClassComponent {heroName}</h1>
                <h1>hi, I am from ClassComponent {this.props.heroName}</h1>
            </>
            
        )
    }
}
export default ClassComponent;                          