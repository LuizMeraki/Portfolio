import './style.css';


export const ProjectCard = ({ cardTitle, cardImage, cardDescription, cardWebsite, cardGithub }) => {
  return (
    <div className="card">
      <h4>{cardTitle}</h4>
      <div className="card-content">
        <figure>
          <img src={cardImage} alt="Capa Netflix"></img>
        </figure>
        <p>{cardDescription}</p>
      </div>
      <div className="card-links">
        <a href={cardWebsite} target="_blank">Site do projeto</a>
        <a href={cardGithub} target="_blank">Github</a>
      </div>
    </div>
  );
}
