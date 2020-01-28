import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import './description.css'

 class Description extends Component {
    state={
        id: this.props.match.params._id
    }
    
    render() {
      
        const myTab = this.props.movies.filter(el => el._id === (this.state.id));

    if (myTab.length === 0) {
      return <Redirect to="/" />;
    } 
    else {
        const { title, year, images, rating } = myTab[0];

        return (
            <div className="details">

            <img  className="poster" src={images.poster} alt="" />
            <div className="movie-details">
            <p>
              <span>Movie Name:</span> {title}
            </p>
            <p>
              <span>Release Year:</span> {year}
            </p>
            <div className="rate">
            <p>
              <span>Rate:</span>
              
            </p>
            <StarRatingComponent className="rating"
          name="rate1" 
          starCount={5}
          value={rating.watching}/>
          </div>
          </div>

         </div>
        )
    }
}
}
const mapStateToProps = state => ({
  movies: state.Movies,
  
});

export default connect(mapStateToProps)(Description);


