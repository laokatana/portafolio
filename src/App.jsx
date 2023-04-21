import { useState, useEffect} from "react";
import "./App.css";
import About from "./components/About-me";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home-page";
import Slider from "./components/Slider";
import TitleProyect from "./components/Title-proyect";
import Proyects from "./components/InfoProyects";
import Footer from "./components/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <HomePage />
      <About  />
      <section> 
        <TitleProyect />
        <Slider />
        <Proyects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
