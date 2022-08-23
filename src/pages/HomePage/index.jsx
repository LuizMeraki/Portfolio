import React from 'react';
import './style.css';

// Components
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="banner">
          <div className="img-banner"></div>
          <div className="max-width">
            <div className="menu-content">
              <figure>
                <img src="assets/img/perfil-foto.png" alt="Perfil Luiz"></img>
              </figure>
              <div className="phrase">
                <p>"Hoje <span className="green-text">melhor</span> do que ontem, amanhã melhor do que hoje."</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="projects max-width">
            <h2>Projetos</h2>
            <div className="card-container">
              <div className="card">
                <h4>Netflix</h4>
                <div className="card-content">
                  <figure>
                    <img src="assets/img/capa-netflix.png" alt="Capa Netflix"></img>
                  </figure>
                  <p>Projeto inspirado na netflix que entrega um layout bem próximo ao site original. Este projeto não possui funcionalidades de back-end e nem a links, este projeto foi desenvolvido com o intuito de pôr em prática os conhecimentos em HTML e CSS. Com exceção da seção FAQ, este site está semelhante ao oficial.</p>
                </div>
                <div className="card-links">
                  <a href="https://luizmeraki.github.io/Netflix/netflix/" target="_blank">Site do projeto</a>
                  <a href="https://github.com/LuizMeraki/Netflix" target="_blank">Github</a>
                </div>
              </div>
              <div className="card">
                <h4>Aluguel de Carros</h4>
                <div className="card-content">
                  <figure>
                    <img src="assets/img/capa-alucar.png" alt="Capa AluCar"></img>
                  </figure>
                  <p>Este é um site de aluguel de carros, aqui você poderá escolher e alugar o carro que estiver disponível, basta preencher o formulário com suas informações, escolher o modelo na lista de modelos e ainda irá descobrir mais sobre a "empresa" AluCar.</p>
                </div>
                <div className="card-links">
                  <a href="https://luizmeraki.github.io/alucar-aluguel-de-carros/aluguel-de-carros/" target="_blank">Site do projeto</a>
                  <a href="https://github.com/LuizMeraki/alucar-aluguel-de-carros" target="_blank">Github</a>
                </div>
              </div>
              <div className="card">
                <h4>Agência de Viagens</h4>
                <div className="card-content">
                  <figure>
                    <img src="assets/img/capa-agencia-de-viagens.png" alt="Capa Agência de Viagens"></img>
                  </figure>
                  <p>Este bonito e intuitivo site de uma agência de viagens, traz o que você precisa para você se preparar para sua viagem. Aqui você informa seus dados, data de partida, de volta e ainda descobre mais sobre outros lugares que você pode conhecer na seção de ofertas e anúncios.</p>
                </div>
                <div className="card-links">
                  <a href="https://luizmeraki.github.io/agencia-de-viagens/agencia-de-viagens/" target="_blank">Site do projeto</a>
                  <a href="https://github.com/LuizMeraki/agencia-de-viagens" target="_blank">Github</a>
                </div>
              </div>
            </div>
            <div className="projects-link">
              <a href="#">Ver mais projetos</a>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="about max-width">
            <figure>
              <img src="assets/img/foto-luiz.jpg" alt="Foto de Luiz"></img>
            </figure>
            <div className="text-section-about">
              <h3>Sobre</h3>
              <p><span className="green-text">Luiz</span> Henrique</p>
              <p>Olá! Eu sou Luiz,  um profissional de desenvolvimento Front-end. Quando criança, eu consertava rádios celulares e só largava quando resolvia o problema. Eu cresci encantado com a tecnologia, e aos meus 16 anos eu estava a procura de um rumo para seguir, logo descobri a programação e fiquei fascinado, já que eu amo tecnologia e resolver problemas. Eu vivo sempre buscando mais e indo além do que é proposto à mim,  busco pessoas que gostam de crescer juntas, e assim, estou em minha caminhada para encontrar uma empresa que tenha princípios de ajudar o próximo e entregar sempre o melhor. Permaneço seguindo a filosofia Japonesa Kaizen:  “ <span className="green-text">Hoje melhor do que ontem, amanhã melhor do que hoje</span> ”, aplico isto em qualquer coisa da minha vida; desta forma sigo buscando a melhoria constante em prol de ser cada dia melhor no que faço, e assim está sendo com a programação.</p>
            </div>
          </div>
        </section>
        <section id="technologies">
          <div className="max-width">
            <h2>Tecnologias</h2>
            <div className="container-technologies">
              <div className="technologies-card">
                <h4>Tecnologias que domino:</h4>
                <div className="technologies-box">
                  <figure>
                    <img src="assets/icon/HTML.png" alt="HTML Icon"></img>
                      <figcaption>HTML</figcaption>
                  </figure>
                  <figure>
                    <img src="assets/icon/CSS.png" alt="CSS Icon"></img>
                      <figcaption>CSS</figcaption>
                  </figure>
                  <figure>
                    <img src="assets/icon/JS.png" alt="JavaScripty Icon"></img>
                      <figcaption>JavaScript</figcaption>
                  </figure>
                </div>
              </div>
              <div className="technologies-card">
                <h4>Tecnologias que irei aprender:</h4>
                <div className="technologies-box">
                  <figure>
                    <img src="assets/icon/REACT.png" alt="React Icon"></img>
                      <figcaption>React</figcaption>
                  </figure>
                  <figure>
                    <img src="assets/icon/ANGULAR.png" alt="Angular Icon"></img>
                      <figcaption>Angular</figcaption>
                  </figure>
                  <figure>
                    <img src="assets/icon/VUE.png" alt="Vue.js Icon"></img>
                      <figcaption>Vue.js</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="max-width">
            <h2>Contato</h2>
            <div className="container-contact">
              <div className="box-contacts">
                <figure>
                  <img src="assets/icon/email.png" alt="Email Icon"></img>
                    <figcaption><a href="mailto:luizollvrsantos@gmail.com">E-mail</a></figcaption>
                </figure>
                <figure>
                  <img src="assets/icon/whatsapp.png" alt="Whatsapp Icon"></img>
                    <figcaption><a href="https://api.whatsapp.com/send?phone=5571996036876&text=Ol%C3%A1!%20Tudo%20bem%20com%20voc%C3%AA%3F%20Siga%20o%20link%20abaixo%20e%20vamos%20tratar%20do%20assunto%20que%20deseja.">Whatsapp</a></figcaption>
                </figure>
                <figure>
                  <img src="assets/icon/linkedin.png" alt="LinkedIn Icon"></img>
                    <figcaption><a href="https://www.linkedin.com/in/luiz-henrique-a77732240/">LinkedIn</a></figcaption>
                </figure>
                <figure>
                  <img src="assets/icon/github.png" alt="GitHub Icon"></img>
                    <figcaption><a href="https://github.com/LuizMeraki">GitHub</a></figcaption>
                </figure>
                <figure>
                  <img src="assets/icon/instagram.png" alt="Instagram Icon"></img>
                    <figcaption><a href="https://www.instagram.com/luizmeraki/">Instagram</a></figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
