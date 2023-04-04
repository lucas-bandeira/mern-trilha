import React from "react";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import './styles.css'
import {Link} from "react-router-dom";


function Home() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <main className="main">
        <div className="feed-Home">

          <div className="botao1">

            <Link to="/AreaBrasilia">
              <button type="button" className="areabrasilia ">Area Brasilia
              </button>
            </Link>
          </div>
          <div className="botao2">
            <Link to="/">
              <button type="button" className="areacafuringa">Area Cafuringa
              </button>
            </Link>
          </div>
          <div className="botao3">
            <Link to="/AreaUniao">
              <button type="button" className="areauniao">Area União
              </button>
            </Link>
          </div>

        </div>
        <div className="trilhas">
          <b> Trilhas<img src="/imagens/linha.png" alt="linha"/></b>
        </div>
        <div className="conteudo">
          <div className="seções">
            <div className="Localização">
              <img src="/imagens/Spot.png" alt="Spot"/><h1> Localização</h1>
              <p>O trajeto iniciasse na pedra fundamental de Brasília e compoem regiões como Planaltina, Goias, Parque Nacional de
                Brasilia</p>
            </div>
            <div className="Dificuldade">
              <img src="/imagens/grafico.png" alt="grafico"/><h1> Dificuldade</h1>
              <p>Diversidade de Topografias e clima variado</p>
            </div>
            <div className="Distancia">
              <img src="/imagens/distancia.png" alt="distancia"/><h1> Distancia</h1>
              <p>Trilha com a distancia de 146km</p>
            </div>
          </div>
          <div>
            <iframe className="responsive-iframe "
                    src="https://www.google.com/maps/d/u/0/embed?mid=1wlBUE0O1H7Al_a_ULzB8AyeeX3uaKuc&ehbc=2E312F"></iframe>


          </div>
        </div>
        <div className="informações">
          <div className="blococinza">
            <div className="imagem">
              <img src="/imagens/linha3.png" alt="linha 3" width={"100%"}/>
            </div>
            <div className="cinza">

              <b className="b">Arco </b>
              <b className="b1">Cafuringa</b>

            </div>
            <div className="linha">
              <img src="/imagens/linha2.png" alt="linha 2"/>
            </div>
          </div>
          <div className="amarela">
            <p>Destaca o aspecto ambiental, a cultura rural, religiosa e histórica.
              Percorre ampla região com diversos atrativos naturais e os atributos do
              Cerrado bem preservados, topografia variada, belas paisagens e conectando
              várias Unidades de Conservação da região</p>
            <img src="/imagens/image 3.png" alt="imagem 3" width={"100%"}/>

          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;