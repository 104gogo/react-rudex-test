const NODE_ENV = process.env.NODE_ENV;
const webpackConfig = require(`./webpack/webpack.config.${ NODE_ENV }`).default;

export default webpackConfig;
