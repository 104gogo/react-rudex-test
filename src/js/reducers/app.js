import { Map } from 'immutable';
import { CLICK_USERNAME, CLICK_MENU } from '../actions/app';
import { getCookieValue } from '../lib/cookie';

const initialState = Map({
	header: Map({
		username: getCookieValue('dmsUserName'),
		isClick: false
	}),
	menu: ''
});

export default function(state = initialState, action) {
	switch(action.type) {
		case CLICK_MENU: 
			return;
		case CLICK_USERNAME: 
			return ;
	}

	return state;
}