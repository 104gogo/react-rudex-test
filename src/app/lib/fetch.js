import assign from 'object-assign';
import Request from './request';

export default {
	loginPost: function(userName, param) {
		return Request(`login/${ userName }/post`, param);
	},

	productsGet: function(param) {  
		return Request('product-page/get', assign({}, param, { ps: 10 }));
	}
};