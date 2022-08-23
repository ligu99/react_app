import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SonA extends Component {
  static propTypes = {
    list: PropTypes.array 
  }
  // 默認值
  static defaultProps = {
    list: []
  }
  render() {
    let { list } = this.props
    return (
      <div>
        {list.map(item=>{
          return <div key={item.id} onClick={()=>this.setDetail(item)}>src:{item.src}</div>
        })}
      </div>
    )
  }
  setDetail =(item)=>{
    this.props.getDetail(item)
  }
}
