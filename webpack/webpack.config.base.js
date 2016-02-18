import path from 'path';

export default {
 	module: {
    	loaders: [
		    {
		      	test: /\.js$/,
		      	loaders: [ 'babel' ],
		      	exclude: /node_modules/
		    },
		    {
		      	test: /\.css?$/,
		      	loaders: [ 'style', 'raw' ],
		      	include: path.join(__dirname, '..',  'public')
		    }
		]
  	},
	resolve: {
		extensions: ['', '.js']
	}
};