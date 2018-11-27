import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../js/components/containers/App.jsx';
import store from './storage/store/index';
import { addUser } from './actions/users';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

window.store = store;
window.addUser = addUser;
store.subscribe(() => console.log('Redux!!'))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));