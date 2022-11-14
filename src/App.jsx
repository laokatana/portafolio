import { useState,useEffect } from 'react'
import styled from 'styled-components'
import './App.css'
import AboutMe from './components/about/AboutMe'
import Cover from './components/cover/Cover'
import Footer from './components/footer/Footer'
import Info from './components/info/Info'
import Navbar from './components/navbar/Navbar'
import Proyects from './components/proyects/Proyects'
import Slider from './components/slider/Slider'


function App() {
  const [scrollHeight, setScrollHeight] = useState(0)
  const handleScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position);

  }
  useEffect(() => {
    window.addEventListener("scroll",handleScroll);
  }, [scrollHeight])
  
  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover/>
      <AboutMe/>
      <section>
        <Title>Proyectos</Title>
        <Slider/>
        <Proyects/>
      </section>
      <Info/>
      <Footer/>

    </div>
  )
}

const Title = styled.p `
  font-size:45px;
  text-transform:uppercase;
  margin-bottom: px;
  margin-top: 75px;
  font-weight:400;
  text-align: center;
  padding-bottom: 50px;
   color: #a5992d;
  text-shadow: 2px 2px 8px #FF0000;
  
`



export default App
