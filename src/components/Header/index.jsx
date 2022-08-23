import React from 'react';
import './style.css';


export default function Header() {
  return (
    <header>
      <div className="menu max-width-menu">
        <p><span className="green-text">Luiz</span> Henrique</p>
        <nav>
          <a href="#projects"><span className="green-text">Projetos</span></a>
          <a href="#about">Sobre</a>
          <a href="#technologies">Tecnologias</a>
          <a href="#contact"><span className="green-text">Contato</span></a>
        </nav>
      </div>
    </header>
  );
}
