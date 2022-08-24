// 1.引入redux
// createStore(reducer)

import { legacy_createStore as createStore } from 'redux'

const reducer =(prevState={
    activePage:""
},action)=>{
    let newState={...prevState}
    switch(action.type){
        case "in-test-bbb":
            newState.activePage="bbb"
            return newState
        case "out-test-bbb":
            newState.activePage="aaa"
            return newState
        default:
            return prevState
    }
    
}

const store = createStore(reducer)

export default store