import { ProjectCard } from "../../components/ProjectCard";
import { SectionTitle } from "../../components/SectionTitle";
import { ContactWrapper } from "../../components/ContactWrapper";
import { DownloadButton } from "../../components/DownloadButton";

import { skillsList } from "../../constants/skillsList";
import { projectsList } from "../../constants/projectsList";
import { contactList } from "../../constants/contactsList";

import profile from "../../assets/profile.png";
import styles from "./style.module.css";

import Aos from "aos";
import "aos/dist/aos.css";


export const Home = () => {

  Aos.init({
    delay: 400,
    once: true,
  });


  return (
    <main>
      <DownloadButton />
      <section className={styles.banner}>
        <div className={`${styles.bannerContent} container-padding`}>
          <div className={`${styles.flexContent} max-width`} data-aos="zoom-out">
            <figure>
              <img src={profile} alt="Perfil Luiz"></img>
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
            {projectsList.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                image={project.imageURL}
                description={project.description}
                deploy={project.deploy}
                gitHub={project.gitHub}
              />
            ))}
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
              {contactList.map((contact, index) => (
                <ContactWrapper
                  key={index}
                  logo={contact.logo}
                  contactName={contact.contactName}
                  goTo={contact.goTo}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}