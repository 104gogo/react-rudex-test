import path from 'path';
import webpack from 'webpack';
import assign from 'object-assign';
import baseConfig from './webpack.config.base';

export default assign({}, baseConfig, {
	entry: [
        'webpack-hot-middleware/client?reload=true',
    	path.join(__dirname, '..', 'src', 'client/index')
    ],
    output: {
        path: path.join(__dirname, '..', 'dist', 'assets'),
	    filename: 'bundle.js',
	    publicPath: '/assets/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()

        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('development')
        //     }
        // })
    ]
});