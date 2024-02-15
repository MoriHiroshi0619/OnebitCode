const path = require('path');

module.exports = {
    entry: { //a entrada 
        main: './src/index.js',
        hello: './src/hello.js'
    },
    mode: 'development', //os modos {production || development}
    output: {
        path: path.resolve(__dirname, 'public'), //caminho da saida
        filename: '[name].bundle.min.js' //nome do arquivo
    }
}