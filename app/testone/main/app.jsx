
import React, { Component } from 'react';
import imgConfig from 'config/imgConfig'
import add from 'common/js/add'
import Button from 'component/button/button'

import { getInfo, postInfo } from '../js/action'
import { get, post } from "common/js/http"

export default class App extends Component {
    constructor(obj) {
        super(obj);
        this.state = {
            title: "webpack-react",
            userInfo: {},
            info: {}
        }
    }

    componentWillMount(){
        let _this = this
        document.title = this.state.title 

        get("http://vipshop.tech/mock/185/api/user-info")
        .then((json) => {
            _this.setState({ userInfo: json.data })
        })
        
    }

    handleOnClick(){
        let _this = this
        let sum = add(2,4)
        alert(`2 + 4 = ${sum}`)
        post("http://vipshop.tech/mock/185/api/vippay-pay", {
            a: 1,
            b: 2
        })
        .then(json => {
            console.log(json)
            _this.setState({ info: json.data })
        })
    }

    render() {
        let { title, userInfo } = this.state
        console.log(userInfo)

        return (
            <div className="app-wrap">
                <img src={imgConfig["i01"]} alt=""/>
                <div className="title" onClick={this.handleOnClick.bind(this)}>Are u ready ?</div>
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

