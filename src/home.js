import React from 'react';
import Movie_liste from './Component/Movie-liste.js'
import Search from './Component/header'
import { Route } from "react-router-dom";
import './App.css';


function Home() {
  
  return (
    <div className="App">
    <Search />
    <Movie_liste />
      
      
      
    </div>
  );
}

export default  Home;
    
