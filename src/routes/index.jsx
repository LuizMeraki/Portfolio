import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import HomePage from '../pages/HomePage/';
import ProjectsPage from '../pages/ProjectsPage/';


export default function AppRoutes (){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <HomePage /> } />
        <Route path='/projects' element={ <ProjectsPage /> } />
      </Routes>
    </BrowserRouter>
  );
}
