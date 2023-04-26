import "./App.css";
import About from "./components/About-me";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home-page";
import Slider from "./components/Slider";
import Proyects from "./components/InfoProyects";
import Footer from "./components/Footer";
import TitleProyect from "./components/Title-proyect";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? 
        <Loader />
       : 
        <>
          <Navbar />
          <HomePage />
          <About />
          <section >
            <TitleProyect />
            <Slider />
            <Proyects />
          </section>
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
