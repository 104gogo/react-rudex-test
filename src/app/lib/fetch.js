import fetch from 'isomorphic-fetch';
import assign from 'object-assign';
import { obj2url } from './common';
import { server } from '../../client/config';

export function Fetch(uri, param) {
	assign(param, { 'x-dms-request-id': new Date().getTime() });

	const body = obj2url(param);

	return fetch(`http://${ server }/${ uri }`, {
	  	method: 'post',
	  	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	  	body: body
	});
}

export const login = {
	loginPost: function(userName, param) {
		return Fetch(`login/${ userName }/post`, param);
	}
};