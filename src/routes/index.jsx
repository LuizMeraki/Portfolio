import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Home } from "../pages/Home/";
import { MyProjects } from "../pages/MyProjects/";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}