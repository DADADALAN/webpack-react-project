
import React, { Component } from 'react';

export default class Greeter extends Component {
    constructor(obj) {
        super(obj);
        this.state = {
            title: "webpack工作流"
        }
    }

    componentWillMount(){
        document.title = this.state.title
    }

    handleOnClick(){

    }

    render() {
        let {title} = this.state

        return (
            <div className="home">
                <div id="res" onClick={() => {console.log("success")}}>Click!</div>
                <p className="title">Hello world! </p>
            </div>
        )
    }
}

