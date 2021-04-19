/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import postApi from '../../api';
import {
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_REMOVE,
  FETCH_ITEMS_SUCCESS
} from './actionTypes';
import { showError, showLoader, hideError, hideLoader } from './actionsApp';

export function fetchItems(page) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    const res = await postApi.get(page);
    try {
      const cards = Object.entries(res.data).map((item) => ({
        ...item[1],
        id: item[0]
      }));
      dispatch(fetchItemsSuccess(cards));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
      dispatch(hideLoader());
    }
  };
}

export function fetchItemsSuccess(data) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    data
  };
}

export function fetchItem(id) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    const res = await postApi.getItem(id);
    try {
      const post = res.data;
      post.id = id;
      dispatch(fetchItemSuccess(post));
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
      dispatch(hideLoader());
    }
  };
}

export function fetchItemSuccess(post) {
  return {
    type: FETCH_ITEM_SUCCESS,
    post
  };
}

export function fetchRemoveItem(id) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    await postApi.remove(id);
    try {
      dispatch(removeItem(id));
      window.alert('Пост успешно удален!');
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
      dispatch(hideLoader());
    }
  };
}

export function removeItem(id) {
  return {
    type: FETCH_ITEM_REMOVE,
    payload: id
  };
}

export function fetchPostItem(data) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    await postApi.post(data);
    try {
      window.alert('Пост успешно сохранен!');
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
      dispatch(hideLoader());
      window.alert('База данных не доступна, попробуйте позже');
    }
  };
}

export function fetchPatchItem(data, id) {
  return async (dispatch) => {
    dispatch(showLoader());
    dispatch(hideError());
    await postApi.patch(data, id);
    try {
      window.alert('Пост успешно изменен!');
      dispatch(hideLoader());
    } catch (error) {
      dispatch(showError(error.message));
      dispatch(hideLoader());
      window.alert('База данных не доступна, попробуйте позже');
    }
  };
}
