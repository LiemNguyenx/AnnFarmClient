import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../js/components/containers/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './storage/store/index';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

window.store = store;
store.subscribe(() => console.log('Redux!!'))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>

    , document.getElementById('app'));
