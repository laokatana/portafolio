import "./App.css";
import About from "./components/About-me";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home-page";
import Slider from "./components/Slider";
import Proyects from "./components/InfoProyects";
import Footer from "./components/Footer";
import TitleProyect from "./components/Title-proyect";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />

      {/* 
      <About />
      <section >
        <TitleProyect />
        <Slider />
        <Proyects />
      </section>
      <Footer />
      */}
    </div>
  );
}

export default App;
