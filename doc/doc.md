**setState 的更新机制**
1. 在异步的逻辑中，同步更新状态，同步更新真实dom
2. 在同步的逻辑中，异步更新状态，更新真实dom


```
//异步
handelPrint(){
    setTimeout(()=>{
        this.setState({

        })
        console.log(this.state.xxx)
    },0)
}
//同步
handelPrint(){
    this.setState({
    
    })
    console.log(this.state.xxx)
}

```

**setState 接受第二个参数，第二个参数是回调函数，状态和dom都已更新完**

handelPrint(){
    this.setState({
    
    },()=>{console.log(this.state.xxx)})
    
}

