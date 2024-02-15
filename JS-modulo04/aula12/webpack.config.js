/* const path = require('path'); */

module.exports = {
    entry: { //a entrada 
        index: './src/index.js'
    },
    mode: 'development', //os modos {production || development}
    module: { //para trabalhar com loaders
        rules: [{
            test: /\.css$/, //Em quais arquivos vai ser aplicado o loader
            use: [
                'style-loader', 'css-loader'
            ] //dizer qual loader vai ser usado
        }]
    }
}