import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="poppins-light">
      <header>
        <Navbar/>
      </header>
      <section id="about">
        <Header />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projets/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
