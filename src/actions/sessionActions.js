import * as constants from '../constants';
import SessionApi from '../api/sessionApi';
import auth from '../auth/authenticator';

export const loginSuccess = dispatch => {
    console.log("login success");
    dispatch({ type: constants.USER_LOGIN_SUCCESS})
}


export const loginUser = (dispatch, credentials) => {
    console.log("login: " + credentials.username);
   // sessionStorage.setItem('jwt', SessionApi.login(credentials));
   SessionApi.login(credentials).then(response => {
       //debugger;
       if (response.id === undefined) {
        dispatch({type: constants.USER_LOGOUT});
       } else {

        /*
    sessionStorage.setItem('jwt', response);
    sessionStorage.setItem('firstName', response.firstName);
    sessionStorage.setItem('role', response.role);
    sessionStorage.setItem('userId', response.id);
*/

    localStorage.setItem('jwt', response);
    localStorage.setItem('firstName', response.firstname);
    localStorage.setItem('role', response.role);
    localStorage.setItem('userId', response.id);

    dispatch({type: constants.USER_LOGIN_SUCCESS});
       }
   })
}



export const logOutUser = dispatch => {
    console.log("logout success");
    auth.logOut();
    dispatch({ type: constants.USER_LOGOUT})
}


