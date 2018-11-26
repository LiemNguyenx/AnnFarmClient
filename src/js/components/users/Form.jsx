import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../actions/users.js'

const mapDispatchToProps = dispatch => {
    return {
        addUser: info => dispatch(addUser(info))
    }
}

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event){
        event.preventDefault();
        const {title} = this.state;
        this.props.addUser({id,pass});
        this.setState({title:""});
    }

    render(){
        const {title} = this.state;
        return(
            <form onSubmit={this.handleSubmit}>
                ID: <input type="text" value = {title} id="id"/><br/>
                Pass: <input type="text"  id="pass"/>
                <button type="submit">
                    ADD
                </button>
            </form>
        );
    }
}

export default connect(null,mapDispatchToProps)(ConnectedForm);