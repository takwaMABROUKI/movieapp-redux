import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import  {editMovie} from '../actions/actions.js'
import './edit.css'

class Edit extends Component {
  state={
    _id:this.props.card._id,
    title:this.props.card.title,
    year:this.props.card.year,
    images:{poster:this.props.card.images.poster},
    rating:{watching:this.props.card.rating.watching},
    show:false
  }
   handleClose = () =>this.setState({show:false}) 
    
;
   handleShow = () => this.setState({show:true});

   handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  handleChangePoster=(e)=>{
    this.setState({
        images:{poster:e.target.value}
    })
  }
  handleChangeRating=(e)=>{
    this.setState({
        rating:{watching: e.target.value}
    })
  }
  setMovies=(id)=>{
    let newFilm={
      _id:this.state._id,
      title:this.state.title,
      year:this.state.year,
      images:{poster:this.state.images.poster},
      rating:{watching:this.state.rating.watching}
    }
    this.props.handleEdit(id, newFilm)
  }
  render() {
    const {title,year,images,rating}=this.state
    return (
      <div className="cadre">
      <>
      <Button variant="primary" className="edit" onClick={this.handleShow}>
        Edit
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
      
          
        
        <Modal.Body className="titre"><input className="input"  placeholder="Inserer l'image" name="images" type="text" onChange={this.handleChangePoster} value={this.state.images.poster}/></Modal.Body>
      
        
        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer le titre" name="title"type="text" onChange={this.handleChange} value={this.state.title}/></Modal.Body>
      
        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer l'année de sortie"  name="year" type="text" onChange={this.handleChange}  value={this.state.year}/></Modal.Body>

        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer le rate"  name="rating" type="text" onChange={this.handleChangeRating}  value={this.state.rating.watching}/></Modal.Body>

        <Modal.Footer>
         <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.handleClose();
          this.setMovies(this.props.card._id)
          
          
          
          }}>
           Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
}
}
const mapDispatchToProps = dispatch => {
  return{
           handleEdit:(id, newMovie)=> dispatch(editMovie(id, newMovie))
 
  }
}
export default connect(null, mapDispatchToProps)(Edit);

  