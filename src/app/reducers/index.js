import { combineReducers } from 'redux';
import app from './app';
import login from './login';
import main from './main';

const rootReducer = combineReducers({
  app,
  login,
  main
})

export default rootReducer
