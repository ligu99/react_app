import React, { Component } from 'react'
import axios from "axios"
import SonA from './13_zhongjianren_son1'
import SonB from './13_zhongjianren_son2'
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
                <SonA list={this.state.dataList} getDetail={this.getDetail}></SonA>
                <div>----------------------------</div>
                <SonB itemDetail={this.state.itemDetail}></SonB>
            </div>
            
        )
    }
    getDetail = (item) =>{
        this.setState({
            itemDetail:item
        })
    }
}
