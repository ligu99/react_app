import React, { Component } from 'react'

export default class App extends Component {
  // state 是固定的写法
  state={
    name:"",
    nameLog:""
  }
  nameRef=React.createRef()

  render() {
    return (
      <div>
        <h1>App</h1>
        <div>
          <input type="text" ref={this.nameRef}></input>
          <button onClick={()=>this.handleClick()}>add</button>
        </div>
        <span>名字：{this.state.name}</span>
        <div>記錄：{this.state.nameLog}</div>
      </div>
    )
  }

  handleClick = () =>{
    let name = this.nameRef.current.value;
    if(name){
      // 需要用setState修改狀態值
      this.setState({
        name:name,
        nameLog:this.state.nameLog+name+"，"
      })
    }
  }
}
