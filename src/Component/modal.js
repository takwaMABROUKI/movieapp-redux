import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import  {addNewMovie} from '../actions/actions.js'
import './modal.css'

class Example extends Component {
  state={
    title:"",
    year:"",
    image:"",
    rate:"",
    id:"",
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
      <Button variant="primary" className="add" onClick={this.handleShow}>
        +
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
          {/* <Button variant="primary" onClick={()=>{this.handleClose();this.props.handleAdd(this.state)}}>
            ADD
          </Button> */}
          <Button variant="primary" onClick={()=>this.props.handleAdd({id:Date.now(),
            title:this.state.title,
            year:this.state.year,
            image:this.state.image,
            rate:this.state.rate
            
            })}>
            ADD
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
     handleAdd: (payload) => dispatch(addNewMovie(payload)),
   
 }
  }
 
export default connect(null,mapDispatchToProps)(Example);

  