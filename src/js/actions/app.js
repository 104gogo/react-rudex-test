import { setCookie, getCookieValue } from '../lib/cookie';

export const CLICK_USERNAME = 'CLICK_USERNAME';
export const CLICK_MENU = 'CLICK_MENU';

export function clickUserName(op) {
	return {
		type: CLICK_USERNAME,
		op
	};
}

export function clickMenu(menu) {
	return {
		type: CLICK_MENU,
		menu
	};
}
