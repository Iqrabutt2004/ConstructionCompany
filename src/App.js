import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import Project from "./pages/project/Project";
import Blog from "./pages/blog/Blog";
import Portfolio from "./pages/portfolio/Portfolio";
import Service from "./pages/service/service";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/about";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
