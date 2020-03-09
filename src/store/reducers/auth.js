import {
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_START
} from '../actions/actionTypes';

const initialState = {
  token: null,
  authenticated: '',
  error: null,
  loading: false
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.login,
        authenticated: action.name,
        error: null,
        loading: false
      };
    case AUTH_START:
      return {
        ...state,
        loading: true
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: ''
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
}
