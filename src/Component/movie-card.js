import'./movie-card.css'
import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux'
import  {deleteMovie,editMovie} from '../actions/actions.js'
import Edit from './edit'
import {Link} from 'react-router-dom'

 class Movie_card extends Component {
   state={

   }
    render() {
        return (
            <div className="movie-card">
            
               <div className="movie">
            <div className="detail">
                <img className="img-film" src= {this.props.card.images.poster}/>
                <h2 className="titre">{this.props.card.title}</h2> 
                <p className="year">{this.props.card.year}</p> 
                <StarRatingComponent className="rating"
          name="rate1" 
          starCount={5}
          value={this.props.card.rating.watching}/>
          
        
               <div>
                <Link to={"/" +this.props.card._id}>
                <button className="description"> Movie Description</button>
                </Link>
                </div>
           </div>
           <div className="bouton-bas"> 

                <Edit className="bouton-edit" 
                   card={this.props.card}
               />
               
               



                <button className="bouton-remove" onClick={()=>this.props.handleDelete(this.props.card._id)}>Remove
                </button>
           </div>
           </div>
        
        </div>
        )
    }
}

 const mapDispatchToProps = dispatch => {
     return{
        handleDelete: (_id) => dispatch(deleteMovie(_id)),
      
    
    }
     }
    ;
 export default connect(null, mapDispatchToProps)(Movie_card);