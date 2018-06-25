import * as constants from '../constants/index';

//export const sessionReducer = (state = {session: !!sessionStorage.jwt}, action)  => {

export const sessionReducer = (state = {session: null}, action)  => {
  switch(action.type) {
    case constants.USER_LOGIN_SUCCESS:
      //return !!sessionStorage.jwt
      return !!localStorage.jwt
    case constants.USER_LOGOUT:
      //return !!sessionStorage.jwt
      return !!localStorage.jwt
      //return false;
    default: 
      return state;
  }
}

