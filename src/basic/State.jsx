import React,{Component} from "react";

class State extends Component{
    constructor(){
        super();
        this.state = {
            message: "Welcome Vistor",
            count:  0,
            bnt: "subcribe"

        }
    }

    changeMessage = ()=>{
        this.setState({
            message:"Thank You For Subcribing",
            bnt:"subcribed"
        });
    }

    changeConut = ()=>{
        // this.setState({
        //     count: this.state.count + 1
        // }, ()=>console.log('this is callback value : '+ this.state.count));

        this.setState((prevState)=>({
            count:  prevState.count +1   
        }));
        console.log(this.state.count);
    }

    fivetime = ()=>{
    this.changeConut()
    this.changeConut()
    this.changeConut()
    this.changeConut()
    this.changeConut()
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>{this.state.bnt}</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.fivetime}>Increace Count</button>
            </div>
           
        )
    }
} 

export default State;