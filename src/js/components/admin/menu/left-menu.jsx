import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";
// import PrivateRoute from './../PrivateRoute.jsx';

class LeftMenu extends Component {
    render() {
        return (
            <div className="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                        Creative Tim
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active  ">
                            <Link  className="nav-link" to="/dashboard">
                                <i className="material-icons">dashboard</i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./user.html">
                                <i className="material-icons">person</i>
                                <p>User Profile</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/table">
                                <i className="material-icons">content_paste</i>
                                <p>Table List</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/post">
                                <i className="material-icons">library_books</i>
                                <p>Typography</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./icons.html">
                                <i className="material-icons">bubble_chart</i>
                                <p>Icons</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./map.html">
                                <i className="material-icons">location_ons</i>
                                <p>Maps</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="./notifications.html">
                                <i className="material-icons">notifications</i>
                                <p>Notifications</p>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}
export default LeftMenu;