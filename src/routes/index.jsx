import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import HomePage from '../pages/HomePage/';

export default function AppRoutes (){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <HomePage /> } />
      </Routes>
    </BrowserRouter>
  );
}
