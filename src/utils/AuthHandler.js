import axios from "axios";
import Config from "./Config";
import {reactLocalStorage} from 'reactjs-localstorage';

export default class AuthHandler{
    static login(username, password){
        axios.post(Config.Login,{username: username, password:password}).then(function(response){
            if(response.status === 200){
                console.log(response);
                reactLocalStorage.set('refresh', response.data.refresh);
                reactLocalStorage.set('token', response.data.access);
            }
        })
        .catch(function(errors){
            console.log("errors :", errors.response);
        })
    }
}
