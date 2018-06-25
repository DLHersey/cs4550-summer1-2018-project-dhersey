import React from 'react';
import {BrowserRouter as Router, 
    Route,
    Link,
    Switch } from 'react-router-dom';
import {Redirect, withRouter } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';
import UserManagePage from './UserManagePage';
import LogInContainer from "../components/LogIn";
import auth from '../auth/authenticator';
import {connect} from 'react-redux'
import * as sessionActions from '../actions/sessionActions';


export class MainPage
    extends React.Component {
        constructor(props) {
            super(props);
            
        }  

        renderLogin() {
            if (auth.loggedIn()) {
                return(<li className="nav-item"><button  onClick={this.props.logOutUser()}>Log Out</button></li>);
            } else {
                return(<li className="nav-item"><Link className="nav-link" to={'/Login'}>Login</Link></li>);
            }
        }


    render() {
        return(
            <div className="container-fluid">
                <head>
                    <script src="https://developer.edamam.com/attribution/badge.js"></script>
                </head>
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
                            <AdminRoute path="/UserManagePage"
                                   component={UserManagePage} >
                            </AdminRoute>
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

const stateToPropertiesMapper = (state) => ({
    session: state.sessionInfo.session
});

const dispatchToPropsMapper = dispatch => ({
    logOutUser: ()=> sessionActions.logOutUser(dispatch),
})


const MainPageContainer = connect(stateToPropertiesMapper, dispatchToPropsMapper)(MainPage);
export default MainPageContainer;

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


const AdminRoute = ({ component: Component, ...rest}) => (
    <Route  
        {...rest}
        render={props => auth.isAdmin() ? (
            <Component {...props} />
        ) : (
            <Redirect
            to={{
                pathname: "/",
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


