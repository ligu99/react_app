import React, { Component } from 'react'
import "./01.css"
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      nameLog: "",
      list: [],
      inputValue:""
    }
    this.nameRef = React.createRef()
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <div>
          <input type="text" value={this.state.inputValue} onChange={(e)=>{
            this.setState({
              inputValue:e.target.value
            })
          }}></input>
          <button onClick={() => this.handleClick()}>add</button>
        </div>
        <span>名字：{this.state.name}</span>
        <div>記錄：{this.state.nameLog}</div>
        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item + index}>
                <span className='w100'>{item}</span>
                <button onClick={() => this.handleDel(item)}>del</button>
              </li>
            )
          }
        </ul>
        {this.state.list.length > 0 ? null : <div>list is null</div>}

        {/* 直接渲染html，类似vue的v-html */}
        <div dangerouslySetInnerHTML={
          { __html: "<b>123</b>" }
        }></div>
      </div>
    )
  }

  handleClick = () => {
    if (this.state.inputValue) {
      let newLog = "";
      if (this.state.nameLog) {
        newLog = this.state.nameLog + "," + this.state.inputValue
      } else {
        newLog = this.state.inputValue;
      }
      //不推薦以下寫法   
      //   this.state.list.push(name)
      // 推薦
      let newList = [...this.state.list];
      newList.push(this.state.inputValue);
      // 需要用setState修改態值
      this.setState({
        name: this.state.inputValue,
        nameLog: newLog,
        // list:this.state.list
        list: newList
      })
      this.state.inputValue = ""
    }
  }
  handleDel = (item) => {
    console.log("del", item);
    let newList = this.state.list.filter(it => it !== item)
    this.setState({
      list: newList
    })
  }
}
