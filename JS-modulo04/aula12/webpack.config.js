/* const path = require('path'); */

const miniCssPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: { //a entrada 
        index: './src/index.js'
    },
    mode: 'development', //os modos {production || development}
    module: { //para trabalhar com loaders
        rules: [{
            test: /\.css$/, //Em quais arquivos vai ser aplicado o loader
            use: [
                miniCssPlugin.loader, 'css-loader'
            ] //dizer qual loader vai ser usado
        }]
    },
    plugins: [
        new miniCssPlugin()
    ]
}