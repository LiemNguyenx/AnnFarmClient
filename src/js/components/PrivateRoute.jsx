import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

// export default PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         document.cookie.getItem('access_token')
//             ? <Component {...props} />
//             : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//     )} />
// )

class PrivateRoute extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Route  render={props => (document.cookie.access_token
                    ? <Component {...props} />
                    : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )} />
        )
    }
}

export default PrivateRoute;