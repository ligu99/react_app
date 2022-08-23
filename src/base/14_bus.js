export const bus = {
    list:[],
    // 訂閲
    subscribe(callaback){
        this.list.push(callaback)
    },
    // 發佈
    publish(text){
        this.list.forEach(callaback=>{
            callaback && callaback(text)
        })
    }
}