import React, { Component } from 'react'

import InitRoute from "./index"

import store from "../redux/store"
export default class App extends Component {

  state={
    activePage:store.getState().activePage
  }

  componentDidMount(){
    store.subscribe(()=>{
      console.log("store:",store.getState());
      this.setState({
        activePage:store.getState().activePage
      })
    })
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
