import React, { Component } from 'react'

/**
 * 生命周期
constructor()

static getDerivedStateFromProps(nextprops, nextstate) //初始化和後續更新都會執行

shouldComponentUpdate(nextProps,nextState){ //return true 更新，return false 阻止更新
    if(JSON.stringify(this.state)!==JSON.stringify(nextState)){
        return true
    }
    return false
}

render()

componentDidMount(prevProps,prevState )

static getSnapshotBeforeUpdate(prevProps, prevState)

componentDidUpdate() //更新后獲取Dom

componentWillUnmount()
*/

export default class App extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    
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
