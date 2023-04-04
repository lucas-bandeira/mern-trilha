import React, {useState} from "react";
import BlogNoticiaModal from "../Noticia/Modal/Modal";
import useApi from "../../Utils/useApi";
import './BlogNovaMateria.css'
import { Hide } from "@chakra-ui/react";
import { loadConfig } from "@babel/core/lib/config/files";


const BlogNovaMateria = ({noticiaId}) => {
    const[titulo, setNoticia] = useState('');
    const[imagemUrl, setImagemUrl] = useState('');
    const[conteudo, setConteudo] = useState('');
    const[tipoNoticia, setTipoNoticia] = useState();

    const [sendNoticia, sendNoticaInfo] = useApi ({
        url: '/noticias',
        method: 'POST',
    });

    async function onSubmit(ev) {
        ev.preventDefault();
               
        try {
          await sendNoticia({
            data: {
              titulo,
              conteudo,
              imagemUrl,
              tipoNoticia,
            },
          });
          setNoticia('');
        } catch (e) {}
      }

    return(<BlogNoticiaModal>
        <form onSubmit={onSubmit} className="NoticiasInput">
            <p className="ModalNoticiasTexto"><strong>Insira as informações de uma nova noticia.</strong></p>
            <fieldset>
                <div className="imputNoticiasParte1">
                    <div>
                        <label className="labelTitulo">Titulo</label>
                        <textarea  
                            autoFocus
                            onChange={(ev => setNoticia(ev.target.value))}
                            value={titulo}
                            className='ImputTitulo'>
                            </textarea>
                    </div>

                    <div>
                        <label className="labelImagem">imagem Url</label>
                        <textarea 
                        onChange={(ev => setImagemUrl(ev.target.value))}
                        value={imagemUrl}
                        className="ImputImagem">
                        </textarea >
                    </div>

                    <div className="ModalNoticiasRadio">
                        <h1 hidden>{tipoNoticia}</h1>
                        
                        <label className="ModalNoticiasRadioLabel">Noticia
                            <input type='radio'  
                                onChange={(ev => setTipoNoticia(ev.target.value))}
                                value={'Noticia'}
                                name="tipoNotica"/>
                        </label>
                        
                        <label className="ModalNoticiasRadioLabel">Artigo 
                            <input type='radio'  
                                onChange={(ev => setTipoNoticia(ev.target.value))}
                                value={'Artigo'}
                                name="tipoNotica"/>
                        </label>
                        
                        <label className="ModalNoticiasRadioLabel">Evento
                        <input type='radio'  
                               onChange={(ev => setTipoNoticia(ev.target.value))}
                               value={'Evento'}
                               name="tipoNotica"/>
                        </label>
                    </div>
                </div>
    
                <div>
                    <label className="LabelConteudo">Conteúdo</label>
                    <textarea 
                        placeholder="Digitar..."
                        onChange={(ev => setConteudo(ev.target.value))}
                        value={conteudo}
                        className='ImputConteudo'>
                    </textarea>
                </div>
                
                
            </fieldset>
            <div>
                <button type="submit" className="NoticiasEnviar">Enviar</button>
            </div>
        </form>
    </BlogNoticiaModal>)
}
export default BlogNovaMateria;