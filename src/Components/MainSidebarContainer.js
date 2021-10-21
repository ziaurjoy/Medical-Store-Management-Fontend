import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminLTELogo from '../assets/dist/img/AdminLTELogo.png'
import userImage from '../assets/dist/img/user2-160x160.jpg'
import Config from '../utils/Config'
export default class MainSidebarContainer extends Component {

    state = {
        companyNavbarClass: "nav-item",
      };
    
      constructor(props) {
        super(props);
        this.divref = React.createRef();
        this.divref2 = React.createRef();
      }
      
      componentWillMount() {
        document.addEventListener("mousedown", this.handleMouseClick, false);
      }
    
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleMouseClick, false);
      }
    
      handleMouseClick = (event) => {
        if (
          event.target === this.divref.current ||
          event.target === this.divref2.current
        ) {
          return;
        }
      };
    
      companyDropdownMenu = () => {
        if (this.state.companyNavbarClass == "nav-item") {
          this.setState({ companyNavbarClass: "nav-item menu-is-opening menu-open" });
        } else{
          this.setState({ companyNavbarClass: "nav-item" });
        }
      };
      
    render() {

        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to="/home" className="brand-link">
                    <img src={AdminLTELogo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: ".8"}} />
                    <span className="brand-text font-weight-light">Medical Store</span>
                </Link>

                {/* Sidebar */}
                <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                     <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                    <img src={userImage} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                    <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                    <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-sidebar">
                        <i className="fas fa-search fa-fw"></i>
                        </button>
                    </div>
                    </div>
                </div>

                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    {/* Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library */}
                        
                        <li className={this.state.companyNavbarClass} onClick={this.companyDropdownMenu} ref={this.divref}>
                            <div className="nav-link">
                                <i className="nav-icon fas fa-edit"></i>
                                <p className="nav-link">
                                    Company
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </div>
                            <ul className="nav nav-treeview">
                            {/* {Config.companySidebarNav.map((item) => 
                                <li className="nav-item">
                                    <Link to={item.url} ref={this.divref2} className={item.index == this.props.activePage ? "nav-link active" : 'nav-link'}>
                                        <i className={item.icons}></i>
                                        <p>{item.title}<i className="fas fa-angle-left right"></i></p>
                                    </Link>
                                </li>
                            )} */}
                            <li className="nav-item">
                                <Link to="/company/add" className="nav-link active" ref={this.divref}>
                                <i className="far fa-circle nav-icon"></i>
                                <p>Add Company</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/company/list" className="nav-link" ref={this.divref2}>
                                <i className="far fa-circle nav-icon"></i>
                                <p>Company List</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="pages/forms/validation.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Validation</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                   
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-table"></i>
                        <p>
                            Tables
                            <i className="fas fa-angle-left right"></i>
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Simple Tables</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>DataTables</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>jsGrid</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-header">EXAMPLES</li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon far fa-envelope"></i>
                        <p>
                            Mailbox
                            <i className="fas fa-angle-left right"></i>
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="pages/mailbox/mailbox.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Inbox</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/mailbox/compose.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Compose</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/mailbox/read-mail.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Read</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-book"></i>
                        <p>
                            Pages
                            <i className="fas fa-angle-left right"></i>
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="pages/examples/invoice.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Invoice</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/profile.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Profile</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon far fa-plus-square"></i>
                        <p>
                            Extras
                            <i className="fas fa-angle-left right"></i>
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>
                                Login & Register v1
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/examples/login.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Login v1</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/register.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Register v1</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/forgot-password.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Forgot Password v1</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/recover-password.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Recover Password v1</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>
                                Login & Register v2
                                <i className="fas fa-angle-left right"></i>
                            </p>
                            </a>
                            <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <a href="pages/examples/login-v2.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Login v2</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/register-v2.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Register v2</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Forgot Password v2</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/examples/recover-password-v2.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Recover Password v2</p>
                                </a>
                            </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="pages/examples/lockscreen.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Lockscreen</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-search"></i>
                        <p>
                            Search
                            <i className="fas fa-angle-left right"></i>
                        </p>
                        </a>
                        <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="pages/search/simple.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Simple Search</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/search/enhanced.html" className="nav-link">
                            <i className="far fa-circle nav-icon"></i>
                            <p>Enhanced</p>
                            </a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </nav>
                {/* sidebar-menu */}
                </div>
                {/* sidebar */}
            </aside>
        )
    }
}
