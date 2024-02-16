const miniCssPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
    },
    entry:{
        script: './src/script.js',
        /* calcular: './src/JS/calcular.js',
        copy: './src/JS/copy.js',
        keyHandler: './src/JS/keyHandler.js',
        theme: './src/JS/theme.js' */
    },
    mode: 'production',
    output:{
        filename: '[name].min.js'
    },
    module:{
        rules: [{
            test: /\.css$/,
            use: [
                miniCssPlugin.loader, 'css-loader'
            ]
        },{
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        }]
    },
    plugins: [
        new miniCssPlugin()
    ]
}