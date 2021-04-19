import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import app from './app';

export default combineReducers({
  posts,
  auth,
  app
});
