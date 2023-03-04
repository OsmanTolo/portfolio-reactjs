/** ROOT APP COMPONENT */
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

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
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
