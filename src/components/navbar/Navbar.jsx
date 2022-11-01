import React from 'react';
import "./navbar.css";

const Navbar = ({ isScrolling }) => {

  const toTheTop = () =>{
    window.scrollTo( {top : 0, left:0, behavior: "smooth"} )
  }

   const sobreMi = () =>{
     
      if (screen.width < 960) {
       console.log("aca estoy pipu")
       window.scrollTo({ top: 765, left: 0, behavior: "smooth" })
     } else {
       window.scrollTo({ top: 865, left: 0, behavior: "smooth" })
       
      }  
     
     
  }

  const proyecto = () => {
    if (screen.width < 960) {
       window.scrollTo({ top: 1400, left: 0, behavior: "smooth" })
     } else {
        window.scrollTo( {top : 1750, left:0, behavior: "smooth"} )
      }  
  }
    
  const contacto = () => {
    window.scrollTo( {top :4000, left:0, behavior: "smooth"} )
  }


  return (

    <div className='container-navbar'>
      <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
        <div className='navbar-logo' onClick={toTheTop} >Home</div>
        <div className='navbar-logo' onClick={sobreMi} > Sobre mi </div>
        <div className='navbar-logo' onClick={proyecto} >Proyectos</div>
        <div className='navbar-logo' onClick={contacto} >Contacto</div>
      </nav>
    </div>

  )
}

export default Navbar