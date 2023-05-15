import React from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Cards } from '../../components/Cards'
import './styles.css'

function Home() {
   return (
      <div>
         <div>
            <Header />
         </div>
         <main className="main">
            <div>
               <Cards />
            </div>

            <div className='container'>
               <div className="trilhas">
                  <p>
                     Trilhas
                     <img src="/imagens/linha.png" alt="linha" />
                  </p>
               </div>

               <div className="conteudo">
                  <div className="seções">
                     <div className="Localização">
                        <div className="img-title">
                           <img src="/imagens/Spot.png" alt="Spot" />
                           <h1> Localização</h1>
                        </div>
                        <p>
                           O trajeto inicias-se na pedra fundamental de Brasília
                           e compõe regiões como Planaltina, Goias e Parque
                           Nacional de Brasilia.
                        </p>
                     </div>
                     <div className="Dificuldade">
                        <div className="img-title">
                           <img src="/imagens/grafico.png" alt="grafico" />
                           <h1> Dificuldade</h1>
                        </div>
                        <p>Diversidade de Topografias e clima variado.</p>
                     </div>
                     <div className="Distancia">
                        <div className="img-title">
                           <img src="/imagens/distancia.png" alt="distancia" />
                           <h1> Distancia</h1>
                        </div>
                        <p>Trilha com a distancia de 146km.</p>
                     </div>
                  </div>
                  <div className="mapa">
                     <iframe
                        title="trail-route"
                        className="responsive-iframe"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1wlBUE0O1H7Al_a_ULzB8AyeeX3uaKuc&ehbc=2E312F"
                     ></iframe>
                  </div>
               </div>
            </div>

            <div className="informações">
               <div className="blococinza">
                  <div className="imagem">
                     <img src="/imagens/linha3.png" alt="linha 3" />
                  </div>
                  <div className="box">
                     <p className="b">Arco </p>
                     <p className="b1">Cafuringa</p>
                  </div>
                  <div className="linha">
                     <img src="/imagens/linha2.png" alt="linha 2" />
                  </div>
               </div>

               <div className="amarela">
                  <div className="text-amarela">
                     <p>
                        Destaca o aspecto ambiental, a cultura rural, religiosa
                        e histórica. Percorre ampla região com diversos
                        atrativos naturais e os atributos do Cerrado bem
                        preservados, topografia variada, belas paisagens e
                        conectando várias Unidades de Conservação da região.
                     </p>
                  </div>
                  <div className="img-amarela">
                     <img src="/imagens/image 3.png" alt="imagem 3" />
                  </div>
               </div>
            </div>
         </main>
         <Footer />
      </div>
   )
}

export default Home
