import React from "react";
import {GrFacebook} from 'react-icons/gr';
import {VscTwitter} from 'react-icons/vsc';
import {SiInstagram} from 'react-icons/si';
import {TfiYoutube} from  'react-icons/tfi';
import './styles.css'


export function Footer() {
  return (
    <div className="footer">

        <div className="rodape">
          
          <div className="logSobre">
            <img src="/imagens/logoSobre.png" alt="logo"/>
          </div>

          <div className="redes">
            <div>
              <p>Acompanhe nosso trabalho:</p>
            </div>
            <div className="icones">
              <li><GrFacebook/></li>
              <li><VscTwitter/></li>
              <li><SiInstagram/></li>
              <li><TfiYoutube/></li>
            </div>
          </div>

        </div>

        <div className="cop">
          <span className="associação">Associação Rede Brasileira de Trilhas de longo Curso (Rede Trilhas) | Copyright  © 2022</span>
        </div>

    </div>
  );

}
