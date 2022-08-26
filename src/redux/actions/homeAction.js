import axios from "axios"
function getDataAction(){
    return (dispatch)=>{
        axios.get("/testdata.json").then(res=>{
            dispatch({
                type:"set-list",
                payload:res.data.data.itemlist
            })
        })
    }
}

export default getDataAction

/**
 * 组件调用
 * import getDataAction from "..."
 * store.dispatch(getDataAction())
 */