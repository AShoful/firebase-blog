/* eslint-disable no-underscore-dangle */
import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_REMOVE
} from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return [...action.data];
    case FETCH_ITEM_SUCCESS:
      return state.length ? [...state, action.post] : [action.post];
    case FETCH_ITEM_REMOVE:
      return [...state.filter((item) => item.id !== action.id)];
    default:
      return state;
  }
}
