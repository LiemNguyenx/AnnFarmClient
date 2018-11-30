import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/users.action.js'
import { withRouter } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
    return {
        userLogin: info => dispatch(userLogin(info))
    }

}
class Login extends Component {
    constructor() {
        super();
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
        // debugger;
        this.props.userLogin({ id: this.state.user_id, pass: this.state.pass });
        this.setState({user_id : "",password: ""});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <input type="text" id="user_id" className="form-control" placeholder="ID" onChange={this.handleChange} /><br />
                </div>
                <div className="form-row">
                    <input type="password" id="pass" className="form-control" placeholder="Password" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Login));
// export default Login;