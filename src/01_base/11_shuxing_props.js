import React, { Component } from 'react'
import Navbar from './11_shuxing_navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="Test1" show={true} />
        <Navbar title="Test2" show={false} />
        <Navbar title="Test3"/>
      </div>
    )
  }
}
