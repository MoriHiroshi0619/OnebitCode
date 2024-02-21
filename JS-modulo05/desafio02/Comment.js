class Comment{
    constructor(autor, texto){
        this.autor = autor;
        this.texto = texto;
        this.createdAt = new Date();
    }
}

module.exports = Comment;