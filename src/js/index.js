import React from 'react';
import ReactDOM from 'react-dom';
import App from '../js/components/containers/App.jsx';
import store from './storage/store/index'
import {userLogin} from './actions/login'

window.store = store;
window.userLogin = userLogin;
store.subscribe(() => console.log('Look ma, Redux!!'))

ReactDOM.render(<App />, document.getElementById('app'));