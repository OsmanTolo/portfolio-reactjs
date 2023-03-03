import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

const App = () => {
  return (
    <Router>
      <div>
        <NavTabs />
        <Routes></Routes>
      </div>
    </Router>
  );
};

export default App;
