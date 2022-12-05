import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ProjectCard } from "../../components/ProjectCard";
import { SectionTitle } from "../../components/SectionTitle";
import { skillsList } from "../../constants/skillsList";

import fotoPerfil from "../../assets/foto-perfil.png";
import capaNetflix from "../../assets/capa-netflix.png";
import capaAlucar from "../../assets/capa-alucar.png";
import capaAgenciaDeViagens from "../../assets/capa-agencia-de-viagens.png";
import emailIcon from "../../assets/icons/email.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";
import instagramIcon from "../../assets/icons/instagram.png";
import styles from "./style.module.css";

import Aos from "aos";
import "aos/dist/aos.css";


export const Home = () => {

  Aos.init({
    delay: 400,
    once: true,
  });


  return (
    <>
      <Header />
      <main>
        <section className={styles.banner}>
          <div className={`${styles.bannerContent} container-padding`}>
            <div className={`${styles.flexContent} max-width`} data-aos="zoom-out">
              <figure>
                <img src={fotoPerfil} alt="Perfil Luiz"></img>
              </figure>
              <div className={styles.phraseContainer}>
                <p>"Hoje <span className="green-text">melhor</span> do que ontem, amanhã melhor do que hoje."</p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="container-padding">
          <div className="max-width">
            <SectionTitle title="Projetos" />
            <div className={styles.cardContainer} data-aos="fade-left">
              <ProjectCard
                cardTitle="Netflix"
                cardImage={capaNetflix}
                cardDescription="Projeto inspirado na netflix que entrega um layout bem próximo ao site original. Este projeto não possui funcionalidades de back-end e nem a links, este projeto foi desenvolvido com o intuito de pôr em prática os conhecimentos em HTML e CSS. Com exceção da seção FAQ, este site está semelhante ao oficial."
                cardWebsite="https://luizmeraki.github.io/Netflix/netflix/"
                cardGithub="https://github.com/LuizMeraki/Netflix"
              />
              <ProjectCard
                cardTitle="Agência de Viagens"
                cardImage={capaAgenciaDeViagens}
                cardDescription="Este bonito e intuitivo site de uma agência de viagens, traz o que você precisa para você se preparar para sua viagem. Aqui você informa seus dados, data de partida, de volta e ainda descobre mais sobre outros lugares que você pode conhecer na seção de ofertas e anúncios."
                cardWebsite="https://luizmeraki.github.io/agencia-de-viagens/agencia-de-viagens/"
                cardGithub="https://github.com/LuizMeraki/agencia-de-viagens"
              />
              <ProjectCard
                cardTitle="Aluguel de carros"
                cardImage={capaAlucar}
                cardDescription="Este é um site de aluguel de carros, aqui você poderá escolher e alugar o carro que estiver disponível, basta preencher o formulário com suas informações, escolher o modelo na lista de modelos e ainda irá descobrir mais sobre a empresa AluCar."
                cardWebsite="https://luizmeraki.github.io/alucar-aluguel-de-carros/aluguel-de-carros/"
                cardGithub="https://github.com/LuizMeraki/alucar-aluguel-de-carros"
              />
            </div>
          </div>
        </section>
        <section id="skills" className="container-padding">
          <div className="max-width">
            <SectionTitle title="Habilidades" />
            <div className={styles.skillsContainer}>
              <div className={styles.skillsCard} data-aos="flip-right">
                <h4>Minhas habilidades e tecnologias que atuo</h4>
                <ul>
                  {skillsList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="container-padding">
          <div className="max-width">
            <SectionTitle title="Sobre mim" />
            <div className={styles.aboutMeContainer} data-aos="fade-right">
              <p>Olá! Eu sou Luiz,  um profissional de desenvolvimento Front-end. Quando criança, eu consertava rádios celulares e só largava quando resolvia o problema. Eu cresci encantado com a tecnologia, e aos meus 16 anos eu estava a procura de um rumo para seguir, logo descobri a programação e fiquei fascinado, já que eu amo tecnologia e resolver problemas. Eu vivo sempre buscando mais e indo além do que é proposto à mim,  busco pessoas que gostam de crescer juntas, e assim, estou em minha caminhada para encontrar uma empresa que tenha princípios de ajudar o próximo e entregar sempre o melhor. Permaneço seguindo a filosofia Japonesa Kaizen:  “ <span className="green-text">Hoje melhor do que ontem, amanhã melhor do que hoje</span> ”, aplico isto em qualquer coisa da minha vida; desta forma sigo buscando a melhoria constante em prol de ser cada dia melhor no que faço, e assim está sendo com a programação.</p>
            </div>
          </div>
        </section>
        <section id="contact" className="container-padding">
          <div className="max-width">
            <SectionTitle title="Contato" />
            <div className={styles.contactContainer}>
              <div data-aos="fade-left">
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