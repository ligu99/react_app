import React, { Component } from 'react'

import {HashRouter,Redirect,Route, Switch,BrowserRouter} from "react-router-dom"

import Home from '../view/home'
import About from '../view/about'
import Layout from '../view/layout'
import NotFount from "../view/404"

export default class InitRoute extends Component {
  render() {
    return (
      // BrowserRouter 路径没有#号会到后端请求页面，需要后端配置对应路径，否则404
        // <BrowserRouter>
        <HashRouter>
            {/* Switch 解決刷新頁面重定向到home頁面的問題 */}
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/layout" component={Layout} />
                {/* 重定向 模糊匹配 */}
                {/* <Redirect from='/' to="/home" /> */}
                {/* 重定向 精確匹配 */}
                <Redirect from='/' to="/home" exact />
                
                <Route component={NotFount}/>
            </Switch>
        </HashRouter>
    )
  }
}