import React from 'react';
import './style.css';


export default function ProjectCard(props) {
  return (
    <div className="card">
      <h4>{ props.card_title }</h4>
      <div className="card-content">
        <figure>
          <img src={ props.card_image } alt="Capa Netflix"></img>
        </figure>
        <p>{ props.card_description }</p>
      </div>
      <div className="card-links">
        <a href={ props.card_website } target="_blank">Site do projeto</a>
        <a href={ props.card_github } target="_blank">Github</a>
      </div>
    </div>
  );
}
