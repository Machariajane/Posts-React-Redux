import './App.css';
import React, { Component } from 'react'
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from 'react-redux';
import store from './store'


function App() {
  
  return (
    <Provider store={store}>
     
          <div className="App">
        <div className="container">
        <Postform />
        <Posts />
           
               
        
      
        
       
        </div>
        
      </div>
  
      
    </Provider>
    
  );
}
// in this case parent passes props to children component 
//if a child component wants to talk to a parent component ?
//we use props,but we pass in a reference to a method as props to the child component 
export default App;
