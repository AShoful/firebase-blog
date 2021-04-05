import { FETCH_ITEM_SUCCESS, CLEAR_ITEM } from '../actions/actionTypes';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ITEM_SUCCESS:
      return [action.payload];
    case CLEAR_ITEM:
      return [];
    default:
      return state;
  }
}
