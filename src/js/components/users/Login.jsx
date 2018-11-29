import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/users.action.js'

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
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.userLogin({ id: this.state.user_id, pass: this.state.password });
        this.setState({user_id : "",password: ""});

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group" onChange={this.handleChange}>
                    <label htmlFor="user_id">User ID</label>
                    <input type="text" className="form-control" id="user_id" />
                </div>
                <div className="form-group" onChange={this.handleChange}>
                    <label htmlFor="pass">Password</label>
                    <input type="password" className="form-control" id="pass" placeholder="********" />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            // <form onSubmit={this.handleSubmit}>
            //     <div className="form-row">
            //         <input type="text" id="id" className="form-control" placeholder="ID" onChange={this.handleChange} /><br />
            //     </div>
            //     <div className="form-row">
            //         <input type="password" id="pass" className="form-control" placeholder="Password" onChange={this.handleChange} />
            //     </div>
            //     <button type="submit" className="btn btn-primary">ADD</button>
            // </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(Login);