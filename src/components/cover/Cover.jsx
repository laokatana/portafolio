import React from 'react'
import "./cover.css"
import coverVideo from "../../media/video2.mp4"

const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video'  src={coverVideo} autoPlay loop muted> </video>     
      <p> Hola si llegaste hasta aca muchas gracias este portfolio esta pasando por unas mejoras mis mas cordiales saludos, atentramente  <span className='animadito'> Lao Larragueta</span></p>
     
    </div>
  )
}

export default Cover