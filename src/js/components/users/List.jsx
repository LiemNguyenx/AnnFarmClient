import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { users: state.users }
}
class ConnectedList extends Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.users.map(
                    (e, index) => (
                        <li className="list-group-item text-center" key={index}>
                            ID: {e.id} - Pass: {e.pass}
                        </li>
                    )
                )}
            </ul>
        )
    }
}

export default connect(mapStateToProps)(ConnectedList);