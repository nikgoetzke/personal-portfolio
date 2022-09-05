import React from "react";
import { ReactDOM } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar.js";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
