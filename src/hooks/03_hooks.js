import React, { useEffect,useCallback, useState } from 'react'
import axios from 'axios';

export default function App() {


    // 调用useState(),得到的是一个数组，第一个是传入的值，第二个是修改值的方法
    const [state, setState] = useState("test");
    const [value, setValue] = useState(1);
    const [cbValue, setCbValue] = useState(0);
    const [dataList, setList] = useState([{ src: "1" }, { src: "2" }])
    const handleClick = () => {
        let newValue = value + 1;
        setValue(newValue); 
        setState("xiaoming")
    }
    const getData=()=>{
        axios.get("/testdata.json").then(res => {
            setList(res.data.data.itemlist)
        })
        console.log(1);
    }
    const handleClick2 =()=>{
        setState("xiaohong")
    }

    // 解决无限请求的问题
    // useEffect(() => {
    //     axios.get("/testdata.json").then(res => {
    //         setList(res.data.data.itemlist)
    //     })
    // }, [])//传空数组

    useEffect(getData, [])//传空数组，這裏只會執行一次

    useEffect(() => {
        setState(state.substring(0,1).toUpperCase()+state.substring(1));
    }, [state])



    return (
        <div>
            <h1>APP</h1>
            {state}-{value}
            <button onClick={handleClick}>点击</button>
            <button onClick={handleClick2}>点击2</button>
            <button onClick={getData}>获取数据</button>
            <div>
                <ul>{dataList.map(item => {
                    return <li key={item.src}>{item.src}</li>
                })}</ul>
            </div>
            {value <=3? <Child></Child>:null}

            <div>{cbValue}</div>
            <button onClick={handelClick3}>點擊</button>
        </div>
    )
}


function Child(){
    useEffect(()=>{
        let timer = setInterval(() => {
            console.log(1);
        }, 1000);

        // 如果是子組件，在這裏銷毀定時器,類似銷毀前生命周期
        return ()=>{
             clearInterval(timer)
        }
    },[])
    return (
        <div>Child</div>
    )
}