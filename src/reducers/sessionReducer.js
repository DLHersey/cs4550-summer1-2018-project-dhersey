import * as constants from '../constants/index';

export const sessionReducer = (state = {session: !!sessionStorage.jwt}, action)  => {
  switch(action.type) {
    case constants.USER_LOGIN_SUCCESS:
        console.log("login");
      return !!sessionStorage.jwt
    case constants.USER_LOGOUT:
      console.log("logout");
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}

