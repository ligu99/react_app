const OthenReducer =(prevState={
    list:[]
},action)=>{
    console.log(action.payload);
    let newState={...prevState}
    switch(action.type){
        case "set-list":
            newState.list=action.payload
            return newState
        default:
            return prevState
    }
    
}

export default OthenReducer