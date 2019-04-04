import React from 'react';
import Auth from "./auth.js";

export default  class Login extends React.Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            user_name:"",
            user_pwd:""
        };
      }

    render(){
        return <div>
            <h2>用户登录</h2>
            <p>
                <span>用户名：</span>
                <input type="text" onChange={(e)=>{
                    this.setUserInfo(e,"user_name")
                }}/>
            </p>
            <p>
                <span>密  码：</span>
                <input type="password" onChange={(e)=>{
                    this.setUserInfo(e,"user_pwd")
                }}/>
            </p>
            <p><input type="submit" onClick={()=>{
                let auth = this.props.auth==null ? new new Auth() : this.props.auth;
                auth.login(this.state.user_name,this.state.user_pwd,()=>{
                    this.props.history.push("/about");
                })
            }} value="登录"/></p>
        </div>
    }

    setUserInfo(event, key){
        let obj = {};
        obj[key] = event.target.value;

        this.setState(obj);
    }
}
