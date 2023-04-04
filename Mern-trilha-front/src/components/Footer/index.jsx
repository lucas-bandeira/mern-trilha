import React from "react";
import {GrFacebook} from 'react-icons/gr';
import {VscTwitter} from 'react-icons/vsc';
import {SiInstagram} from 'react-icons/si';
import './styles.css';


export function Footer() {
  return (
    <div className="footer">
      <div className="rodape">
        <div className="logSobre">
          <img src="/imagens/logoSobre.png" alt="logo"/>
        </div>
        <br/>
        <div className="icones">
          <li><GrFacebook/></li>
          <li><VscTwitter/></li>
          <li><SiInstagram/></li>
        </div>
        <div className="rede">
          <span className="associação">Associação Rede Brasileira de Trilhas de longo Curso (Rede Trilhas)</span>
        </div>
        <div className="Copyright">
          <span className="copy"> Copyright  © 2022</span>
        </div>

      </div>
    </div>
  );

}
