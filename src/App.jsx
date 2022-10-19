import { useState,useEffect } from 'react'
import styled from 'styled-components'
import './App.css'
import AboutMe from './components/about/AboutMe'
import Cover from './components/cover/Cover'
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
  
`



export default App
