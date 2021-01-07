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

export default App;
