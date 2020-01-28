import React, { Component } from "react";
import Movie_card from "./movie-card.js";
import { connect } from "react-redux";
import {fetchMovies} from '../actions/actions'
import "./movie-list.css";
import Example from "./modal";

class Movie_liste extends Component {

  componentDidMount(){
    this.props.fetchMovies()
  }


  render() {
    
      console.log(this.props.movies)
    return (
      <div className="movie-list">
        { this.props.movies.filter(el =>el.title.toUpperCase().includes(this.props.filmsearch.toUpperCase()) &&
            (el.rating.watching >= this.props.rateSearch)) 
            
            .map(el => (
              <Movie_card key={el._id} card={el} />
            ))
        }
        <Example />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.Movies,
  filmsearch: state.filmSearch,
  rateSearch: state.rateSearch
});

export default connect(mapStateToProps,{fetchMovies})(Movie_liste);
