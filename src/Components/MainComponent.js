import React, { Component } from 'react'
import MainSidebarContainer from './MainSidebarContainer'
import Navbar from './Navbar'
import Preloader from './Preloader'

export default class MainComponent extends Component {
    state = {
        bodyClassName : "sidebar-mini sidebar-closed sidebar-collapse"
    }
    onClickBar = () =>{
        if(this.state.bodyClassName == "sidebar-mini sidebar-closed sidebar-collapse"){
            this.setState({bodyClassName: "sidebar-mini"})
        }else if(this.state.bodyClassName == "sidebar-mini"){
            this.setState({bodyClassName: "sidebar-mini sidebar-closed sidebar-collapse"})
        }
    }
    render() {
         if(window.screen.width > 1000){
            document.getElementById("root").className = "sidebar-mini";
        }else{
            document.getElementById("root").className = this.state.bodyClassName;
        }
        console.log(this.props);
        var Page = this.props.page
        return (
            <React.Fragment>
                {/* <Preloader /> */}
                <Navbar onClickBar = {this.onClickBar}/>
                 <MainSidebarContainer activePage = {this.props.activePage}/> 
                <Page {...this.props} />
            </React.Fragment>
        )
    }
}
