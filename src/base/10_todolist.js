import React, { Component } from 'react'
import "./01.css"
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      nameLog: "",
      list: []
    }
    this.nameRef = React.createRef()
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <div>
          <input type="text" ref={this.nameRef}></input>
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
    let name = this.nameRef.current.value;
    if (name) {
      let newLog = "";
      if (this.state.nameLog) {
        newLog = this.state.nameLog + "," + name
      } else {
        newLog = name;
      }
      //不推薦以下寫法   
      //   this.state.list.push(name)
      // 推薦
      let newList = [...this.state.list];
      newList.push(name);
      // 需要用setState修改態值
      this.setState({
        name: name,
        nameLog: newLog,
        // list:this.state.list
        list: newList
      })
      this.nameRef.current.value = ""
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
