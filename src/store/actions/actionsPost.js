import postApi from '../../api';
import { CLEAR_ITEM, FETCH_ITEM_SUCCESS } from './actionTypes';
import { showLoader, showError, hideError, hideLoader } from './actionsApp';

export function fetchItemSuccess(post) {
  return {
    type: FETCH_ITEM_SUCCESS,
    payload: post
  };
}

export function clearPost() {
  return {
    type: CLEAR_ITEM
  };
}

export function fetchItem(id) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    const res = await postApi.getItem(id);
    try {
      const post = res.data;
      console.log(post);
      dispatch(fetchItemSuccess(post));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
      dispatch(hideLoader());
    }
  };
}
