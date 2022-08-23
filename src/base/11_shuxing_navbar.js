import React, { Component } from 'react'
import initPropTypes from 'prop-types'

export default class Navbar extends Component {
    // propTypes 注意大小寫 
    static propTypes = {
        title: initPropTypes.string,
        show: initPropTypes.bool
    }
    // 默認值
    static defaultProps={
        show:true
    }
    render() {
        let { title,show } = this.props
        return (
            <div>
                Navbar {title}
                {show? <div>show</div>:null}
            </div>
        )
    }
}
// 類屬性，接受參數的屬性
// Navbar.prototype = {
//     title:PropTypes.string
// }