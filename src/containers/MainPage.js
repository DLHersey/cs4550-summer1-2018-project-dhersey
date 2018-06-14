import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage';

export default class MainPage
    extends React.Component {



    render() {
        return(
            <div className="container-fluid">
                <div className="mb-4">
                    <nav className="navbar navbar-expand-lg navbar-dark color-light bg-dark">
                        <a className="navbar-brand text-light">Project</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                        <span className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </span>
                    </nav>
                </div>
                <div>
                    <LandingPage />
                </div>
            </div>
        )
    }
}

