import { combineReducers } from 'redux';
import list from './list';
import login from './login';

const rootReducer = combineReducers({
  list,
  login
})

export default rootReducer
