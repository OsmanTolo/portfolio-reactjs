import { NavLink, Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <div className="header-content">
          <nav>
            <Link className="logo" to="/">
              Osman Dumbuya
            </Link>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main>
        {/* Renders the main page contents */}
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
