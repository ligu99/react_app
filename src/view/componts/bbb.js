import React, { useEffect, useState } from 'react'
import store from '../../redux/store'

export default function Bbb() {
  const [activePage,setActivePage] =useState(store.getState().activePage)
  
  useEffect(()=>{
    store.dispatch({
      type:"in-test-bbb"
    })
    setActivePage(store.getState().activePage)
    return ()=>{
      store.dispatch({
        type:"out-test-bbb"
      })
    }
  },[])

  return (
    <div>B-{activePage}</div>
  )
}
