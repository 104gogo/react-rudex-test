import R from 'ramda';

export function obj2url(o) {
	var change = (arr, x) => {
		arr.push(`${ x }=${ o[x] }`);
		return arr;
	};

	return R.compose(R.join('&'), R.reduce(change, []), R.keys)(o);
}