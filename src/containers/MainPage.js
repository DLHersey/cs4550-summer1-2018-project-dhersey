import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';
import LogInContainer from "../components/LogIn";
import auth from '../auth/authenticator';

export default class MainPage
    extends React.Component {

    render() {
        return(
            <div className="container-fluid">
            <Router>
                <div>
                <div className="mb-4">
                    <nav className="navbar navbar-expand-lg navbar-dark color-light bg-dark">
                        <a className="navbar-brand text-light">Project</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/'}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/LandingPage'}>Recipes</Link>
                                </li>
                            </ul>
                        </div>
                        <span className="nav-item">
                            <Link className="nav-link" to={'/ProfilePage'}>Profile</Link>
                        </span>
                    </nav>
                </div>
               
                <div className="container-fluid">
                    <Switch>
                    <Route path="/LandingPage"
                           component={LandingPage}>
                    </Route>

                    <Route path="/ProfilePage"
                           component={ProfilePage} 
                           onEnter={requireAuth} >
                    </Route>
                    <Route path="/Login"
                            component={LogInContainer}>
                    </Route>
                    </Switch>
                </div>
 
                </div>
                </Router>
            </div>
        )
    }
}

function requireAuth(nextState, replace) {  
    console.log("in requreAuth: " + auth.loggedIn());
    if (!auth.loggedIn()) {
      replace({
        pathname: '/Login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }



