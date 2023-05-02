import "./App.css";
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="blog" element={<Blog />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="service" element={<Service />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
