import React from "react";
import { Button } from 'antd';
import { Link, NavLink } from "react-router-dom";
import "./login.css"
export const Login = () => {
    return(
        <div className="fb">
        <div className="left">
            <h3>facebook</h3>
            <p>Facebook helps you connect and share with the people in your life.</p>
            </div>
        <div className="right">
            <form className="fm">
                <div className="us">
                <input className="inp marginbtm" type="text" placeholder="enter username" /></div>
                <div className="pa"><input className="inp" type="text" placeholder="enter password" /></div>
            </form>
            <div className="log">
            <Button className="but" type="primary" size="large">Login</Button></div>
            <Link className="forgot">Forgotten password</Link><br />
            <div className="line"><hr /></div>
            <Button className="new" type="primary"> <Link
                exact
                to="/signup"
                activeClassName="active"
               
              >
              Create new account
              </Link></Button>
          
        </div>
        </div>
    )
}