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
                           O trajeto iniciasse na pedra fundamental de Brasília
                           e compoem regiões como o Parque Nacional de Brasilia,
                           Floresta Nacional de Brasilia entre outros.
                        </p>
                     </div>
                     <div className="Dificuldade">
                        <div className="img-title">
                           <img src="/imagens/grafico.png" alt="grafico" />
                           <h1> Dificuldade</h1>
                        </div>
                        <p>Diversidade de TopoGrafia. </p>
                     </div>
                     <div className="Distancia">
                        <div className="img-title">
                           <img src="/imagens/distancia.png" alt="distancia" />
                           <h1> Distancia</h1>
                        </div>
                        <p>Trilha com a distancia de 80 Km</p>
                     </div>
                  </div>
                  <div className="mapa">
                     <iframe
                        title="trail-route"
                        className="responsive-iframe"
                        src="https://www.google.com/maps/d/embed?mid=147MG-4hX5TwVd0wgaQbb_pZL1-XTZcE&ehbc=2E312F"
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
                     <p className="b1">União</p>
                  </div>
                  <div className="linha">
                     <img src="/imagens/linha2.png" alt="linha 2" />
                  </div>
               </div>

               <div className="amarela">
                  <div className="text-amarela">
                     <p>
                        Trajeto de 80km com rico valor paisagístico, cultural,
                        místico e gastronômico. É possível encontrar no percurso
                        diversos espaços para vivência espiritual, boa
                        alimentação e contato com manifestações culturais. Aqui
                        o público encontrará a Torre Digital: símbolo dos
                        Caminhos do Planalto Central.
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
