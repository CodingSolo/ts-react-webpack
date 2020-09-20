const { merge } = require("webpack-merge");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.config");

const config = {
    mode: "production",
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "./build"),
        filename: "js/main.[contentHash].js",
        publicPath: "./",
    },
    plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(common, config);
