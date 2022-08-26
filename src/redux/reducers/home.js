const HomeReducer =(prevState={
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

export default HomeReducer