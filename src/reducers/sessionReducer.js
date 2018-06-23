import * as constants from '../constants/index';

export const sessionReducer = (state = {session: !!sessionStorage.jwt}, action)  => {
  switch(action.type) {
    case constants.USER_LOGIN_SUCCESS:
      return !!sessionStorage.jwt
    case constants.USER_LOGOUT:
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}

