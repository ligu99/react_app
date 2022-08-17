import React, { Component } from 'react'

/**
constructor()

static getDerivedStateFromProps(props, state)

shouldComponentUpdate()

render()

componentDidMount()

static getSnapshotBeforeUpdate(prevProps, prevState)

componentDidUpdate()

componentWillUnmount()
*/

export default class App extends Component {
    componentDidMount(){
        // axios
        // 訂閲函數調用
        // setInterval
        // 基於Dom創建完成的操作
    }
    componentWillUnmount(){

    }
    render() {
        return (
            <div>
                <h1>APP</h1>
            </div>
        )
    }
}
