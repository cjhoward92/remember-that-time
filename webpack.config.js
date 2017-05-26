const path = require('path');
module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}