import React from 'react';
import '../assets/css/style.css';

function Destinos() {
  return (
    <section id="destinos">
      <p>Destinos Populares</p>
      <article>
        <h2>Fortaleza</h2>
        <img src="/assets/images/fortaleza.jpeg" title="Fortaleza" alt="Imagem de Fortaleza" />
        <p>Conheça as belezas de Fortaleza.</p>
      </article>
      {/* ... outros artigos */}
    </section>
  );
}

export default Destinos;