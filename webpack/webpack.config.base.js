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
		    },
		    { 
		    	test: /\.scss$/, 
		    	loaders: [ 'style', 'css', 'autoprefixer', 'sass' ] 
		    }
		    // {
		    //   	test: /.*\.(png|gif|svg|jpe?g)$/,
		    //   	loader: 'file?name=../../images/[hash:8].[name].[ext]',
		    //   	include: path.join(__dirname, "..",  "public")
		    // }
		]
  	},
	resolve: {
		extensions: ['', '.js']
	}
};