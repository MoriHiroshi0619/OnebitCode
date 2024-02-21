const Post = require("./Post.js");

class Author{
    posts = [];
    constructor(nome){
        this.nome = nome;
    }

    criarPost(titulo, descricao){
        const post = new Post(titulo, descricao, this);
        this.posts.push(post);
        return post;
    }
}

module.exports = Author;