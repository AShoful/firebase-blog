/* eslint-disable no-use-before-define */
import axios from 'axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionTypes';
import { showError, showLoader, hideError, hideLoader } from './actionsApp';

export function auth({ email, password, isLogin }) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    const authData = {
      email,
      password,
      returnSecureToken: true
    };

    let url =
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCopqgTR8loKNkzzclcfxaPb4002RauomM';
    if (!isLogin) {
      url =
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCopqgTR8loKNkzzclcfxaPb4002RauomM';
    }
    try {
      const response = await axios.post(url, authData);
      const { idToken, expiresIn, localId, email: name } = response.data;
      const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

      localStorage.setItem('token', idToken);
      localStorage.setItem('userId', localId);
      localStorage.setItem('expirationDate', expirationDate);
      localStorage.setItem('name', name);

      dispatch(authSuccess(idToken, name));
      dispatch(autoLogout(expiresIn));
      dispatch(hideLoader());
    } catch (e) {
      global.alert(e.message);
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function authSuccess(token, name) {
  return {
    type: AUTH_SUCCESS,
    token,
    name
  };
}

export function autoLogout(time) {
  return (dispatch) => {
    setTimeout(() => dispatch(logout()), time * 1000);
  };
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('name');

  return {
    type: AUTH_LOGOUT
  };
}

export function autoLogin() {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const name = localStorage.getItem('name');
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token, name));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
}
