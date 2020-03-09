/* eslint-disable no-underscore-dangle */
import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_REMOVE,
  FETCH_ITEMS_START,
  FETCH_ITEMS_ERROR,
  FETCH_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.items,
        loading: false
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items
          ? [...state.items, action.payload]
          : [action.payload],
        loading: false
      };
    case FETCH_ITEMS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case FETCH_ITEM_REMOVE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
