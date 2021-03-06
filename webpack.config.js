const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'wordrelay-setting',
    // 실서비스 production
    mode: 'development', 
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },
    // 입력!! 중요
    entry: {
        app: './client',
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['>5% in KR', 'last 2 chrome versions'],
                        },
                        debug:true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },
    plugins: [],
    // plugins: [
    //     new webpack.LoaderOptionsPlugin({debug: true}),
    // ],
    // 출력, 중요!!
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
};