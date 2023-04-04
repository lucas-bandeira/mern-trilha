import React, {useEffect, useState} from 'react';
import BlogNoticiaModal from './Modal';
import useApi from '../../../Utils/useApi';
import './Modal.css';

const NoticiasModal = ({noticiaId}) =>{
    const[comment,setComment] = useState('');
    const [load, loadInfo] = useApi ({
        url: '/comments',
        params: {
            noticiaId,
            _expand: 'user'
        }
    });

    const [sendComment, sendCommentInfo] = useApi ({
        url: '/comments',
        method: 'POST',
    });

    useEffect(() => {
        load();
    }, []);

    async function onSubmit(ev) {
        ev.preventDefault();
        try {
          await sendComment({
            data: {
              userId: 1,
              noticiaId,
              comment,
            },
          });
          setComment('');
        } catch (e) {}
      }
    
    return(
        <BlogNoticiaModal>
            <form className='noticia-modal__comment-form' onSubmit={onSubmit}>  
                <div className='ModalBlogTextos'>
                    <p className='ModalBlogTextosMain'>Adicione um comentario a esta noticia</p>
                    <p className='ModalBlogTextosSecundary'>Porfavor digite seu comentario </p>
                    <textarea 
                        placeholder='comentar...' 
                        onChange={(ev) => setComment(ev.target.value)} 
                        value={comment}
                    ></textarea>
                </div>
                <div className='contentModalButtoes'>
                    <button type='submit' className='ModalEnviar'>Comentar</button>
                </div>
            </form>
        </BlogNoticiaModal>
    )
}

export default NoticiasModal;