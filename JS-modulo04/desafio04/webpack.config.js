const miniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:{
        script: './src/script.js',
        /* calcular: './src/JS/calcular.js',
        copy: './src/JS/copy.js',
        keyHandler: './src/JS/keyHandler.js',
        theme: './src/JS/theme.js' */
    },
    mode: 'development',
    module:{
        rules: [{
            test: /\.css$/,
            use: [
                miniCssPlugin.loader, 'css-loader'
            ]
        }]
    },
    plugins: [
        new miniCssPlugin()
    ]
}