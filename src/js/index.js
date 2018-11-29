import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../js/components/containers/App.jsx';
import Login from '../js/components/users/Login.jsx'
import { userLogin } from './actions/users.action.js'
import store from './storage/store/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

window.store = store;
window.userLogin = userLogin;
store.subscribe(() => console.log('Redux!!'))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={Login} />
                <Route exact path='/login' component={App} />
            </div>
        </Router>
    </Provider>
    , document.getElementById('app'));
