const Comment = require('./Comment.js')

class Post{
    comentarios = [];

    constructor(titulo, descricao, autor){
        this.titulo = titulo;
        this.descricao = descricao;
        this.autor = autor;
        this.createdAt = new Date();
    }

    addComentario(autor,texto){
        const comentario = new Comment(autor ,texto)
        this.comentarios.push(comentario);
        return comentario
    }
}

module.exports = Post;