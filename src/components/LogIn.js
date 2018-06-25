import React from 'react';
import {BrowserRouter as Router, Route, Redirect, withRouter} from 'react-router-dom';
import * as sessionActions from '../actions/sessionActions';
import {connect} from 'react-redux'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import ProfilePage from '../containers/ProfilePage';
import auth from '../auth/authenticator';

class LogIn
    extends React.Component {

        constructor(props) {
            super(props);
            this.state = {credentials: { username: '', password: '' }, 
                        redirectToReferrer: false };
            this.onChange = this.onChange.bind(this);
            this.login = this.login.bind(this);
            //this.checkRedirect = this.checkRedirect.bind(this);
        }


        checkRedirect() {
            const { from } = this.props.location.state || {from: {pathname: "/"}};
          //  console.log(this.props.location.state);
         //   console.log({from});
           // const { redirectToReferrer } = auth.loggedIn();
           console.log(auth.loggedIn());
            if (auth.loggedIn()) {
                console.log({from});
                //debugger;
            //return(<Router><Redirect push to={"/ProfilePage"} /><Route path="/ProfilePage" component={ProfilePage} /></Router>);    
            return (<Redirect to={from} />);
            }
        }    

        onChange(event) {
            const field = event.target.name;
            const credentials = this.state.credentials;
            credentials[field] = event.target.value;
            return this.setState({credentials: credentials});
          }

    login(event) {
        event.preventDefault();
        console.log(this.state.credentials);
        this.props.loginUser(this.state.credentials);
        this.setState({redirectToReferrer: auth.loggedIn()});
    }


    render() {
        this.checkRedirect();
        return(
            <div className="row align-items-center">
                <div className="col"/>
                <div className="align-self-center">
                    <form className="border border-dark p-5">
                        <h3>Log-in:</h3>
                        <div className="form-group mt-4">
                            <input name="username" className="form-control m-2" placeholder="Username" required=""
                                   autoFocus="" value={this.state.credentials.username} onChange={this.onChange}/>
                            <input name="password" className="form-control m-2" placeholder="Password" required=""
                                   type="password" value={this.state.credentials.password} onChange={this.onChange} />
                            <button className="btn btn-success mb-4 float-md-right" onClick={this.login}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col"/>
            </div>
        )
    }

}

const stateToPropertiesMapper = (state) => ({
    session: state.sessionInfo.session
});

const dispatchToPropsMapper = dispatch => ({
    loginSuccess: ()=> sessionActions.loginSuccess(dispatch),
    loginUser: (credentials)=> sessionActions.loginUser(dispatch, credentials),
    logOutUser: ()=> sessionActions.logOutUser(dispatch),
})

const LogInContainer = withRouter(connect(stateToPropertiesMapper, dispatchToPropsMapper)(LogIn));
export default LogInContainer;
