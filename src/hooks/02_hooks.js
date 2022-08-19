import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function App() {


    // 调用useState(),得到的是一个数组，第一个是传入的值，第二个是修改值的方法
    const [state, setState] = useState("test");
    const [value, setValue] = useState(1);
    const [dataList, setList] = useState([{ src: "1" }, { src: "2" }])
    const handleClick = () => {
        let newValue = value + 1;
        setValue(newValue);
    }

    // 解决无限请求的问题
    useEffect(() => {
        axios.get("/testdata.json").then(res => {
            setList(res.data.data.itemlist)
        })
    }, [])//传空数组

    return (
        <div>
            <h1>APP</h1>
            {state}-{value}
            <button onClick={handleClick}>点击</button>
            <button onClick={handleClick}>获取数据</button>
            <div>
                <ul>{dataList.map(item => {
                    return <li key={item.src}>{item.src}</li>
                })}</ul>
            </div>
        </div>
    )
}
