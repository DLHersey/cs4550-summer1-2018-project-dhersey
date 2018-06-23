import React from 'react';
import {BrowserRouter as Router, 
    Route,
    Link,
    Switch } from 'react-router-dom';
import {Redirect, withRouter } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';
import LogInContainer from "../components/LogIn";
import auth from '../auth/authenticator';

export default class MainPage
    extends React.Component {

        renderLogin() {
            if (auth.loggedIn()) {
                return(<li className="nav-item"><a onclick="auth.logout();">Log Out</a></li>);
            } else {
                return(<li className="nav-item"><Link className="nav-link" to={'/Login'}>Login</Link></li>);
            }
        }


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

                    <PrivateRoute path="/ProfilePage"
                           component={ProfilePage} >
                    </PrivateRoute>
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

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route  
        {...rest}
        render={props => auth.loggedIn() ? (
            <Component {...props} />
        ) : (
            <Redirect
            to={{
                pathname: "/Login",
                state: { from: props.location }
            }}
            />
        )
    }
    />
);



/*
function requireAuth(nextState, replace) {  
    console.log("in requreAuth: " + auth.loggedIn());
    if (!auth.loggedIn()) {
      replace({
        pathname: '/Login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }
*/


