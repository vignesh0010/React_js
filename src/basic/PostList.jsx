import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMag:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data);
            this.setState({
                posts:res.data
            })
        })
        .catch((error)=>{
            console.log(error);
            this.setState({
                errorMag:"Nothing Retrive Data From API"
            })
        })
    }

  render() {
    const {posts,errorMag} = this.state
    return (
      <div>
        <h1>Post List </h1>
        {
           posts.length ? 
          posts.map((post)=>(
            <p key={post.id}> {post.title}</p>
          )) : 
          null }

          {
            errorMag ? <h1>{errorMag}</h1>:null
          }
          
      </div>
    )
  }
}

export default PostList