import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Login from '../users/Login.jsx'
// import Form from '../users/Form.jsx'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import PrivateRoute from './../PrivateRoute.jsx';
import LeftMenu from './menu/left-menu.jsx';
import TopNavbar from './menu/top-navbar.jsx';
import Contents from './containers/contents.jsx';
import './assets/css/material-dashboard.min.css'
import './assets/css/meterial-icon.css'
import MyEditor from './editor/draftail.jsx'
import RichEditor from './editor/draft.jsx'
import DashBoard from './dashboard/dashboard-index.jsx'
const mapStateToProps = state => {
    return state
}

class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <LeftMenu />
                <div className="main-panel">
                    <TopNavbar />
                    <div className="content">
                        <Route path="/dashboard" component={DashBoard} />
                        <Route path="/post" component={MyEditor} />
                        <Route path="/table" component={RichEditor} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
// export default withRouter(connect(mapStateToProps)(App));