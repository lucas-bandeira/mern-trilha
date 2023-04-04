import React, {useEffect, useState} from "react";
import {Header} from "../../components/Header";

import './styles.css'

import {useParams} from 'react-router-dom';

import {getIdUsuario} from '../../services/auth';
import api from '../../services/api';
import {getToken, logout} from '../../services/auth';


function Perfil() {

  const [sair, setSair] = useState('');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  const user  = getIdUsuario();

  useEffect(() => {
    async function getUsuario() {
      var response = await (api.get(`/api/usuarios.details/${user?.idUsuario}`));

      setNome(response.data.nome_usuario);
      setEmail(response.data.email_usuario);
      setSenha(response.data.senha_usuario);
      setTipo(response.data.tipo_usuario);
    }

    getUsuario();
  }, [])

  async function confirmSair() {
    if (window.confirm("Deseja realmente sair do sistema?")) {
      const response = await api.get("/api/usuarios/destroytoken", {headers: {token: getToken()}});
      if (response.status === 200) {
        logout();
        window.location.href = '/'
      } else {
        alert("Não foi possível fazer o logout!");
      }
    }
  }

  async function handleSubmit() {

    const data = {
      nome_usuario: nome,
      email_usuario: email,
      senha_usuario: senha,
      tipo_usuario: tipo,
      _id: user?.idUsuario
    }

    if (nome !== '' && email !== '' && senha !== '' && tipo !== '') {
      const response = await api.put('/api/usuarios/', data);

      if (response.status === 200) {
        window.location.href = '/'
      } else {
        alert('Erro ao atualizar o usuário!');
      }
    } else {
      alert('Por favor, preencha todos os dados!');
    }
  }

  return (
    <>
      <Header/>
      <body>
      <button className="Sair" onClick={confirmSair} value={sair} onChange={e => setSair(e.target.value)}>Sair</button>
      <div className="formPerfil">
        <div>
          <div className="Perfil">
            Perfil
          </div>

          <div className="formulario">
            <form>
              <div className="inputBox">
                <select className="tipo_usuario" value={tipo} onChange={e => setTipo(e.target.value)}>
                  <option value="">Selecione seu Perfil....</option>
                  <option value="1">Usuario</option>
                  <option value="2">Parceiro</option>
                  <option value="3">Administrador</option>
                </select>
              </div>
              <br></br><br></br>
              <div className="inputBox">
                <input type='text' name="nome" id="nome" className="inputUser" value={nome}
                       onChange={e => setNome(e.target.value)}></input>
                <label htmlFor="nome" className="labelInput">Nome completo</label>

              </div>
              <br></br>
              <div className="inputBox">
                <input type='text' name='email' id='email' className="inputUser" value={email}
                       onChange={e => setEmail(e.target.value)}></input>
                <label htmlFor="nome" className="labelInput">Email</label>

              </div>
              <br></br>
              <div className="inputBox">
                <input type='senha' name='senha' id='senha' className="inputUser" value={senha}
                       onChange={e => setSenha(e.target.value)}></input>
                <label htmlFor="nome" className="labelInput">Senha</label>
              </div>

              <input type="submit" name="Salvar" id="Salvar" onClick={handleSubmit}></input>
            </form>
          </div>

          <div className="Blocolinha"></div>
        </div>
      </div>
      </body>
    </>
  )
}

export default Perfil;