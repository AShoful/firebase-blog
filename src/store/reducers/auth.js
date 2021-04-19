import { AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/actionTypes';

const initialState = {
  token: null,
  authenticated: ''
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        authenticated: action.name
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: ''
      };
    default:
      return state;
  }
}
