// useRef
import React, { useEffect,useCallback,useMemo, useState, useRef } from 'react'
export default function App() {
    const [text, setText] = useState("");
    const [dataList, setList] = useState([1 ,  2])

    const myref = useRef()

    const myNum = useRef(0)

    const handleChane = useCallback((evt)=>{
        setText(evt.target.value)
    },[])

    const handleAdd = useCallback(()=>{
        let numTest=Number(text)
        setList([...dataList,numTest])
        setText("")
    },[dataList,text])//如果傳空數組，那會一直拿到初始值，所以要傳依賴

    const getSum=useMemo(()=>{
        let sum=0
        dataList.forEach(item=>{
            sum+=item
        })
        return sum
    },[dataList])
    
    return (
        <div>
            <input onChange={handleChane} value={text}></input>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {dataList.map(item=><li key={item}>src:{item}</li>)}
            </ul>
            <div>{getSum}</div>
            <div>
                <input ref={myref}></input>
                <button onClick={()=>{
                    console.log(myref.current.value);
                }}>getValue</button>
            </div>
            <div>Number:{myNum.current}</div>
            <button onClick={()=>{
                    myNum.current++ //這裏添加了，不會重新渲染，因爲沒有對應的set方法
                }}>AddNum</button>
        </div>
    )
}