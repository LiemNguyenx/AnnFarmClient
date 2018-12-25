import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { login } from '../../actions/users.action.js'
import { withRouter } from 'react-router-dom'
import { userService } from './../../_services/user.service';

const mapDispatchToProps = dispatch => {
    return {
        login: info => dispatch(userService.login(info))
        // login: info => dispatch({ type: 'USERS_LOGIN_SUCCESS', userInfo: info })
    }

}
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: "",
            pass: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.login({ LoginUser: this.state.LoginUser, LoginPass: this.state.LoginPass });
        // dispatch(userService.login({ LoginUser: this.state.LoginUser, LoginPass: this.state.LoginPass }));
        this.setState({LoginUser : "",LoginPass: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <input type="text" id="LoginUser" className="form-control" placeholder="ID" onChange={this.handleChange} /><br />
                </div>
                <div className="form-row">
                    <input type="password" id="LoginPass" className="form-control" placeholder="Password" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
// export default Login;