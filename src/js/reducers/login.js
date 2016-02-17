import { LOGIN, CHANGE_USERNAME, CHANGE_PASSWORD } from '../actions/login';
import {　Map　} from 'immutable';

const initialState = Map({
    username: 'linghong@56qq.com',
    password: '123456'
});

export default function login(state = initialState, action) {
  	switch (action.type) {
  		case CHANGE_USERNAME: 
            return state.set('username', action.username);
		case CHANGE_PASSWORD:
            return state.set('password', action.username);
    	default:
      		return state;
  	}
}
