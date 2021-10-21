import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import MainComponent from "../Components/MainComponent";
import AuthHandler from "./AuthHandler";


// this is a private variable that useing beacouse user must login then go to home
export var NewPrivateRoute = ({page, activePage, ...rest}) =>{
    return (
        <Route {...rest} render = {(props) => 
            AuthHandler.loggedIn() ? <MainComponent page={page} {...props} activePage={activePage} /> : < Redirect to="/" />
        } />
    ) 
}