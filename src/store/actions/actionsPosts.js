/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
import postApi from '../../api';
import {
  FETCH_ITEMS_START,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_REMOVE,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_ERROR,
  FETCH_SUCCESS
} from './actionTypes';

export function fetchItems(page) {
  return async (dispatch) => {
    dispatch(fetchItemsStart());
    const res = await postApi.get(page);
    try {
      const cards = Object.entries(res.data).map((item) => ({
        ...item[1],
        id: item[0]
      }));
      dispatch(fetchItemsSuccess(cards));
    } catch (error) {
      dispatch(fetchItemsError(error));
    }
  };
}

export function fetchItemsStart() {
  return {
    type: FETCH_ITEMS_START
  };
}

export function fetchItemsSuccess(data) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    items: data,
    loading: false
  };
}

export function fetchItemsError(error) {
  return {
    type: FETCH_ITEMS_ERROR,
    error,
    loading: false
  };
}

export function fetchItem(id) {
  return async (dispatch) => {
    dispatch(fetchItemsStart());
    const res = await postApi.getItem(id);
    try {
      const post = res.data;
      post.id = id;
      dispatch(fetchItemSuccess(post));
    } catch (error) {
      dispatch(fetchItemsError(error));
    }
  };
}

export function fetchItemSuccess(post) {
  return {
    type: FETCH_ITEM_SUCCESS,
    payload: post
  };
}

export function fetchRemoveItem(id) {
  return async (dispatch) => {
    await postApi.remove(id);
    try {
      dispatch(removeItem(id));
      window.alert('Пост успешно удален!');
    } catch (error) {
      dispatch(fetchItemsError(error));
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
    dispatch(fetchItemsStart());
    await postApi.post(data);
    try {
      dispatch(fetchSuccess());
      window.alert('Пост успешно сохранен!');
    } catch (error) {
      dispatch(fetchItemsError(error));
      window.alert('База данных не доступна, попробуйте позже');
    }
  };
}

export function fetchPatchItem(data, id) {
  return async (dispatch) => {
    dispatch(fetchItemsStart());
    console.log('patch', id);
    await postApi.patch(data, id);
    try {
      dispatch(fetchSuccess());
      window.alert('Пост успешно изменен!');
    } catch (error) {
      dispatch(fetchItemsError(error));
      window.alert('База данных не доступна, попробуйте позже');
    }
  };
}

function fetchSuccess() {
  return {
    type: FETCH_SUCCESS
  };
}
