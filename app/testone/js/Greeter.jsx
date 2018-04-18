
import React, { Component } from 'react';
import imgConfig from '../../config/imgConfig'
import add from 'js/add'
import Button from 'component/button/button'

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
        let sum = add(2,4)
        alert(`2 + 4 = ${sum}`)
    }

    render() {
        let {title} = this.state

        return (
            <div className="home">
                <div id="res" onClick={this.handleOnClick.bind(this)}>Click!</div>
                <p className="title">ONE</p>
                <img src={imgConfig["i01"]} alt=""/>
                <Button
                    value={"Go"}
                    callback={() => {
                        window.location.href = "./testtwo.html"
                    }}
                />
            </div>
        )
    }
}

