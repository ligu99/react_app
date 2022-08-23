import React, { Component } from 'react'

export default class App extends Component {
  oneRef = React.createRef();
  render() {
    return (
      <div>
        <h1>App</h1>
        <div>
            {/* refs已被弃用 */}
            {/* <input type="text" ref="one"></input> */}
            <input type="text" ref={this.oneRef}></input>
            <button onClick={()=>this.handleClick4()}>add</button>
        </div>
      </div>
    )
  }

  handleClick4 = ()=>{
    console.log(1);
    // console.log(this.refs.one.value); //refs已被弃用
    console.log(this.oneRef.current.value); //refs已被弃用,需要在变量声明ref
  }
}
