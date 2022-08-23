import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      nameLog:""
    }
    this.nameRef=React.createRef()
  }

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
      let newLog = "";
      if(this.state.nameLog){
        newLog = this.state.nameLog+","+name
      }else{
        newLog = name;
      }
      // 需要用setState修改態值
      this.setState({
        name:name,
        nameLog: newLog
      })
      this.nameRef.current.value=""
    }
  }
}
