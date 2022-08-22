// useCallback 防止因爲組件從新渲染，導致方法重新創建，起到緩存作用，只用第二個參數變了，才從新聲明一次
import React, { useEffect,useCallback, useState } from 'react'
export default function App() {
    const [text, setText] = useState("");
    const [dataList, setList] = useState(["1" ,  "2"])

    const handleChane = useCallback((evt)=>{
        setText(evt.target.value)
    },[])

    const handleAdd = useCallback(()=>{
        setList([...dataList,text])
        setText("")
    },[dataList,text])//如果傳空數組，那會一直拿到初始值，所以要傳依賴
    return (
        <div>
            <input onChange={handleChane} value={text}></input>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {dataList.map(item=><li key={item}>src:{item}</li>)}
            </ul>
        </div>
    )
}