/** 
class Test{
    constructor(){
        this.name="a"
    }
    one(){
        console.log("one");
    }
    two(){

    }
}

let obj = new Test();
obj.one();
console.log(obj.name);

// extends 繼承Test
class SubTest extends Test{
    t(){
        console.log("t");   
    }
}

let obj2 = new SubTest();
obj2.t()
console.log(obj2.name);
*/
import React from "react";

// 類名首字母大寫
class App extends React.Component{
    render(){
        // JSX 表达式必须只有一个父元素。
        return <div>
                    <h2>this is one Component</h2>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
    }
}

export default App