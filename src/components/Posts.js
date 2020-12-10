import React, { Component } from 'react'

class Posts extends Component {
  //the name props doesnt seem to be necessary in line 5 and 6
  //shortcut is rconst
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({posts: data}))
  }

  render() {
    const postItems = this.state.posts.map(post => (
      <div key = {post.id}>
        <h3>{post.title }</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      //jsx has only one parent wrapper 
      //added props trials 
      <div>
        <h1>Posts </h1>
      
        {postItems}
      </div>
     
    )
  }
}

export default Posts;