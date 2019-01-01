const HtmlWebPackPlugin = require("html-webpack-plugin");
// const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
// const { styles } = require('@ckeditor/ckeditor5-dev-utils');


module.exports = {
    // entry: './src/js/index.js',
    entry: './src/js/components/admin/index.js',
    output: {
        path: path.join(__dirname, '/bundle'),
        filename: 'bundle_index.js'
    },
    devServer: {
        inline: true,
        port: 6969,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|cjs)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
                
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            // template: './src/index.html'
            template: './src/js/components/admin/index.html'
        })
    ]
}