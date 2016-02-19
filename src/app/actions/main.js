import Fetch from '../lib/fetch';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export function getProducts() {
    return (dispatch, getState) => {
    	const { pn, keyword, charged } = getState().main.toJS();

		return Fetch.productsGet({ pn, keyword, charged })
			.then(res => res.json())
			.then(json => {	
				dispatch({ type: GET_PRODUCTS, content: json.content });
			});
	};
}