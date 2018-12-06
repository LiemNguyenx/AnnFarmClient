import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions/users.action';


const mapStateToProps = state => {
    return {
    };
}
class HomePage extends Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi !</h1>
                <p>You're logged in with React!!</p>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Homepage);