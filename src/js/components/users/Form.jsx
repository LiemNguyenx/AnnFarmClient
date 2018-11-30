import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/users.action.js'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'

const mapDispatchToProps = dispatch => {
    return {
        addUser: info => dispatch(addUser(info))
    }
}
const mapStateToProps = state => {
    return { users: state.users }
}

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            pass: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addUser({ id: this.state.id, pass: this.state.pass });
        this.setState({ title: "" });
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.users.map(
                        (e, index) => (
                            <li className="list-group-item text-center" key={index}>
                                ID: {e.id} - Pass: {e.pass}
                            </li>
                        )
                    )}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <input type="text" id="id" className="form-control" placeholder="ID" onChange={this.handleChange} /><br />
                    </div>
                    <div className="form-row">
                        <input type="password" id="pass" className="form-control" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">ADD</button>
                    <Link to="/login/">Login</Link>

                </form>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnectedForm));
// export default ConnectedForm;