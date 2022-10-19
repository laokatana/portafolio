import React from 'react';
import "./navbar.css";

const Navbar = ({ isScrolling }) => {

  const toTheTop = () =>{
    window.scrollTo( {top : 0, left:0, behavior: "smooth"} )
  }

   const sobreMi = () =>{
    window.scrollTo( {top : 745, left:0, behavior: "smooth"} )
  }

     const proyecto = () =>{
    window.scrollTo( {top : 1525, left:0, behavior: "smooth"} )
  }


  return (

    <div className='container-navbar'>
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo' onClick={toTheTop} >Home</div>
        <div className='navbar-logo' onClick={sobreMi} >Sobre mi</div>
        <div className='navbar-logo' onClick={proyecto} >Proyectos</div>
        <div className='navbar-logo' onClick={toTheTop} >Contacto</div>
      </nav>
    </div>

  )
}

export default Navbar