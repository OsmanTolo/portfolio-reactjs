import { NavLink, Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <Link className="logo" to="/">
            Osman
          </Link>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        {/* Renders the main page contents */}
        <Outlet />
      </main>
    </div>
  );
}
