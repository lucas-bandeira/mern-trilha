import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export function Cards() {
   return (
      <div className="feed-Home">
         <div className="botao2">
            <Link to="/">
               <button type="button" className="area">
                  Área Cafuringa
               </button>
            </Link>
         </div>
         <div className="botao1">
            <Link to="/AreaBrasilia">
               <button type="button" className="area ">
                  Área Brasília
               </button>
            </Link>
         </div>
         <div className="botao3">
            <Link to="/AreaUniao">
               <button type="button" className="area">
                  Área União
               </button>
            </Link>
         </div>
      </div>
   )
}
