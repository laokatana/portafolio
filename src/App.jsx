import "./App.css";
import About from "./components/About-me";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home-page";
import Slider from "./components/Slider";
import Proyects from "./components/InfoProyects";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import Navbar2 from "./components/Navbar/Navbar2";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar2 />
          <HomePage />

          {/* 
         
         <Navbar />
         <About />
         <Slider />
         <Proyects />
         <Footer />
          */}
        </>
      )}
    </div>
  );
}

export default App;
