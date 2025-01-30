import React from 'react'
import '../assets/css/style.css'

function Header() {
  return (
    <header>
      <nav>
        <a href="#inicio"><img className="logo" src="/assets/images/logo.jpg" alt="Logomarca da Brasil Tur" /></a>
        <p><a id="brasil_tur" href="#inicio">Brasil Tur</a></p>
        <ul className="menu">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#destinos">Destinos</a></li>
          <li><a href="#pacotes">Pacotes</a></li>
          <li><a href="#sobre">Sobre Nós</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
        <form className="barra_pesquisa">
          <input type="text" placeholder="Buscar destinos" required />
          <button type="submit">Buscar</button>
        </form>
      </nav>
    </header>
  );
}

export default Header