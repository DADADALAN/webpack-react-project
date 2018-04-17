
import React, { Component } from 'react';
import imgConfig from '../../config/imgConfig'

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
        alert("onclick!")
    }

    render() {
        let {title} = this.state

        return (
            <div className="home">
                <div id="res" onClick={this.handleOnClick.bind(this)}>Click!</div>
                <p className="title">ONE</p>
                <img src={imgConfig["i01"]} alt=""/>
            </div>
        )
    }
}

