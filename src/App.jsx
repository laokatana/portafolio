import { useState, useEffect, useRef } from "react";
import "./App.css";
import About from "./components/About-me";
import Navbar from "./components/Navbar";
import Developer from "./components/Developer";
import Slider from "./components/Slider";
import TitleProyect from "./components/Title-proyect";
import Proyects from "./components/InfoProyects";
import Footer from "./components/Footer";



function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);

  }

  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
  }, [scrollHeight])


  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Developer  />
      <About />
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
