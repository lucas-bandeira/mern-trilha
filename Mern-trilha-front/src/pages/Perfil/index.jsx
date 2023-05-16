import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'

import './styles.css'

import { useParams } from 'react-router-dom'

import { getIdUsuario } from '../../services/auth'
import api from '../../services/api'
import { getToken, logout } from '../../services/auth'

function Perfil() {
   const [sair, setSair] = useState('')

   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
   const [tipo, setTipo] = useState('')

   const user = getIdUsuario()

   useEffect(() => {
      async function getUsuario() {
         var response = await api.get(
            `/api/usuarios.details/${user?.idUsuario}`
         )

         setNome(response.data.nome_usuario)
         setEmail(response.data.email_usuario)
         setSenha(response.data.senha_usuario)
         setTipo(response.data.tipo_usuario)
      }

      getUsuario()
   }, [])

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
         tipo_usuario: tipo,
         _id: user?.idUsuario
      }

      if (nome !== '' && email !== '' && senha !== '' && tipo !== '') {
         const response = await api.put('/api/usuarios/', data)

         if (response.status === 200) {
            window.location.href = '/'
         } else {
            alert('Erro ao atualizar o usuário!')
         }
      } else {
         alert('Por favor, preencha todos os dados!')
      }
   }

   return (
      <>
         <Header />
         <div className="bloco_perfil">
            {/* <button className="Sair" onClick={confirmSair} value={sair} onChange={e => setSair(e.target.value)}>Sair</button> */}

            <div className="bloco_img">
               <img src="/imagens/logo2.png" alt="logo" />
            </div>

            <div className="bloco_form">
               <div className="tituloPerfil">Perfil</div>

               <div className="formperfil">
                  <form>
                     <div className="inputBox_perfil">
                        <select
                           className="tipo_usuario_perfil"
                           value={tipo}
                           onChange={(e) => setTipo(e.target.value)}
                        >
                           <option value="">Selecione seu Perfil....</option>
                           <option value="1">Usuario</option>
                           <option value="2">Parceiro</option>
                           <option value="3">Administrador</option>
                        </select>
                     </div>

                     <div className="inputBox_perfil">
                        <label htmlFor="nome" className="labelInput">
                           Nome completo
                        </label>
                        <input
                           type="text"
                           name="nome"
                           id="nome"
                           className="inputUser_perfil"
                           value={nome}
                           onChange={(e) => setNome(e.target.value)}
                        ></input>
                     </div>

                     <div className="inputBox_perfil">
                        <label htmlFor="nome" className="labelInput">
                           Email
                        </label>
                        <input
                           type="text"
                           name="email"
                           id="email"
                           className="inputUser_perfil"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        ></input>
                     </div>

                     <div className="inputBox_perfil">
                        <label htmlFor="nome" className="labelInput">
                           Senha
                        </label>
                        <input
                           type="password"
                           name="senha"
                           id="senha"
                           className="inputUser_perfil"
                           value={senha}
                           onChange={(e) => setSenha(e.target.value)}
                        ></input>
                     </div>

                     <div className="enviar_perfil">
                        <input
                           type="submit"
                           name="Salvar"
                           id="Salvar"
                           onClick={handleSubmit}
                        ></input>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default Perfil
