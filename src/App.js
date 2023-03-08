/** ROOT APP COMPONENT */
import { Route, RouterProvider, HashRouter, Routes } from "react-router-dom";

// Pages
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Router function

export default function App() {
  return (
    // Router provider providing the router created from the CreateBrowserRouter function
    <HashRouter>
      <Routes>
        <Route path="/portfolio-reactjs" element={<RootLayout />}>
          <Route path="/portfolio-reactjs" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
