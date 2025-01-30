import React from 'react'
import '../assets/css/style.css'

function Contato() {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <form id="form-contato">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />

        <label htmlFor="assunto">Assunto:</label>
        <select id="assunto" name="assunto" required>
          <option value="dúvida">Dúvida</option>
          <option value="sugestao">Sugestão</option>
          <option value="outro">Outro</option>
        </select>

        <label htmlFor="telefone">Telefone/WhatsApp:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          placeholder="Digite seu telefone ou WhatsApp"
          required
        />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="5"
          placeholder="Escreva sua mensagem, sugestão ou comentário aqui"
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
      <p id="mensagem-status" style={{ display: 'none', color: 'green' }}>
        Mensagem enviada com sucesso!
      </p>
    </section>
  );
}

export default Contato