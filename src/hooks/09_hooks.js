// useReducer
import React, { useReducer,useContext } from 'react'

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

const GlobalContext = React.createContext()

export default function App() {
    const [state, dispatch] = useReducer(redcuer, intialState)
    return (
        <GlobalContext.Provider value={{ 
            state,
            dispatch
        }}>
        <div>
            <h1>App</h1>
           
            <button onClick={()=>{
                dispatch({type:"mius"})
            }}> - </button>
            <div>{state.count}</div>
            <button onClick={()=>{
                dispatch({type:"add"})
            }}> + </button>

            <SonA></SonA>
            <SonB></SonB>
        </div>
        </GlobalContext.Provider>
    )
}

function SonA(){
    const {state,dispatch}= useContext(GlobalContext)
    return(
        <div>
            <p>A</p>
            <button onClick={()=>{
                dispatch({type:"mius"})
            }}> - </button>
        </div>
    )
}

function SonB(){
    const {dispatch}= useContext(GlobalContext)
    return(
        <div>
            <p>B</p>
            <button onClick={()=>{
                dispatch({type:"add"})
            }}> + </button>
        </div>
    )
}