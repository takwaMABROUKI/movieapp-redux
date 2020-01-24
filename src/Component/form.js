import React, { Component } from 'react'
import {connect} from 'react-redux'
import'./form.css'


 class Form extends Component {
    state={
        id:"",
        title: "",
        year : "",
        image : "",
        rate : ""
        }
    
           handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
          }
    render() {
        return (
            <div className="box-movie">
              <form id="add-movie" action="#" method="post">
                <input className="input" name="title"type="text" onChange={this.handleChange} value={this.state.title}/>
                <input className="input
                " name="image" type="text" onChange={this.handleChange} value={this.state.imgage}/>
                <input className="input" name="rate" type="text" onChange={this.handleChange}  value={this.state.rate}/>
                
                </form>
                <button> Add</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    
});
  export default connect(null, mapDispatchToProps)(Form);

    