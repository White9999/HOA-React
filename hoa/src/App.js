import React, { Component } from 'react';
import './App.css';
import Home from './components/home/home.js';
import About from './components/about/about.js';
import Login from './components/login/login.js';
import Auth from "@/components/login/auth.js";
import Activities from '@/components/home/activities/activities.js';
import News from '@/components/home/news/news.js';
import Resources from '@/components/home/resources/resources.js';
import Amenities from '@/components/home/amenities/amenities.js';
import CityResources from '@/components/home/city-resources/city-resources.js';
import { HashRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { Icon } from 'antd';
import 'antd/dist/antd.css';

let auth = new Auth(); //初始化一个全局的Auth对象
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="heand" >
            <div className="heand_content">
              <div className="heand_a"><Link to="./home"><Icon type="crown" style={{ fontSize: "40px" }} /> &nbsp;De Anza Oaks</Link></div>
              <div className="heand_b">
                <Link to='./home'>Home</Link>
                <Link to='./about'>About Us</Link>
              </div>
              <div><Link className="button" to="./login">Login</Link></div>
            </div>
          </div>
          <Switch>
            <Route path='/' exact component={Home}></ Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path="/activities" render={() => {
              if (auth.isLogin) {
                return <Activities />
              } else {
                return <Redirect to={{ pathname: "./login", search: "p1=1&p2=2", state: { "name": "kiramario", "age": 26 } }} />
              }
            }} />
            <Route path="/news" render={() => {
              if (auth.isLogin) {
                return <News />
              } else {
                return <Redirect to={{ pathname: "./login", search: "p1=1&p2=2", state: { "name": "kiramario", "age": 26 } }} />
              }
            }} />
            <Route path="/resources" render={() => {
              if (auth.isLogin) {
                return <Resources />
              } else {
                return <Redirect to={{ pathname: "./login", search: "p1=1&p2=2", state: { "name": "kiramario", "age": 26 } }} />
              }
            }} />
            <Route path="/amenities" render={() => {
              if (auth.isLogin) {
                return <Amenities />
              } else {
                return <Redirect to={{ pathname: "./login", search: "p1=1&p2=2", state: { "name": "kiramario", "age": 26 } }} />
              }
            }} />
            {/* <Route path="/city-resources" render={() => {
              if (auth.isLogin) {
                return <CityResources />
              } else {
                return <Redirect to={{ pathname: "./login", search: "p1=1&p2=2", state: { "name": "kiramario", "age": 26 } }} />
              }
            }} /> */}
            <Route path='/city-resources' component={CityResources}></Route>
            <Route path="/login" render={(props) => {
              return <Login auth={auth} {...props} />
            }} />
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
