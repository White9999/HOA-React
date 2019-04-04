import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Login from './components/login/login.js';
import Auth from "@/components/login/auth.js";
import { HashRouter, Link, Route, Switch,Redirect } from 'react-router-dom'
import { Icon } from 'antd';

let  auth = new Auth(); //初始化一个全局的Auth对象

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="heand" >
            <div className="heand_content">
              <div className="heand_a"><Icon type="crown" style={{ fontSize: "40px" }} /> &nbsp;De Anza Oaks</div>
              <div className="heand_b">
                <Link to='./home'>Home</Link>
                <Link to='./about'>About Us</Link>
              </div>
              <div><Link className="button" to="./login">Login</Link></div>
            </div>
          </div>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/home' component={Home}></Route>
            {/* <Route path='/about' component={About}></Route> */}
            <Route exact path="/about" render={()=>{
                    if (auth.isLogin){
                        return <About/>
                    }else{
                        return <Redirect to="/login"/>
                    }
                }} />
            {/* <Route path='/login' component={Login}></Route> */}
            <Route  path="/login" render={(props)=>{
                    return <Login auth={auth} {...props} />
                }} />
            {/* <Redirect to="./home"></Redirect> */}
          </Switch>
          <div className="footer">
            <p>Copyright © 2019 Tellus, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
