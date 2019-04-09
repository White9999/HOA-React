import React from 'react';
import Auth from "./auth.js";
import '@/styles/components/Login/index.scss';
import { Input, Button } from 'antd';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        // Login state
        this.state = {
            user_name: "",
            user_pwd: ""
        };
    }

    render() {
        return (
            <div className="Login">
                <div className="Login_left">
                    <h2>Login</h2>
                    <p>
                        <span className="Login_span">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <Input maxLength={30} type="text" onChange={(e) => {
                            this.setUserInfo(e, "user_name")
                        }} />
                    </p>
                    <p>
                        <span className="Login_span">Password: </span>
                        <Input maxLength={30} type="password" onChange={(e) => {
                            this.setUserInfo(e, "user_pwd")
                        }} />
                    </p>
                    <div className="button_login">
                        <Button type="submit" onClick={() => {
                            let auth = this.props.auth == null ? new new Auth() : this.props.auth;
                            auth.login(this.state.user_name, this.state.user_pwd, () => {
                                this.props.history.goBack(-1);
                            })
                        }}>Go!</Button>
                        <div>
                            <Button className="forget">forget password?</Button>
                            <Button>registered</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    setUserInfo(event, key) {
        let obj = {};
        obj[key] = event.target.value;

        this.setState(obj);
    }
}
