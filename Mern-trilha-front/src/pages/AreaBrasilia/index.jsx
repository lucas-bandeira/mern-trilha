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
                           e compoem regiões como Lago Paranoá, passando pela
                           Ponte Juscelino Kubitschek, Eixo Monumental entre
                           outros Durante a trilha
                        </p>
                     </div>
                     <div className="Dificuldade">
                        <div className="img-title">
                           <img src="/imagens/grafico.png" alt="grafico" />
                           <h1> Dificuldade</h1>
                        </div>
                        <p>Diversidade de Topografias </p>
                     </div>
                     <div className="Distancia">
                        <div className="img-title">
                           <img src="/imagens/distancia.png" alt="distancia" />
                           <h1> Distancia</h1>
                        </div>
                        <p>Trilha com a distancia de 85km</p>
                     </div>
                  </div>
                  <div className="mapa">
                     <iframe
                        title="trail-route"
                        className="responsive-iframe"
                        src="https://www.google.com/maps/d/embed?mid=1ROmyb1-tTVoYFcBSLuZw9MtcLvl13UY&ehbc=2E312F"
                        width="640"
                        height="480"
                        zoom="15"
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
                     <p className="b1">Brasília</p>
                  </div>
                  <div className="linha">
                     <img src="/imagens/linha2.png" alt="linha 2" />
                  </div>
               </div>
               <div className="amarela">
                  <div className="text-amarela">
                     <p>
                        Percurso de 85km, de viés cívico, histórico e cultural,
                        cujo principal atrativo é o Eixo Monumental de Brasília,
                        Patrimônio Cultural da Humanidade, com seus elementos
                        arquitetônicos, culturais e paisagísticos , incluindo o
                        centro da cidade e seu traçado urbano singular, os
                        palácios e monumentos, sobretudo de Niemeyer, as obras
                        de arte e o paisagismo, os mirantes e o belo pôr do sol,
                        bem como os diversos espaços culturais de Brasília. Além
                        do Eixo, o Arco Brasília passa pelo Córrego do Meio,
                        Ribeirão Sobradinho, Lago Paranoá entre a Barragem, a
                        Ermida Dom Bosco e a Ponte JK e pelo Parque Nacional de
                        Brasília com as Trilhas Cristal Água até chegar aos
                        Caminhos da Flona.
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
