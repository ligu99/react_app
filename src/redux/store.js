// 1.引入redux
// createStore(reducer)

import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import HomeReducer from './reducers/home'
import OthenReducer from './reducers/other'

// reduxThunk中间件，解决异步异步请求的问题
import reduxThunk from "redux-thunk"
// const reducer =(prevState={
//     activePage:""
// },action)=>{
//     let newState={...prevState}
//     switch(action.type){
//         case "in-test-bbb":
//             newState.activePage="bbb"
//             return newState
//         case "out-test-bbb":
//             newState.activePage="aaa"
//             return newState
//         default:
//             return prevState
//     }
    
// }

const reducer = combineReducers({HomeReducer,OthenReducer}) 

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store


/**
 * reducers 模塊化
 import HomeReducer from './reducers/home'
 import OthenReducer from './reducers/other'
 const reducer = combineReducers({HomeReducer,OthenReducer}) 

 const store = createStore(reducer)
 export default store

 組件調用：
 store.dispatch({type:"xxx",payload:"yyy"})
 store.getState().activePage.HomeReducer.activePage

  
 */