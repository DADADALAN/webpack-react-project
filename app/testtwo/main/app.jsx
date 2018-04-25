
import React, { Component } from 'react';

export default class App extends Component {
    constructor(obj) {
        super(obj);
        this.state = {
            title: "webpack-react"
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
            <div className="app-wrap">
                <div className="title" onClick={this.handleOnClick.bind(this)}>Just kidding!</div>
            </div>
        )
    }
}

