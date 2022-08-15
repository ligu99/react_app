import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
            <input type="text"></input>
            <button onClick={()=>{
                console.log(1)
            }}>add</button>
        </div>
        <div>
            <input type="text"></input>
            {/* 以下写法，函数后不能加（） */}
            <button onClick={this.handleClick}>add2</button>
        </div>
        <div>
            <input type="text"></input>
            {/* 以下写法，函数后不能加（） */}
            <button onClick={this.handleClick3}>add3</button>
        </div>
        <div>
            <input type="text"></input>
            <button onClick={()=>{
                this.handleClick4()
            }}>add4</button>
        </div>
      </div>
    )
  }

  handleClick(){
    console.log(2);
  }

  handleClick3 = ()=>{
    console.log(3);
  }

  handleClick4 = ()=>{
    console.log(4);
  }
}
