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
            id: "",
            pass:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.addUser({id: this.state.id,pass:this.state.pass});
        this.setState({title:""});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                ID: <input type="text" id="id" onChange={this.handleChange}/><br/>
                Pass: <input type="text"  id="pass" onChange={this.handleChange}/>
                <button type="submit">
                    ADD
                </button>
            </form>
        );
    }
}

export default connect(null,mapDispatchToProps)(ConnectedForm);