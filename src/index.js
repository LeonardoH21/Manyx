import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
<Route path='/' element={<Home />} />
<Route path='/contato' element={<Contato />} />
<Route path='/sobre' element={<Sobre />} />
<Route path='/login' element={<Login />} />
<Route path='/cadastrar' element={<Cadastrar />} />
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
)