export  default class Auth{
    constructor(){
        this.isLogin = false; //是否登录
    }

    // 用户登录函数
    login(user_name,user_pwd,callback){
        if (user_name==="tom" && user_pwd==="123"){
            this.isLogin = true;
            callback(); //登录成功，调用回调函数
        }else {
            alert("登录失败");
        }
    }
}

