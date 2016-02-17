import { combineReducers } from 'redux';
import app from './app';
import login from './login';

const rootReducer = combineReducers({
  app,
  login
})

export default rootReducer
