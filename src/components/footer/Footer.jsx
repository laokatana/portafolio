import React from 'react'
import "./footer.css"
import coverVideo from "../../media/trueno.mp4"


const Footer = () => {
  return (
        
    <footer className='footer'>
              <video className='video-footer'  src={coverVideo} autoPlay loop muted> </video>    
          <div className='footer-info'>
            <h1>Larragueta</h1>
            <h1>Lautaro</h1>
            <h4>Lao</h4>
           <p>Full stack Developer</p>
             <a    href="./Full stack Lautaro.s.Larragueta.pdf"  download="Larragueta" >  <p className='start'> Descargue aqui mi cv</p> </a>
          </div>


     
             
 

          <div className='footer-sns'>
                

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