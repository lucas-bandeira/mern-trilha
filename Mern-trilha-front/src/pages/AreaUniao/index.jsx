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
        <div className="feed-areauniao">

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
              <p>O trajeto iniciasse na pedra fundamental de Brasília e compoem regiões como o Parque Nacional de Brasilia,
                Floresta Nacional de Brasilia entre outros.</p>
            </div>
            <div className="Dificuldade">
              <img src="/imagens/grafico.png" alt="grafico"/><h1> Dificuldade</h1>
              <p>Diversidade de TopoGrafia. </p>
            </div>
            <div className="Distancia">
              <img src="/imagens/distancia.png" alt="distancia"/><h1> Distancia</h1>
              <p>Trilha com a distancia de 80 Km</p>
            </div>
          </div>
          <div>
            <iframe title='trail-route' className="responsive-iframe "
                    src="https://www.google.com/maps/d/embed?mid=147MG-4hX5TwVd0wgaQbb_pZL1-XTZcE&ehbc=2E312F" width="640"
                    height="480"></iframe>

            zoom: 15,
          </div>
        </div>
        <div className="informações">
          <div className="blococinza">
            <div className="imagem">
              <img src="/imagens/linha3.png" alt="linha 3"/>
            </div>
            <div className="cinza">

              <b className="b">Area </b>
              <b className="b1">União</b>

            </div>
            <div className="linha">
              <img src="/imagens/linha2.png" alt="linha 2"/>
            </div>
          </div>
          <div className="amarela">
            <p>rajeto de 80km com rico valor paisagístico,
              cultural, místico e gastronômico. É possível
              encontrar no percurso diversos espaços para
              vivência espiritual, boa alimentação e contato
              com manifestações culturais. Aqui o público
              encontrará a Torre Digital: símbolo dos Caminhos do Planalto Centra</p>
            <img src="/imagens/image 3.png" alt="imagem 3"/>

          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;