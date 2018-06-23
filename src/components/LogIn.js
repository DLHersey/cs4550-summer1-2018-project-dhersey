import React from 'react';
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import {connect} from 'react-redux'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


class LogIn
    extends React.Component {

        constructor(props) {
            super(props);
            this.state = {credentials: { username: '', password: '' } };
            this.onChange = this.onChange.bind(this);
            this.login = this.login.bind(this);
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
    }

    render() {
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
                            <button className="btn btn-success mb-4 float-md-right" onClick={this.login} type="button">
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

const LogInContainer = connect(stateToPropertiesMapper, dispatchToPropsMapper)(LogIn);
export default LogInContainer;
