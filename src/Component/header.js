
import './header.css'
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux'
import  {filterByName,filterByRating} from '../actions/actions.js'
import React, { Component } from 'react'

class Search extends Component {
    state={
      filtre:"",
      rating:0 ,
      
    }
    handelChange=(input)=>{
        this.setState( {filtre:input})
      }
      onStarClick=(nextValue)=> {
        this.setState({rating: nextValue});
      }
    render() {
        return (
            <div className="star-input">
            <div className="header">
            
                <StarRatingComponent className="star" 
          name="rate1" 
          starCount={5}
          
          onStarClick={(this.props.findbyRate(this.state.rating),this.onStarClick)}
          
        /> 
                
                <input type="search" id="site-search" name="q" 
       aria-label="Search through site content" placeholder="Search for movies..." onChange={(e)=>{this.props.findbyName(e.target.value)}} />


            </div>
            </div>
        )
    }
}
// const mapStateToProps=(state)=>({
//   filmSearch:state.filmSearch
// })
const mapDispatchToProps = dispatch => {
  return{
    findbyName:(filmSearch)=> dispatch(filterByName(filmSearch)),
    findbyRate:(payload)=> dispatch(filterByRating(payload))
 }
  }
 ;
export default connect(null, mapDispatchToProps)(Search);
