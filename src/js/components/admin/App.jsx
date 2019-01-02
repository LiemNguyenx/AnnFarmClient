import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Login from '../users/Login.jsx'
// import Form from '../users/Form.jsx'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import PrivateRoute from './../PrivateRoute.jsx';
import LeftMenu from './menu/left-menu.jsx';
import TopNavbar from './menu/top-navbar.jsx';
import MainPanel from './containers/main-panel.jsx'
// import './assets/css/material-dashboard.min.css'
// import './assets/css/meterial-icon.css'
const mapStateToProps = state => {
    return state
}

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <LeftMenu/>
                <MainPanel />
                <div>
                    {/* <PrivateRoute exact path="/" component={Form} /> */}
                    {/* <Route path='/login' component={Login} /> */}
                </div>
            </div>
        );
    }
}

export default App;
// export default withRouter(connect(mapStateToProps)(App));