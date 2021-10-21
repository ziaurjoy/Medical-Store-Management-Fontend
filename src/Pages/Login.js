import React, { Component } from 'react'
import GoogleFontLoader from 'react-google-font-loader';


import "../assets/plugins/fontawesome-free/css/all.min.css";
//  icheck bootstrap 
import "../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
//   Theme style 
// import "../dist/css/adminlte.min.css";
import "../assets/dist/css/adminlte.min.css";
  

import AuthHandler from '../utils/AuthHandler';
import Config from '../utils/Config';
import { Redirect } from 'react-router';


export default class Login extends Component {
    state = {
        username : '',
        password : '',
        buttonDesable: true,
        loginStatus : 0
    }



// This function working for that the name values set for state

    saveInput = (event) =>{
        var key = event.target.name;
        this.setState({[key]: event.target.value });
        
        if(this.state.username == null && this.state.password == null){
            this.setState({buttonDesable: true})
        }else{
            this.setState({buttonDesable: false})
        }
    }



// if click submit button then call this function.
//this function working that passing the state value for authHandler 

    formSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state);
        AuthHandler.login(this.state.username, this.state.password, this.handleResponse)
        
    }



// This function working for return data for authHandler request

    handleResponse = (data) =>{
        console.log("Hello I am rady");
        if(data.error){
            console.log(data.error);
        }else{
            window.location = Config.homeUrl;
        }
       
    }



    render() {
        if(AuthHandler.loggedIn()){
            return <Redirect to={Config.homeUrl} />
        }
        return (
            <React.Fragment>

            <GoogleFontLoader
                fonts={[
                    {
                    font: 'Source+Sans+Pro',
                    weights: [300,400,'400i',700],
                    },
                ]}
                
                />


            <body className="hold-transition login-page">
                <div className="login-box">
                <div className="login-logo">
                    <a href="#">Medical Store Management System</a>
                </div>
                {/*login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form action="../../index3.html" method="post" onSubmit = {this.formSubmit}>
                        <div className="input-group mb-3">
                        <input name="username" type="text" className="form-control" placeholder="User name..."  onChange = {this.saveInput} />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                            </div>
                        </div>
                        </div>
                        <div className="input-group mb-3">
                        <input name="password" type="password" className="form-control" placeholder="Password" onChange = {this.saveInput} />
                        <div className="input-group-append">
                            <div className="input-group-text">
                            <span className="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-8">
                            <div className="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label for="remember">
                                Remember Me
                            </label>
                            </div>
                        </div>
                        {/* col */} 
                        <div className="col-4">
                            <button type="submit" className="btn btn-primary btn-block" disabled={this.state.buttonDesable}>Sign In</button>
                        </div>
                       {/* col */} 
                        </div>
                    </form>

                    <div className="social-auth-links text-center mb-3">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-primary">
                        <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                        </a>
                        <a href="#" className="btn btn-block btn-danger">
                        <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                        </a>
                    </div>
                        {/*social-auth-links */}

                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                        </div>
                        {/*login-card-body */}
                    </div>
                </div>
            </body>
            </React.Fragment>
        )
    }
}
