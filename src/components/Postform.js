import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
            message:' ADD POST'
          
        };
        this.changeMessage = this.changeMessage.bind(this)
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
      //e is the event parameter
      //this are methods that affect an event
    onChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
            }
            fetch('https://jsonplaceholder.typicode.com/posts',{
                method:'POST',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(post)

            })
            .then(res => res.json())
            .then(data => console.log(data));
            
        }
        changeMessage() {
          this.setState({
            message:'Ongeza Post'
          })
          console.log('clicked')
        }
    //remember 1.setstate
    //2.callbackvalues as a second parameter 
    //3.use prevstate to change depending on prevsttate

  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
        <form onSubmit={this.onSubmit}>
            <div>
              <label>Title:</label><br />
              <input type='text'name='title' onChange={this.onChange} value={this.state.title} />
            </div>
            <div>
                <br />
              <label>Body:</label><br />
              <textarea name='body' onChange={this.onChange} value={this.state.body} />
            </div>
            <br />
            <button type='submit'>submit</button>
            <button onClick={ this.changeMessage}>Subscribe</button>
        </form>
      </div>
    )
  }
}



export default Postform;

//<button onClick={ () => this.changeMessage()}>Subscribe</button>
//if you add parethensis like above,its a function call 
// without () its just a function yo are calling 
//binding this 
//onClick = {this.changeMessages.bind(this)}
////onClick =()=>  {this.changeMessages(this)} arrow method
//onClick={this.changeMessasge } ,we are binding in the constructor 
// final approach , use arrow function as a class property
//in the costructor  use an arrow function 
