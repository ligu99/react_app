import React, { Component } from 'react'
import "./01.css"

export default class App extends Component {
  render() {
    let a = "abc";
    let style = {
      fontSize:"24px"
    }
    return (
      <div>
        <h1>App</h1>
        <div style ={style} >{a}</div>
        <span style={{fontSize:"24px"}}>
          {1+1}
        </span>
        <div className='green_bg'>3</div>
        <label htmlFor='username'>UserName:</label>
        <input placeholder='UserName' id="username"></input>
        {/* 这是一行注释 */}
      </div>
    )
  }
}
