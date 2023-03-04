/** ROOT APP COMPONENT */
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link className="logo" to="/">
            Osman Dumbuya
          </Link>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
