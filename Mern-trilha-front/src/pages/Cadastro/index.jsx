import React, { useState } from 'react'
import { Header } from '../../components/Header'
import './styles.css'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import api from '../../services/api'
import { getIdUsuario } from '../../services/auth'
import { getToken, logout } from '../../services/auth'

const validationPost = yup.object().shape({
   nome: yup
      .string()
      .required('O nome é obrigatório')
      .max(40, 'O nome precisa ter menosde 40 caracteres'),
   email: yup
      .string()
      .required('o email é obrigatório')
      .max(50, 'O email precisa ter menosde 50 caracteres'),
   senha: yup
      .string()
      .required('A senha é obrigatório')
      .max(20, 'A senha precisa ter menosde 20 caracteres')
})

function Cadastro() {
   const [sair, setSair] = useState('')

   const {
      formState: { errors }
   } = useForm({
      resolver: yupResolver(validationPost)
   })

   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [tipo, setTipo] = useState('')

   async function confirmSair() {
      if (window.confirm('Deseja realmente sair do sistema?')) {
         const response = await api.get('/api/usuarios/destroytoken', {
            headers: { token: getToken() }
         })
         if (response.status === 200) {
            logout()
            window.location.href = '/'
         } else {
            alert('Não foi possível fazer o logout!')
         }
      }
   }

   async function handleSubmit() {
      const data = {
         nome_usuario: nome,
         email_usuario: email,
         senha_usuario: senha,
         tipo_usuario: tipo
      }

      if (nome !== '' && email !== '' && senha !== '' && tipo !== '') {
         const response = await api.post('/api/usuarios', data)

         if (response.status === 200) {
            window.location.href = '/'
         } else {
            alert('Erro ao cadastrar o usuário!')
         }
      } else {
         alert('Por favor, preencha todos os dados!')
      }
   }

   return (
      <div>
         <Header />
         <div className="bloco_cadastro">
            {/* <button
                  className="Sair"
                  onClick={confirmSair}
                  value={sair}
                  onChange={(e) => setSair(e.target.value)}
               >
                  Sair
               </button> */}

            <div className="bloco_img">
               <img src="/imagens/logo2.png" alt="logo" />
            </div>

            <div className="bloco_form">
               <div className="tituloCadastro">Cadastro</div>

               <div className="formCadastro">
                  <form>
                     <div className="inputBox_cadastro">
                        <select
                           className="tipo_usuario"
                           value={tipo}
                           onChange={(e) => setTipo(e.target.value)}
                        >
                           <option value="">Selecione seu Perfil....</option>
                           <option value="1">Usuario</option>
                           <option value="2">Parceiro</option>
                           <option value="3">Administrador</option>
                        </select>
                     </div>

                     <div className="inputBox_cadastro">
                        <label htmlFor="nome" className="labelInput">
                           Nome completo
                        </label>
                        <input
                           type="text"
                           name="nome"
                           id="nome"
                           className="inputUser_cadastro"
                           value={nome}
                           onChange={(e) => setNome(e.target.value)}
                        ></input>
                        <p className="error-message">{errors.nome?.message}</p>
                     </div>

                     <div className="inputBox_cadastro">
                        <label htmlFor="nome" className="labelInput">
                           Email
                        </label>
                        <input
                           type="text"
                           name="email"
                           id="email"
                           className="inputUser_cadastro"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <p className="error-message">{errors.email?.message}</p>
                     </div>

                     <div className="inputBox_cadastro">
                        <label htmlFor="nome" className="labelInput">
                           Senha
                        </label>
                        <input
                           type="password"
                           name="senha"
                           id="senha"
                           className="inputUser_cadastro"
                           value={senha}
                           onChange={(e) => setSenha(e.target.value)}
                        ></input>
                        <p className="error-message">{errors.senha?.message}</p>
                     </div>

                     <div className="enviar_cadastro">
                        <input
                           type="submit"
                           name="enviarcadastro"
                           id="enviarcadastro"
                           onClick={handleSubmit}
                        ></input>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Cadastro
