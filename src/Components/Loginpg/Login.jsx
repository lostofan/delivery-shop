import React from 'react'
import logo from './../../imgs/main.png';

export default function Login() {
  return (
    <div className="left">
    <div className="logo">
        <img src={logo} alt=""/>
    </div>
    <div className="login">
        <div className="hightxt">
            <p>Login</p>
        </div>
        <div className="jsttxt">
            <p>Sign in with your data that you entered during your registration.</p>
        </div>
        <div className="inp-mail inputclass">
            <p>Email</p>
            <input type="email" name="mail" placeholder="name@example.com" id=""/>
        </div>
        <div className="inp-pass inputclass">
            <p>Password</p>
            <input type="password" name="pass" placeholder="min. 8 characters" id=""/>
        </div>
        <div className="chkbx">
            <input type="checkbox" name="" id=""/>
            <p>Keep me logged in</p>
        </div>
        <div className="login-btn">
            <input type="button" value="Login"/>
        </div>
        <div className="frg-pass">
            <a href="/frg">Forgot password</a>
        </div>
    </div>
    <div className="signup">
        <p>Dont have an account?</p><a href="/sign">Sign up</a>
    </div>
</div>
  )
}
