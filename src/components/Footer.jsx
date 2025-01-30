import React from 'react'
import '../assets/css/style.css'

function Footer() {
  return (
    <footer>
      <div className="rede_social">
        <a rel="noopener" href="https://www.facebook.com" target="_blank"><img src="/assets/images/facebook.jpeg" alt="Facebook" /></a>
        {}
      </div>
      <p>Contato: brasiltur@brasiltur.com | Telefone: (11) 1234-5678</p>
    </footer>
  );
}

export default Footer