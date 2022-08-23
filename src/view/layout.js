import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import style from "./css/layout.module.css"
import Aaa from './componts/aaa'
import Bbb from './componts/bbb'
import Deatial from './componts/deatial'
import Deatial2 from './componts/deatial2'
import Deatial3 from './componts/deatial3'
import Login from './componts/login'
import My from './componts/my'

function isLogin(){
    return true
}
export default function Layout(props) {
    const handleNav = (path)=>{
        // console.log(props);
        if(props.location.pathname!==path && path.indexOf("deatial") < 0){
            props.history.push(path)
        }else if(props.location.pathname!==path) {
            props.history.push(path)
        }
    }
    const toDetail = (id)=>{
        console.log(id);
        props.history.push({
            pathname:"/layout/deatial2",
            query:{id:id}
        })
    }
    return (
        <div>
            <h2>Layout</h2>
            {/* 聲明式導航 */}
            <p className={style.testcolor}>聲明式導航</p>
            <ul>
                <li>
                    <NavLink to="/layout/aaa">AAA</NavLink>
                </li>
                <li>
                    <NavLink to="/layout/bbb">BBB</NavLink>
                </li>
            </ul>
            {/* 編程式導航 */}
            <p>編程式導航</p>
            <ul>
                <li onClick={()=>handleNav("/layout/aaa")}>AAA</li>
                <li onClick={()=>handleNav("/layout/bbb")}>BBB</li>
            </ul>
            <p>動態路由傳參方式</p>
            <ul>
                <li onClick={()=>handleNav("/layout/deatial/1")}>deatial-1</li>
                <li onClick={()=>handleNav("/layout/deatial3/2/3")}>deatial-2</li>
            </ul>
            <p>query傳參方式:刷新頁面query傳參方式會丟失</p>
            <ul>
                {/* 因爲測試的原因會報錯 Hash history cannot PUSH the same path; a new entry will not be added to the history stack */}
                <li onClick={()=>toDetail(1)}>deatial2-1</li>
                <li onClick={()=>toDetail(2)}>deatial2-2</li>
            </ul>

            <p>路由守卫</p>
            <ul>
                <li>
                    <NavLink to="/layout/my">MY</NavLink>
                </li>
                <li>
                    <NavLink to="/layout/login">login</NavLink>
                </li>
            </ul>

            <Switch>
                <Route path="/layout/aaa" component={Aaa}></Route>
                <Route path="/layout/bbb" component={Bbb}></Route>
                
                {/* :id 即是動態路由 */}
                <Route path="/layout/deatial/:id" component={Deatial}></Route>
                <Route path="/layout/deatial3/:id/:id2" component={Deatial3}></Route>
                <Route path="/layout/deatial2" component={Deatial2}></Route>
                
                {/* 因为my组件用了withRouter 导出，所以不需要跟login那样，传props */}
                <Route path="/layout/my" render={()=>{
                    return isLogin()?<My></My>:<Redirect to="/layout/login"></Redirect>
                }}></Route>

                <Route path="/layout/login" render={(props)=>{
                    return isLogin()?<Redirect to="/layout/my"></Redirect>:<Login {...props}></Login>
                }}></Route>
                <Redirect from='/layout' to="/layout/aaa"></Redirect>
            </Switch>
        </div>
    )
}
