import React, { Component } from 'react'

export default class App extends Component {
  a=100;
  render() {
    return (
      <div>
        <div>
            <input type="text"></input>
            <button onClick={()=>{
                console.log(1,this.a)
            }}>add</button>
        </div>
        <div>
            <input type="text"></input>
            {/* 以下写法，函数后不能加（） */}
            {/* <button onClick={this.handleClick}>add2</button> */}
            {/* this指向有问题，this.a 會報錯，用bind修正，
                call：改变this,自动执行函数
                apply：改变this，自动执行函数
                bind：改变this,手动执行函数
            */}
            <button onClick={this.handleClick.bind(this)}>add2</button>
        </div>
        <div>
            <input type="text"></input>
            {/* 以下写法，函数后不能加（） */}
            <button onClick={this.handleClick3}>add3</button>
        </div>
        <div>
            <input type="text"></input>
            {/* 以下写法，函数需要加（） */}
            {/* <button onClick={()=>{this.handleClick4()}}>add4</button> */}
            <button onClick={()=>this.handleClick4()}>add4</button>
        </div>
      </div>
    )
  }

  handleClick(){
    console.log(2,this.a);
  }

  handleClick3 = ()=>{
    console.log(3,this.a);
  }

  handleClick4 = ()=>{
    console.log(4,this.a);
  }
  // React 的点击事件，是绑定在根节点，采用事件代理的方式实现的
}
