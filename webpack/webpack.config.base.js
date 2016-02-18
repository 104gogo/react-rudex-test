export default {
 	module: {
    	loaders: [
		    {
		      	test: /\.js$/,
		      	loaders: [ 'babel' ],
		      	exclude: /node_modules/
		    }
		]
  	},
	resolve: {
		extensions: ['', '.js']
	}
};