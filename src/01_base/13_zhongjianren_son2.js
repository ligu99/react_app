import React, { Component } from 'react'

export default class SonB extends Component {
  render() {
    let { itemDetail } = this.props
    return (
      <div>
        <div>src:{itemDetail.src}</div>
        <div>sizes:{itemDetail.sizes}</div>
      </div>
    )
  }
}
