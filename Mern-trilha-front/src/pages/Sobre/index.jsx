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
        <div className="feed">
          <div className="parte1">
            <div className="seção2">

              <div className="quadrado">
                <div className="nossamarca">
                  <h1> Nossa Marca</h1>
                </div>
                <p>Desejamos que todos tenham acesso a natureza e possa
                  ver sua beleza e que essa seja a marca dessa geração.</p>
                <img src="/imagens/logo.png" alt="logocentral" id="locentral"/>
              </div>
            </div>
          </div>
          <div className="parte2">
            <div>
              <div className="Retangulo"></div>
            </div>

            <div className="Cachoeira">
              <div className="blocoAmarelo4"></div>
              <img src="/imagens/cachoeira.png" alt="cachoeira"/>
            </div>


            <div className="divisao">
              <div className="projeto">
                <h1> CAMINHOS DO PLANALTO CENTRAL</h1>
                <img src="/imagens/linha.png" alt="linha"/>
                <p>O CPC (Caminhos do Planalto Central) é um Sistema de
                  Trilhas Ecológicas do DF. Estes percursos serão
                  destinados aos caminhantes, ciclistas, corredores,
                  cavaleiros e outros interessados em desenvolver
                  atividades relacionadas ao lazer, recreação, esporte,
                  imersão, contemplação e conservação do ambiente,
                  particularmente do Planalto Central, no território
                  do DF, mas sem a utilização de meios motorizados para
                  locomoção. </p>

              </div>

            </div>


          </div>
        </div>


        <div className="info">
          <div className="seção">
            <div className="Parceiros">
              <div className="maos">
                <img src="/imagens/apertodemao.png" alt="apertodemao"/>
              </div>
              <div>
                <h1> PARCEIROS</h1>
                <p>
                  Concebido inicialmente com a finalidade de implantar 5 trilhas
                  de longo curso, o CPC interliga cidades, comunidades, paisagens,
                  unidades de conservação, atrativos de valor histórico, cultural e
                  ambiental.</p><p>Os 400km dos traçados de trilhas do CPC foram
                desenhados objetivando buscar ao máximo a conexão dos atrativos
                . E proporcionar, dessa forma,aos visitantes uma significativa
                diversidade de experiências, tanto quanto aos aspectos paisagísticos
                ambientais, como aos socioculturais envolvendo a história,
                as tradições culturais, a arquitetura, culinária, religiosidade,
                educação, aspectos cívicos e outros conforme o trilheiro tem
                a oportunidade de percorrer nossas trilhas.
              </p>
                <div className="botaovermais">
                  <Link to="/Cadastro">
                    <button type="button" className="vermais">Ver Mais
                    </button>
                  </Link>
                </div>

              </div>

            </div>
          </div>
          <div className="seção-2">
            <div className="Regioes">
              <div className="lup">
                <img src="/imagens/lupa.png" alt="lupa"/>
              </div>
              <div>
                <h1> REGIOES</h1>
                <p>Este sistema de trilhas ecológicas do DF é formado por
                  três arcos (Arco União, Arco Brasília e Arco Cafuringa),
                  que se iniciam terminam em 2 pontos de relevantes interesses,
                  a saber: a Pedra Fundamental (marco zero do CPC) e a
                  Floresta Nacional de Brasília.</p>
                <p> Os referidos arcos
                  se conectarão ao Caminhos dos Veadeiros pela 'Saída Leste’,
                  cujo ponto de partida é a Pedra Fundamental e segue em
                  direção à Lagoa Feia em Formosa-GO, e pela 'Saída Oeste’,
                  que interligará a Flona à Brazlândia, contornando a
                  Barragem do Descoberto. Em Brazlândia, o CPC se ligará à
                  Rota do Rio Areias.</p>


                <div className="botaovermais2">
                  <Link to="/">
                    <button type="button" className="vermais2">Ver Mais
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default Home;