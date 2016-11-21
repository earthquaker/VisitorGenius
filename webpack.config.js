var path = require('path');

module.exports = {
    entry: ["./src/index.js"],
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: "run.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};