import React from "react";
import './CommentNews.css'
const CommentNews = ({imagemUrl, titulo, conteudo}) => {
   

    return(
        <div className="blogNoticias">
            <div className="blogNoticiasImagem">
                <img src={imagemUrl}/>
            </div>
            <div className="BlogMaisConteudo">
                <p className="BlogMaisConteudoTitulo">{titulo}</p>
                <p className="BlogMaisConteudoConteudo">{conteudo}</p>
            </div>
        </div>
    )
}

export default CommentNews