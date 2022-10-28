import React from 'react'
import "./cover.css"
import coverVideo from "../../media/video2.mp4"





const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video'  src={coverVideo} autoPlay loop muted> </video>     
      <h1> Lautaro </h1>
      <h4 className='animadito'>Lao</h4>
      <h1>Larragueta</h1>
      <p className='parrafo-animado'>Full stack Developer</p>
    </div>
  )
}

export default Cover