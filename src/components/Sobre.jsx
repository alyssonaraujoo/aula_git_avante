import React from 'react'
import '../assets/css/style.css'

function Sobre() {
  return (
    <section id="sobre">
      <h2>Sobre Nós</h2>
      <img id="equipe_imagem" src="/assets/images/equipe_brasil_tur.png" alt="Nossa Equipe" />
      <p>
        Somos uma equipe dedicada a proporcionar as melhores experiências de
        viagem para nossos clientes.
      </p>
      <a href="https://linkedin.com/" target="_blank">
        <img id="linkedin_equipe" src="/assets/images/linkedin.jpeg" alt="LinkedIn" />
      </a>
    </section>
  );
}

export default Sobre