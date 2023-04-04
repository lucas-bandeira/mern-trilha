import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre'
import Blog from './pages/Blog/Noticia'
import AreaBrasilia from './pages/AreaBrasilia'
import AreaUniao from './pages/AreaUniao'
import Blognoticia from './pages/Blog/Noticia';

import PrivateRoute from './services/wAuth';
import Perfil from './pages/Perfil';

export default function Rotas (){
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/Login" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/Sobre" element={<Sobre/>}></Route>
                <Route path="/Blog" element={<Blog/>}></Route>
                <Route path="/AreaBrasilia" element={<AreaBrasilia/>}></Route>
                <Route path="/AreaUniao" element={<AreaUniao/>}></Route>
                <Route path='/Blog/noticia/:id' element={<Blognoticia/>}></Route>

                <Route path='/Perfil/' element={<Perfil/>}></Route>
                
            </Routes>         
            
        </BrowserRouter>
        
    ); 
}

//<PrivateRoute path="/Perfil" element={Perfil} />
