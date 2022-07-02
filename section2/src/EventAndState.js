import React, { Component } from 'react';

class EventAndState extends Component{
    constructor(){
        super();
        this.state = {
            inputText: ""
        }

        // this.handleChange = this.handleChange.bind(this);
    
        // Alternative solution to using the => function in resolving new, local scope of 'this' keyword
        // as defined in traditional function
    }

    handleClick = ()=>{
        console.log("Test")

        this.setState({
            inputText: ""
        })
    }

    handleChange = (event)=>{
        // console.dir(event.target.value)
        // this.state.inputText = event.target.value This is BAD!!!
        console.log(this.state.inputText)

        this.setState({
            inputText: event.target.value
        })
    }

    handleSubmit = (event)=>{
        console.log("Form submitted")
        event.preventDefault();

        this.setState({
            inputText: "State is cool"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.inputText}</h1>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick} className="btn">Click Me!</button>
                    <input onChange={this.handleChange} type="text" placeholder="Enter some text!"/>
                </form>
            </div>
        )
    }
}

export default EventAndState;