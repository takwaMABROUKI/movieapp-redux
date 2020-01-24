import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import  {editMovie} from '../actions/actions.js'
import './edit.css'

class Edit extends Component {
  state={
    title:"",
    year:"",
    image:"",
    rate:"",
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
  render() {
    const {title,year,image,rate}=this.state
    return (
      <div className="cadre">
      <>
      <Button variant="primary" className="edit" onClick={this.handleShow}>
        Edit
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
      
          
        
        <Modal.Body className="titre"><input className="input"  placeholder="Inserer l'image" name="image" type="text" onChange={this.handleChange} value={this.state.image}/></Modal.Body>
      
        
        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer le titre" name="title"type="text" onChange={this.handleChange} value={this.state.title}/></Modal.Body>
      
        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer l'année de sortie"  name="year" type="text" onChange={this.handleChange}  value={this.state.year}/></Modal.Body>

        
        <Modal.Body className="titre"><input className="input" placeholder="Inserer le rate"  name="rate" type="text" onChange={this.handleChange}  value={this.state.rate}/></Modal.Body>

        <Modal.Footer>
         <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{this.handleClose();this.props.handleEdit(this.props.card.id,this.state.title,this.state.year,this.state.image,this.state.rate)}}>
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
           handleEdit:(id,title,year,image,rate)=> dispatch(editMovie(id,title,year,image,rate))
 
  }
}
export default connect(null, mapDispatchToProps)(Edit);

  