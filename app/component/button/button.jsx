
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
        let value = props.value || ""

        return (
            <div className="component-button">
                <input type="button" value={value} onClick={this.handleOnClick.bind(this)}/>
            </div>
        )
    }
}

