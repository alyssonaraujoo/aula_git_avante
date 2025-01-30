import React from 'react'
import './assets/css/style.css'
import Header from './components/Header.jsx'
import Inicio from './components/Inicio.jsx'
import Destinos from './components/Destinos.jsx'
import Pacotes from './components/Pacotes.jsx'
import Especialistas from './components/Especialistas.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Inicio />
        <Destinos />
        <Pacotes />
        <Especialistas />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default App