import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export function Header() {
   return (
      <div>
         <header className="headers">
            <div className="toolbar">
               <nav>
                  <div className="img">
                     <img src="/imagens/logo.png" alt="logo" id="lo" />
                  </div>

                  <ul>
                     <li>
                        <Link to="/">INÍCIO</Link>
                     </li>
                     <li>
                        <a>BLOG</a>
                     </li>
                     <li>
                        <Link to="/Sobre">SOBRE</Link>
                     </li>
                     <li>
                        <a>SERVIÇOS</a>
                     </li>
                  </ul>

                  <p>
                     <Link to="/Login">LOGIN</Link>
                  </p>
               </nav>
            </div>

            <div className="Titulo">
               <p className="p">Caminhos do </p>
               <p className="p1">Planalto Central</p>
            </div>
         </header>
      </div>
   )
}
