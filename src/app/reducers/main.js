import { Map, List, fromJS } from 'immutable';
import { GET_PRODUCTS } from '../actions/main';

const initialState = Map({
	datas: List.of(),
	pn: 1,
	keyword: '',
	charged: false
});

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_PRODUCTS: 
			const { datas } = action.content;

			return state.set('datas', fromJS(datas));
	}

	return state;
}