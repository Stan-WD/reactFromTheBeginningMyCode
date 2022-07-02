import React, { Component } from 'react';

class StatePractice extends Component{

    constructor(){
        
        super();

        this.state = {
            message: "",
            imageWidth: ""
        }

    }

    handleFocus = (event)=>{
        this.setState({
            message: "By filling out the form, you agree to the site Terms of Service."
        })
    }

    handleMouseEnter = (event)=>{
        this.setState({
            message: ""
        })
    }

    handleLoad = (event)=>{
        console.dir(event.target)
        if(event.target.width > 100){
            console.log("Your image is large!")
        }
    }

    render(){
        return(
            <div>
                <input onFocus={this.handleFocus} type="text"/>
                <h3 onMouseEnter={this.handleMouseEnter}>{this.state.message}</h3>
                <img onLoad={this.handleLoad} src="https://en.wikipedia.org/wiki/File:React-icon.svg"/>
            </div>
        )
    }
}

export default StatePractice;