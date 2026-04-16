import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DevelopmentDetails from "./components/DevelopmentDetails";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="site-shell" id="home">
      <div className="ambient-shape ambient-shape-one" aria-hidden="true" />
      <div className="ambient-shape ambient-shape-two" aria-hidden="true" />
      <div className="ambient-shape ambient-shape-three" aria-hidden="true" />
      <Navbar />
      <main className="site-main">
        <Hero />
        <DevelopmentDetails />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>Designed and developed by Umer Farooq.</p>
      </footer>
    </div>
  );
}

export default App;
