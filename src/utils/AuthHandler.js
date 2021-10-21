import axios from "axios";
import Config from "./Config";
import {reactLocalStorage} from 'reactjs-localstorage';

export default class AuthHandler{
    static login(username, password, callback){
        axios.post(Config.Login,{username: username, password:password}).then(function(response){
            if(response.status === 200){
                console.log(response);
                reactLocalStorage.set('refresh', response.data.refresh);
                reactLocalStorage.set('token', response.data.access);
                callback({ error: false});
            }
        })
        .catch(function(errors){
            console.log("errors :", errors.response);
        })
    }
    static loggedIn(){
        if(reactLocalStorage.get('refresh') && reactLocalStorage.get("token")){
            return true;
        }else{
            return false;
        }
    }
    static getToken(){
        return reactLocalStorage.get("token")
    }

    static getRefresh(){
        return reactLocalStorage.get("refresh")
    }

    static userLogOut(){
        reactLocalStorage.remove("token");
        reactLocalStorage.remove("refresh");
    }
}
