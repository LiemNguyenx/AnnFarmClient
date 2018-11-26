import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { users: state.users }
}
class ConnectedList extends Component {
    render() {
        return (
            <div>
                {this.props.users.map(
                    (e, index) => (
                        <div key={index}>
                            ID: {e.id}
                            Pass: {e.pass}
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ConnectedList);