import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/";
import { MyProjects } from "../pages/MyProjects/";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    </BrowserRouter>
  );
}