import React, { Component } from "react";

class Layout extends Component{
    render(){
        return <div>
            Layout
            <Content></Content>
        </div>
    }
}

function Content(){
    return <div>
        Content
    </div>
}

const Footer = ()=>{
    return <div>
        Footer
    </div>
}

export default class App extends Component{
    render(){
        return <div>
            <h2>App</h2>
            <Layout></Layout>
            <Footer></Footer>
        </div>
    }
}