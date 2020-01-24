import React, { Component } from "react";
import Movie_card from "./movie-card.js";
import { connect } from "react-redux";
import "./movie-list.css";
import Example from "./modal";

class Movie_liste extends Component {
  state = {
    filmSearch: ""
  };

  render() {
    return (
      <div className="movie-list">
        {this.props.Movies.filter(el =>el.title.toUpperCase().includes(this.props.filmsearch.toUpperCase()) &&
            (el.rate >= this.props.rateSearch)).map(el => (
              <Movie_card key={el.id} card={el} />
            ))
        }
        <Example />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Movies: state.Movies,
  filmsearch: state.filmSearch,
  rateSearch: state.rateSearch
});

export default connect(mapStateToProps)(Movie_liste);
