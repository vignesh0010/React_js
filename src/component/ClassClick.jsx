import React,{Component} from 'react';

class ClassClick extends Component{
    clickmeClass = ()=>{
        console.log('The Class Component Working Well');
    }
    render(){
        return(
            <button onClick={this.clickmeClass}>Class Click</button>
        )
    }
}

export default ClassClick;