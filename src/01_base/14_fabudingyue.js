import React, { Component } from 'react'
import axios from "axios"
import PropTypes from 'prop-types'
import {bus} from "./14_bus"

export default class App extends Component {
    constructor() {
        super()
        this.state={
            dataList:[],
            itemDetail:{}
        }
        axios.get("/testdata.json").then(res => {
            // console.log(res.data.data.itemlist);
            let {itemlist} = res.data.data
            this.setState({
                dataList:itemlist
            })
        })
    }
    render() {
        return (
            <div>
                <h1>APP</h1>
                {this.state.dataList.map(it=>{
                    return <SonA key={it.id} item={it}></SonA>
                })}
                <div>----------------------------</div>
                <SonB></SonB>
            </div>
            
        )
    }
    getDetail = (item) =>{
        this.setState({
            itemDetail:item
        })
    }
}

class SonA extends Component {
    render() {
      let { item } = this.props
      return (
        <div onClick={()=>{
            // console.log(item);
            bus.publish(item)
        }}>
          src:{item.src}
        </div>
      )
    }
}

class SonB extends Component {
    constructor(){
        super()
        this.state={
            itemDetail:{}
        }
        bus.subscribe((item)=>{
            this.setState({
                itemDetail:item
            })
        })
    }
    render() {
      return (
        <div>
            <div>src:{this.state.itemDetail.src}</div>
        </div>
      )
    }
  }
/**
 * 先訂閲，后發佈；否則發佈了也看不到，因爲訂閱者還沒有訂閲
 */