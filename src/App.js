import React from 'react';
import Movie_liste from './Component/Movie-liste.js'
import Search from './Component/header'
import {Route } from 'react-router-dom'
import Description from './Component/description'
import Home from './home'
import './App.css';




function App() {
  
  return (
    <div >
      
      <Route exact path='/' component={Home}/>
      <Route exact path='/:_id' component={Description}/>

     
      
      
      
    </div>
  );
}

export default App;
