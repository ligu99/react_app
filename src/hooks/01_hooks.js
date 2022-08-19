import React, { useState } from 'react'

export default function App() {


    // 调用useState(),得到的是一个数组，第一个是传入的值，第二个是修改值的方法
    const [state, setState] = useState("test");
    const [value, setValue] = useState(1);
    const handleClick = () => {
        let newValue = value + 1;
        setValue(newValue);
    }
    return (
        <div>
            <h1>APP</h1>
            {state}-{value}
            <button onClick={handleClick}>点击</button>
        </div>
    )
}
