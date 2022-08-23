import React, { Component } from 'react'
import axios from "axios"

const GlobalContext = React.createContext()

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
            <GlobalContext.Provider value={{ 
                itemDetail:this.state.itemDetail,
                changeDetail:(value)=>{
                    this.setState({
                        itemDetail:value
                    })
                }
            }}>
            <div>
                <h1>APP</h1>
                {this.state.dataList.map(it=>{
                    return <SonA key={it.id} item={it}></SonA>
                })}
                <div>----------------------------</div>
                <SonB></SonB>
            </div>
            </GlobalContext.Provider>
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
      let {item} =this.props;
      return (
        <GlobalContext.Consumer>
            {
                (value)=>{
                    return  <div onClick={()=>{
                                value.changeDetail(item)
                            }}> src:{item.src}
                            </div>
                }
            }
        </GlobalContext.Consumer>
      )
    }
}

class SonB extends Component {
    render() {
      return (
        <GlobalContext.Consumer>
            {(value)=><div>
                    <div>src:{value.itemDetail.src}</div>
                </div>}
        </GlobalContext.Consumer>
      )
    }
  }