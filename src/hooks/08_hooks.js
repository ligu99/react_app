// useReducer
import React, { useReducer } from 'react'

// 處理函數
const redcuer = (prevState,action) => {
    let oldState ={...prevState}
    switch(action.type){
        case "mius":
            oldState.count--
            return oldState
        case "add":
            oldState.count++
            return oldState
        default:
            return prevState
    }
}
const intialState={
    count:0
}

export default function App() {
    const [state, dispatch] = useReducer(redcuer, intialState)
    return (
        <div>
            <h1>App</h1>
           
            <button onClick={()=>{
                dispatch({type:"mius"})
            }}> - </button>
            <div>{state.count}</div>
            <button onClick={()=>{
                dispatch({type:"add"})
            }}> + </button>
        </div>
    )
}
