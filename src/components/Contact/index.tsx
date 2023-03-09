import React from "react";

// import { Container } from './styles';

const Contact: React.FC = () => {
  return (
    <div>
      <div className="img"></div>
      <form>
        <h1>Contato</h1>
        <p>
          Quer entrar em contato comigo? Preencha o formulário ao lado e
          entrarei em contato o mais rápido possível.
        </p>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Assunto" />
        <textarea placeholder="Mensagem." />
      </form>
    </div>
  );
};

export default Contact;
