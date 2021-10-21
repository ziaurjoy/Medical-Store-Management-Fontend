import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthHandler from "./AuthHandler";


// this is a private variable that useing beacouse user must login then go to home
export var PrivateRoute = ({component: Component, ...rest}) =>{
    console.log({...rest});
    return <Route {...rest} render = {(props) => 
        AuthHandler.loggedIn() ? <Component {...props} /> : < Redirect to="/" />
    } /> 
}