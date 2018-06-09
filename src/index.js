import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MainPage from './containers/MainPage';

ReactDOM.render(
    <div className="container-fluid">
        <MainPage />
    </div>
    , document.getElementById('root'));
