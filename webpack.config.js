const path = require('path');
const { spawn } = require('child_process');
const webpack = require('webpack');

const port = process.env.PORT || 8080;
const publicPath = `http://localhost:${port}/dist/`;

const devServer = {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
        aggregateTimeout: 300,
        poll: 100
    },
    historyApiFallback: {
        verbose: true,
        disableDotRule: false,
    },
    setup() {
        if (process.env.START_HOT) {
            spawn(
                'npm',
                ['run', 'start-hot-renderer'],
                { shell: true, env: process.env, stdio: 'inherit' }
            )
            .on('close', code => process.exit(code))
            .on('error', spawnError => console.error(spawnError));
        }
    }
};

let config = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.bundle.js'
        //publicPath
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
            {test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [new webpack.HotModuleReplacementPlugin({
      // @TODO: Waiting on https://github.com/jantimon/html-webpack-plugin/issues/533
      // multiStep: true
    })],
}

if (process.env.START_HOT) {
    config.devServer = devServer;
}
module.exports = config;