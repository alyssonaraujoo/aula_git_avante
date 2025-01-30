import React from 'react'
import '../assets/css/style.css'

function Especialistas() {
  return (
    <section className="nossos_especialistas">
      <h2>Conheça Nossos Especialistas</h2>
      <div className="especialistas">
        <article>
          <img src="/assets/images/especialista_1.png" alt="Especialista 1" />
          <h3>Fernando Saraiva</h3>
          <p>Especialista em Turismo</p>
          <a rel="noopener" href="https://www.linkedin.com/" target="_blank">
            <img src="/assets/images/linkedin.jpeg" alt="LinkedIn" />
          </a>
        </article>
        <article>
          <img src="/assets/images/especialista_2.png" alt="Especialista 2" />
          <h3>Maria Sampaio</h3>
          <p>Guia de Turismo</p>
          <a rel="noopener" href="https://www.linkedin.com/" target="_blank">
            <img src="/assets/images/linkedin.jpeg" alt="LinkedIn" />
          </a>
        </article>
      </div>
    </section>
  );
}

export default Especialistas