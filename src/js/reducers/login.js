import { LOGIN, CHANGE_USERNAME, CHANGE_PASSWORD } from '../actions/login';

const initialState = {
	username: 'linghong@56qq.cn',
	password: '123456'
};	

export default function login(state = initialState, action) {
  	 switch (action.type) {
  		case CHANGE_USERNAME:
  			return Object.assign({}, state, {username: action.username});
		case CHANGE_PASSWORD:
  			return Object.assign({}, state, {password: action.password});
    	default:
      		return state
  	}
}
