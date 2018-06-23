import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/index.js';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MainPage from './containers/MainPage';

ReactDOM.render(
    <div className="container-fluid">
    <Provider store={store}>
        <MainPage />
    </Provider>
    </div>
    , document.getElementById('root'));
