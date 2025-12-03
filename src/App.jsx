import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Header from './componentes/Header';
import Principal from './componentes/Principal';
import Sobre from './componentes/Sobre';
import Comofunciona from './componentes/Comofunciona';
import Planos from './componentes/Planos';
import Footer from './componentes/Footer';

import Login from './componentes/Login';
import Cadastro from './componentes/Cadastro';

import Criarlista from './componentes/Criarlista';

function App() {

  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Principal />
              <Sobre />
              <Comofunciona />
              <Planos />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/criar-lista" element={<Criarlista />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
