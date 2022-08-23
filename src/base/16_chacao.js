import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
            {/* 123 需要有插槽才會顯示出來 */}
            <div>123</div>
        </Child>
      </div>
    )
  }
}

class Child extends Component {
    render() {
      return (
        <div>
            Child
            {/* 定義插槽 */}
          {this.props.children}
        </div>
      )
    }
  }