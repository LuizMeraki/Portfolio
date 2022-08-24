import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default function ProjectsPage (){
  return (
    <div className='projects-page-content'>
      <h1>Em breve :&#8334;</h1>
      <Link className='link-back-home' to='/'>&#8592; Voltar para home</Link>
    </div>
  );
}
