import React, { Component } from 'react';

import { v4 as uuidv4 } from "uuid";

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            color: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit(event) {
        event.preventDefault();

        const newBox = {...this.state, id: uuidv4()};
        this.props.createBox(newBox);
        this.setState({
            height: "",
            width: "",
            color: ""
        });
        
    };

    render() {
        return (
           <form onSubmit={this.handleSubmit} >
               <div>
                   <label htmlFor="height">Height</label>
                   <input 
                        type="text" 
                        name="height" 
                        value={this.state.height} 
                        id="height"
                        onChange={this.handleChange}
                   />
               </div>
               <div>
                   <label htmlFor="width">Width</label>
                   <input 
                        type="text" 
                        name="width" 
                        value={this.state.width} 
                        id="width"
                        onChange={this.handleChange}
                   />
               </div>
               <div>
                   <label htmlFor="color">Color</label>
                   <input 
                        type="text" 
                        name="color" 
                        value={this.state.color} 
                        id="color"
                        onChange={this.handleChange}
                   />
               </div>
               <button>Add New Box</button>
           </form>
        )
    }
}

export default NewBoxForm;