import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from '../src/Pages/Login';
import MainComponent from './Components/MainComponent';


// Font Awesome 

import "../src/assets/plugins/fontawesome-free/css/all.min.css"

// Tempusdominus Bootstrap 4
import "../src/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
  // iCheck 
import "../src/assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
  // JQVMap 
import "../src/assets/plugins/jqvmap/jqvmap.min.css"
  // Theme style 
import "../src/assets/dist/css/adminlte.min.css"
  // overlayScrollbars 
import "../src/assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
  // Daterange picker 
import "../src/assets/plugins/daterangepicker/daterangepicker.css"
  // summernote 
import "../src/assets/plugins/summernote/summernote-bs4.min.css"


import HomeComponent from './Components/HomeComponent';
import CompanyComponent from "./Components/CompanyComponent"
import { PrivateRoute } from './utils/PrivateRoute';
import { NewPrivateRoute } from './utils/NewPrivateRoute';
import CompanyDetails from './Components/CompanyDetails';
import AddMedicineComponent from './Components/AddMedicineComponent';
import CompanyListComponent from './Components/CompanyListComponent';
import CreateNewCompanyComponent from './Components/CreateNewCompanyComponent';
import CompanyUpdateComponent from './Components/CompanyUpdateComponent';

  // Google Font: Source Sans Pro 
  // <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

  // // Ionicons 
  // <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

  




ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path = "/" component = {Login} ></Route>
      <NewPrivateRoute activePage="0" exact path = "/home" page = {HomeComponent} ></NewPrivateRoute>
      {/* <NewPrivateRoute activePage="1" exact path = "/company" page = {CompanyComponent} ></NewPrivateRoute> */}
      <NewPrivateRoute activePage="1" exact path = "/company/add" page = {CreateNewCompanyComponent} ></NewPrivateRoute>
      <NewPrivateRoute activePage="1" exact path = "/company/list" page = {CompanyListComponent} ></NewPrivateRoute>
      <NewPrivateRoute activePage="2" exact path = "/company/detail/:id" page = {CompanyDetails} ></NewPrivateRoute>
      <NewPrivateRoute activePage="2" exact path = "/company/update/:id" page = {CompanyUpdateComponent} ></NewPrivateRoute>
      <NewPrivateRoute activePage="2" exact path = "/add/medicine" page = {AddMedicineComponent} ></NewPrivateRoute>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
