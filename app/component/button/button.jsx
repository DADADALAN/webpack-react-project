
import React, { Component } from 'react';
import './css/main.scss';

export default class Greeter extends Component {
    constructor(obj) {
        super(obj);
        this.state = {
            
        }
    }

    componentWillMount(){

    }

    handleOnClick(){
        this.props.callback()
    }

    render() {
        let {title} = this.state
        let props = this.props
        let value = props.value || "Submit"

        return (
            <div className="component-button">
                <a className="button-submit" onClick={this.handleOnClick.bind(this)}>{value}</a>
            </div>
        )
    }
}

