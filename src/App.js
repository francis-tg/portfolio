import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projets from "./components/Projets";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="poppins-light">
      <section id="">
      <header>
        <Navbar/>
      </header>
      </section>
      <section id="about">
        <Header />
      </section>
      <section id="skills">
        <Skills/>
      </section>
      <section id="projects">
        <Projets/>
      </section>
      <section id="footer">
        <footer>
        <Footer/>
      </footer>
      </section>
    </div>
  );
}

export default App;
