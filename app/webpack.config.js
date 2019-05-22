const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
    return {
        mode: env.production ? "production" : "development",
        devtool: "source-map",
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "index-bundle.js",
            publicPath: "/"
        },
        devServer: {
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            })
        ]
    };
};