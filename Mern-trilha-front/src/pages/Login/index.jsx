import React, {useState} from "react";
import {Header} from "../../components/Header";
import './styles.css'

import {useForm} from 'react-hook-form'
import * as yup from "yup";


import {setNomeUsuario, login, setIdUsuario, setTipoUsuario} from '../../services/auth';
import {yupResolver} from "@hookform/resolvers/yup";
import api from "../../services/api";

const validationPost = yup.object().shape({
  email: yup.string().required("o email é obrigatório").max(50, "O email precisa ter menosde 50 caracteres"),
  senha: yup.string().required("A senha é obrigatório").max(20, "A senha precisa ter menosde 20 caracteres")
})

function Login() {
  const {formState: {errors}} = useForm({
    resolver: yupResolver(validationPost)
  })

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {

    await api.post('/api/usuarios/login', {email, senha})
      .then(res => {
        if (res.status === 200) {
          if (res.data.status === 1) {
            login(res.data.token);
            setIdUsuario(res.data.id_client);
            setNomeUsuario(res.data.user_name);
            setTipoUsuario(res.data.user_type);
            window.location.href = '/'
          } else if (res.data.status === 2) {
            alert('Atenção: ' + res.data.error);
          }
          setLoading(false);
        } else {
          alert('Erro no servidor');
          setLoading(false);
        }
      })
  }

  function loadSubmit() {
    setLoading(true);
    setTimeout(
      () => handleSubmit(),
      2000
    )
  }

  return (
    <>
      <Header/>

      <body>
        <div>

        <div className="conjunto">
          <div className="bloco"></div>
        </div>


        <img src="/imagens/logo2.png" alt="logo" id="logoImg"/>

        <div className="tituloLogin">
          Login
        </div>

        <div className="formLogin">

          <form>


            <div className="inputBox">
              <input type='text' name='email' id='email' className="inputUser" value={email}
                     onChange={e => setEmail(e.target.value)}></input>
              <label htmlFor="nome" className="labelInput">Email</label>
              <p className="error-message">{errors.email?.message}</p>
            </div>

            <br></br>

            <div className="inputBox">
              <input type='senha' name='senha' id='senha' className="inputUser" value={senha}
                     onChange={e => setSenha(e.target.value)}></input>
              <label htmlFor="nome" className="labelInput">Senha</label>
              <p className="error-message">{errors.senha?.message}</p>
            </div>

            <br></br>

            <input type="submit" name="enviarlogin" id='enviarlogin' onClick={loadSubmit} disabled={loading}></input>

            <br></br>

            <a id="link" href="/cadastro">Não possui casastro? Casatre-se</a>


          </form>
        </div>

        <div className="bloco2Login"></div>

      </div>
      </body>
    </>
  )
}

export default Login;