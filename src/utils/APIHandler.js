

import { reactLocalStorage } from "reactjs-localstorage";

const { default: AuthHandler } = require("./AuthHandler");
const { default: Axios } = require("axios");
const { default: Config } = require("./Config");

export default class APIHandler {
    async saveCompanyData(name, license_id, address, phone, email, description){
        var response = await Axios.post(Config.companyUrl,{name: name, license_id: license_id, 
            address: address, phone: phone, email: email, description: description},
            {headers: {Authorization: "Bearer " + AuthHandler.getToken()}}
        );
        return response;
    }
    async fetchCompanys(){
        var response = await Axios.get(Config.companyUrl, {headers: {Authorization: "Bearer " + AuthHandler.getToken()}})
        return response; 
    }

    async fetchCompanyDetails(company_id){
        var response = await Axios.get(Config.companyUrl + "" + company_id + "/", {headers: {Authorization: "Bearer " + AuthHandler.getToken()}})
        return response
    }


    async saveCompanyDataUpdate(name, license_id, address, phone, email, description, id){
        var response = await Axios.put(Config.companyUrl + "" + id + "/",{name: name, license_id: license_id, 
            address: address, phone: phone, email: email, description: description},
            {headers: {Authorization: "Bearer " + AuthHandler.getToken()}}
        );
        return response;
    }

    async saveMedicineData(name, medical_type, buy_price, sell_price, CGST, SGST, batch_no, shelf_no, exp_date, mfg, company_id, description, in_stock, quantity_in_strip){
        var response = await Axios.post(Config.medicineUrl,{name: name, medical_type: medical_type, 
            buy_price: buy_price, sell_price: sell_price, CGST: CGST, SGST: SGST, batch_no: batch_no, shelf_no:shelf_no, exp_date: exp_date, mfg:mfg, 
            company_id:company_id, description: description, in_stock: in_stock, quantity_in_strip:quantity_in_strip},
            {headers: {Authorization: "Bearer " + AuthHandler.getToken()}}
        );
        return response;
    }
}
