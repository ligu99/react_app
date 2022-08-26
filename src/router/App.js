import React, { Component } from 'react'

import InitRoute from "./index"

import store from "../redux/store"
export default class App extends Component {

  state={
    unSubScribe:"",
    activePage:store.getState().HomeReducer.activePage
  }

  componentDidMount(){
    // 订阅
    this.state.unSubScribe= store.subscribe(()=>{
      console.log("store:",store.getState());
      this.setState({
        activePage:store.getState().HomeReducer.activePage
      })
    })
  }

  componentWillUnmount(){
    // 取消订阅
    this.state.unSubScribe()
  }

  render() {
    return (
      <div>
        <h1>App-{this.state.activePage}</h1>
        <InitRoute></InitRoute>
      </div>
    )
  }
}
