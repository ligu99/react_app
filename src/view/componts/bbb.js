import React, { useEffect, useState } from 'react'
import store from '../../redux/store'
import getDataAction from "../../redux/actions/homeAction"

export default function Bbb() {
  const [activePage,setActivePage] =useState(store.getState().HomeReducer.activePage)
  const [dataList] =useState(store.getState().OthenReducer.list)
  useEffect(()=>{
    store.dispatch({
      type:"in-test-bbb"
    })
    setActivePage(store.getState().HomeReducer.activePage)
    if(store.getState().OthenReducer.list.length===0){
      console.log(1);
      store.dispatch(getDataAction())
    }
    return ()=>{
      store.dispatch({
        type:"out-test-bbb"
      })
    }
  },[])

  return (
    <div>
      <h2>B-{activePage}</h2>
      <ul>
        {dataList.map(item=>{
          return <li key={item.src}>{item.src}</li>
        })}
      </ul>
    </div>
  )
}
