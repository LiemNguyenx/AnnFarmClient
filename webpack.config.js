const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

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
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                use: ['raw-loader']
            },
            {
                test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            singleton: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: styles.getPostCssConfig({
                            themeImporter: {
                                themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
                            },
                            minify: true
                        })
                    }
                ]
            },
            {
                loader: require.resolve('file-loader'),
                // Exclude `js` files to keep the "css" loader working as it injects
                // its runtime that would otherwise be processed through the "file" loader.
                // Also exclude `html` and `json` extensions so they get processed
                // by webpack's internal loaders.
                exclude: [
                    /\.(js|jsx|mjs)$/,
                    /\.html$/,
                    /\.json$/,
                    /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                    /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/
                ],
                options: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            // template: './src/index.html'
            template: './src/js/components/admin/index.html'
        }),
        new UglifyJsWebpackPlugin({
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
        })
    ]
}