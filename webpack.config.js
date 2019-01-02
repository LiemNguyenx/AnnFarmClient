const HtmlWebPackPlugin = require("html-webpack-plugin");
<<<<<<< HEAD
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
=======
// const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
>>>>>>> e0042fd64eaf73e2157cca9f340b3cd4e2b13d5f
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
<<<<<<< HEAD
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    warnings: false,
                    // Disabled because of an issue with Uglify breaking seemingly valid code:
                    // https://github.com/facebookincubator/create-react-app/issues/2376
                    // Pending further investigation:
                    // https://github.com/mishoo/UglifyJS2/issues/2011
                    comparisons: false,
                },
                mangle: {
                    safari10: true,
                },
                output: {
                    comments: false,
                    // Turned on because emoji and regex is not minified properly using default
                    // https://github.com/facebookincubator/create-react-app/issues/2488
                    ascii_only: true,
                },
            },
            // sourceMap: shouldUseSourceMap,
=======
>>>>>>> e0042fd64eaf73e2157cca9f340b3cd4e2b13d5f
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}