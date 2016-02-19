import { login } from '../lib/fetch';

export function login() {
    return (dispatch, getState) => {
    	const { username, password } = getState().login.toJS();

		return login.loginPost(username, { password: password })
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