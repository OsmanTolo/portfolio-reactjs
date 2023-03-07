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
