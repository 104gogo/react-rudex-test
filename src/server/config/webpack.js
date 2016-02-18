import webpack from 'webpack';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import path from 'path';
import webpackConfig from '../../../webpack.config';

export function run(app) {
    const compiler = webpack(webpackConfig);
    const devMiddleware = webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        noInfo: false,
        stats: {
            colors: true
        }
    });
    const hotMiddleware = webpackHotMiddleware(compiler);

    app.use(devMiddleware);
    app.use(hotMiddleware);

    app.use('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'app/index.html'))
    });
}