/** ROOT APP COMPONENT */
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Layouts
import RootLayout from "./layouts/RootLayout";

// Router function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return (
    // Router provider providing the router created from the CreateBrowserRouter function
    <RouterProvider router={router} />
  );
}

{
  /* <div className="project-card">
<div className="project-card__img">
  <img
    src={require(project.screenshotPath)}
    alt="Custom README generator project screenshot"
  />
</div>
<div className="project-card__content">
  <h2>
    <a href="" className="project-card__link">
      {project.title}
    </a>
  </h2>
  <p>{project.description}</p>
</div>
</div> */
}
