// useContext

import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"

const GlobalContext = React.createContext()

export default function App() {
    const [dataList,setList] = useState([])
    const [itemDetail,setDetailt] = useState({})
    useEffect(()=>{
        axios.get("/testdata.json").then(res => {
            // console.log(res.data.data.itemlist);
            let {itemlist} = res.data.data
            setList(itemlist)
        })
    },[])
    return (
        <GlobalContext.Provider value={{ 
            itemDetail:itemDetail,
            changeDetail:(value)=>{
                setDetailt(value)
            }
        }}>
        <div>
            <h1>APP</h1>
            {dataList.map(it=>{
                return <SonA key={it.id} item={it}></SonA>
            })}
            <div>----------------------------</div>
            <SonB></SonB>
        </div>
        </GlobalContext.Provider>
    )
}

function SonA (props) {
    let {item} =props;
    const value =useContext(GlobalContext)
    return  (
        <div onClick={()=>{
            value.changeDetail(item)
        }}> src:{item.src}
        </div>
    )
}

function SonB() {
    const value =useContext(GlobalContext)
    return (
        <div>src:{value.itemDetail.src}</div>
      )
  }