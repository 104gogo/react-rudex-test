import { index } from '../lib/fetch';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export function getProducts() {
    return (dispatch, getState) => {
    	const { username, password } = getState().login.toJS();

		return index.productsGet({ password: password })
			.then(res => res.json())
			.then(json => {	
				const { uuid, sid, userName, roleCode } = json.content;

				setCookie('dmsUserEmail', username);
				setCookie('dmsPassWord', password);	
				setCookie('dmsUuid', uuid);
				setCookie('dmsSid', sid);
				setCookie('dmsUserName', userName);
				setCookie('dmsRoleCode', roleCode);

				location.hash = '#app/index';
			});
	};
}