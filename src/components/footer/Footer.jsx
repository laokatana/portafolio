import React from 'react'
import "./footer.css"


const Footer = () => {
  return (
        
      <footer className='footer'>
          <div className='footer-info'>
              <h1>your name</h1>
              <p>Based in your city</p>
          </div>

          <div className='footer-contact'>
              <h3>contact me</h3>
              <p>and lets get down to work </p>
          </div>

          <div className='footer-sns'>
                <div className='design-by'>
                  Design by Your name 
                 </div>

                <div className='sns-links'>
                  <a href="https://www.linkedin.com/in/lautaro-larragueta/" target="_blank">
                      <i className=' fab fa-linkedin linkedin '></i>
                  </a>
                   <a href="https://github.com/laokatana"  target="_blank">
                      <i className=' fab fa-github github '></i>
                  </a>
                
                  <a href="mailto:lautaro.s.larragueta@gmail.com? ">
                    <i className="fa fa-envelope mail"></i>
                  </a>
                </div>
          </div>
    
    </footer>
  )
}

export default Footer