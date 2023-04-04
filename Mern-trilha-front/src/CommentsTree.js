import React from "react";
import './CommentsTree.css';

const NoticiasModalCommentsTree = ({comments}) => {
if (!comments){
    return <div>Carregando</div>
}
    return(
        <ul className="noticia-modal-comments-tree">
            {comments.map((item) => (
                <li className="noticia-modal-comments-tree__item">
                    <img src={item.user.avatarUrl} 
                    alt={`foto de ${item.user.name}`} 
                    className="noticia-modal-comments-tree__item__avatar">
                    </img>
                    <div className="noticia-modal-comments-tree__item__info">
                        <span className="noticia-modal-comments-tree__item__name">{item.user.name}</span>
                        <p>{item.comment}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default NoticiasModalCommentsTree;