import React from "react";

const UserCard = ({avatarUrl, name, comment, onClick2}) => {
    
    //const commentsTree = useRef(null)
    //const onClick2 = () => setIsActive(!isActive)
    //const [isActive, setIsActive] = useState(!isActive)
    return(
        <div>
        <div className="Blogcomentario">
            <img src={avatarUrl}  id="imgComentarios"></img>
            
            <div className="BlogComentario-texto"> 
                <span>{name}</span>
                <div className="BlogFundoComentario">
                    <p>{comment}</p>
                </div>
                <textarea 
                    type='text'  
                    placeholder='comentar' 
                    className="BlogCaixa-Comentario">
                </textarea>
                <button 
                    className="BlogComentario-botao">
                    Comentar
                </button> 
                <button
                    className="blogBtnArvoreComentarios"
                    onClick={onClick2}>
                comentarios</button>
               
            </div>
        </div>
    </div>
    )
}

export default UserCard;