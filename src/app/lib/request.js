import fetch from 'isomorphic-fetch';
import assign from 'object-assign';
import { obj2url } from './common';
import { server } from '../../client/config';
import { getCookieValue } from '../lib/cookie';

export default function Request(uri, param) {
	assign(param, { 'x-dms-request-id': new Date().getTime() });

	const body = obj2url(param);
	const sid = getCookieValue('dmsSid') || '';

	return fetch(`http://${ server }/${ uri }`, {
	  	method: 'post',
	  	headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authentication': sid },
	  	body
	});
}