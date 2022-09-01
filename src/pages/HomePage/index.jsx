import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// Components
import Header from '../../components/Header/';
import Footer from '../../components/Footer/';
import ProjectCard from '../../components/ProjectCard/';

// Images
import fotoPerfil from '../../assets/foto-perfil.png';
import capaNetflix from '../../assets/capa-netflix.png';
import capaAlucar from '../../assets/capa-alucar.png';
import capaAgenciaDeViagens from '../../assets/capa-agencia-de-viagens.png';
import fotoLuiz from '../../assets/foto-luiz.jpg';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png';
import javascriptIcon from '../../assets/icons/js.png';
import reactIcon from '../../assets/icons/react.png';
import emailIcon from '../../assets/icons/email.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import githubIcon from '../../assets/icons/github.png';
import instagramIcon from '../../assets/icons/instagram.png';
import btnArrow from '../../assets/icons/arrow.png';


export default function HomePage() {

  // contexto: botão "ver mais"
  const [seeMore, setSeeMore] = useState(false);
  const seeMoreBtn = "Ver mais"
  const seeLessBtn = "Ver menos"
  const arrowDownIcon = "arrow-down-img"
  const arrowUpIcon = "arrow-up-img"

  const handleSwitchSeeMoreLogic = () => {
    setSeeMore(!seeMore);
  }

  return (
    <>
      <Header />
      <main>
        <section className="banner">
          <div className="img-banner"></div>
          <div className="max-width">
            <div className="menu-content">
              <figure>
                <img src={fotoPerfil} alt="Perfil Luiz"></img>
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
              <ProjectCard
                card_title={"Netflix"}
                card_image={capaNetflix}
                card_description={"Projeto inspirado na netflix que entrega um layout bem próximo ao site original. Este projeto não possui funcionalidades de back-end e nem a links, este projeto foi desenvolvido com o intuito de pôr em prática os conhecimentos em HTML e CSS. Com exceção da seção FAQ, este site está semelhante ao oficial."}
                card_website={"https://luizmeraki.github.io/Netflix/netflix/"}
                card_github={"https://github.com/LuizMeraki/Netflix"} />

              <ProjectCard
                card_title={"Agência de Viagens"}
                card_image={capaAgenciaDeViagens}
                card_description={"Este bonito e intuitivo site de uma agência de viagens, traz o que você precisa para você se preparar para sua viagem. Aqui você informa seus dados, data de partida, de volta e ainda descobre mais sobre outros lugares que você pode conhecer na seção de ofertas e anúncios."}
                card_website={"https://luizmeraki.github.io/agencia-de-viagens/agencia-de-viagens/"}
                card_github={"https://github.com/LuizMeraki/agencia-de-viagens"} />

              <ProjectCard
                card_title={"Aluguel de carros"}
                card_image={capaAlucar}
                card_description={'Este é um site de aluguel de carros, aqui você poderá escolher e alugar o carro que estiver disponível, basta preencher o formulário com suas informações, escolher o modelo na lista de modelos e ainda irá descobrir mais sobre a "empresa" AluCar.'}
                card_website={"https://luizmeraki.github.io/alucar-aluguel-de-carros/aluguel-de-carros/"}
                card_github={"https://github.com/LuizMeraki/alucar-aluguel-de-carros"} />
            </div>
            <div className="projects-link">
              <Link className="component-link" to='/projects'>Ver mais projetos</Link>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="about max-width">
            <div className="container-about">
              <figure>
                <img src={fotoLuiz} alt="Foto de Luiz"></img>
              </figure>
              <div className="box-about-description">
                <h3>Sobre</h3>
                <p><span className="green-text">Luiz</span> Henrique</p>
                <p>Olá! Eu sou Luiz,  um profissional de desenvolvimento Front-end. Quando criança, eu consertava rádios celulares e só largava quando resolvia o problema. Eu cresci encantado com a tecnologia, e aos meus 16 anos eu estava a procura de um rumo para seguir, logo descobri a programação e fiquei fascinado, já que eu amo tecnologia e resolver problemas. Eu vivo sempre buscando mais e indo além do que é proposto à mim,  busco pessoas que gostam de crescer juntas, e assim, estou em minha caminhada para encontrar uma empresa que tenha princípios de ajudar o próximo e entregar sempre o melhor. Permaneço seguindo a filosofia Japonesa Kaizen:  “ <span className="green-text">Hoje melhor do que ontem, amanhã melhor do que hoje</span> ”, aplico isto em qualquer coisa da minha vida; desta forma sigo buscando a melhoria constante em prol de ser cada dia melhor no que faço, e assim está sendo com a programação.</p>
              </div>
            </div>
            {seeMore &&
              <>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error adipisci facilis eaque quo assumenda exercitationem nesciunt excepturi aliquid corrupti! Omnis provident aliquid eum doloribus doloremque, exercitationem minus facilis error!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, corporis? Debitis, quaerat illum. Laborum id doloribus eligendi minima doloremque eveniet ex vel quaerat, earum harum temporibus nobis repellendus aliquid excepturi!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo nam quo repellendus quas aperiam dolorem voluptates placeat nihil. Eligendi repellendus dolore molestiae quo quibusdam facilis dolores iste vitae laborum?</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error adipisci facilis eaque quo assumenda exercitationem nesciunt excepturi aliquid corrupti! Omnis provident aliquid eum doloribus doloremque, exercitationem minus facilis error!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, corporis? Debitis, quaerat illum. Laborum id doloribus eligendi minima doloremque eveniet ex vel quaerat, earum harum temporibus nobis repellendus aliquid excepturi!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo nam quo repellendus quas aperiam dolorem voluptates placeat nihil. Eligendi repellendus dolore molestiae quo quibusdam facilis dolores iste vitae laborum?</p>
                </div>
              </>
            }
            <div className="btn-box-see-more">
              <button onClick={ handleSwitchSeeMoreLogic }>{seeMore ? seeLessBtn : seeMoreBtn}</button>
              <img className={ seeMore ? arrowUpIcon : arrowDownIcon } src={ btnArrow } alt="Seta" />
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
                    <img src={htmlIcon} alt="HTML Icon"></img>
                    <figcaption>HTML</figcaption>
                  </figure>
                  <figure>
                    <img src={cssIcon} alt="CSS Icon"></img>
                    <figcaption>CSS</figcaption>
                  </figure>
                  <figure>
                    <img src={javascriptIcon} alt="JavaScript Icon"></img>
                    <figcaption>JavaScript</figcaption>
                  </figure>
                </div>
              </div>
              <div className="technologies-card">
                <h4>Tecnologias que irei aprender:</h4>
                <div className="technologies-box">
                  <figure>
                    <img src={reactIcon} alt="React Icon"></img>
                    <figcaption>React</figcaption>
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
                  <img src={emailIcon} alt="Email Icon"></img>
                  <figcaption><a href="mailto:luizollvrsantos@gmail.com" target="_blank">E-mail</a></figcaption>
                </figure>
                <figure>
                  <img src={whatsappIcon} alt="Whatsapp Icon"></img>
                  <figcaption><a href="https://api.whatsapp.com/send?phone=5571996036876&text=Ol%C3%A1!%20Tudo%20bem%20com%20voc%C3%AA%3F%20Siga%20o%20link%20abaixo%20e%20vamos%20tratar%20do%20assunto%20que%20deseja." target="_blank">Whatsapp</a></figcaption>
                </figure>
                <figure>
                  <img src={linkedinIcon} alt="LinkedIn Icon"></img>
                  <figcaption><a href="https://www.linkedin.com/in/luiz-henrique-dev-frontend/" target="_blank">LinkedIn</a></figcaption>
                </figure>
                <figure>
                  <img src={githubIcon} alt="GitHub Icon"></img>
                  <figcaption><a href="https://github.com/LuizMeraki" target="_blank">GitHub</a></figcaption>
                </figure>
                <figure>
                  <img src={instagramIcon} alt="Instagram Icon"></img>
                  <figcaption><a href="https://www.instagram.com/luizmeraki/" target="_blank">Instagram</a></figcaption>
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
