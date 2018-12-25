import React, { Component } from 'react';
import TopNavbar from '../menu/top-navbar.jsx'
import Contents from './contents.jsx'

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class MainPanel extends Component {
    render() {
        return (
            <div className="main-panel">
                <TopNavbar />
                <Contents />
            </div>
        );
    }
}

export default MainPanel;