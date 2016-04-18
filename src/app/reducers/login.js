import {　Map　} from 'immutable';
import { LOGIN, CHANGE_USERNAME, CHANGE_PASSWORD } from '../actions/login';

const initialState = Map({
    username: 'xiaotian.zhang@56qq.com',
    password: '123456'
});

export default function(state = initialState, action) {
  	switch (action.type) {
  		case CHANGE_USERNAME: 
            return state.set('username', action.username);
		case CHANGE_PASSWORD:
            return state.set('password', action.username);
    }
    
    return state;
}
