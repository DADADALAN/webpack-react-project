
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
        let num = "wsddddcfvvc"
        let reg = /^\d{11}$/
        console.log(reg.test(num))
    }

    render() {
        let {title} = this.state

        return (
            <div className="home">
                <div id="res" onClick={this.handleOnClick.bind(this)}>Click!</div>
                <p className="title">ONE</p>
            </div>
        )
    }
}

