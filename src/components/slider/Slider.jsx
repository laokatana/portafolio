
import React,{ useRef , useEffect} from 'react'
import styled from 'styled-components'
import img1 from "../../images/1.jpg"
import img2 from "../../images/2.jpg"
import img3 from "../../images/3.jpg"
import img4 from "../../images/4.jpg"

const Slider = () => {
  
  const slideshow = useRef(null);
  
  const next = () => {
  
    //comprobamos que el slideshow tenga elementos
    if(slideshow.current.children.length > 0){
      
      
      //obtenemos el primer elemento del slideshow.
      const firstElement = slideshow.current.children[0];
      
      //establecemos la transicion de slideshow.
      slideshow.current.style.transition = `1000ms ease-out all`;

      const tamanioSlide = slideshow.current.children[0].offsetWidth;
      
      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamanioSlide}px)`;

      const transicion = () => {
        // reiniciamos la posicion de slideshow.
        
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;

        // tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(firstElement);

        slideshow.current.removeEventListener('transitionend', transicion);

      }

      // Evenlistener para cuando termina la animacion
      slideshow.current.addEventListener('transitionend', transicion);

     
    }
  }
  
  const previous = () => {
    
    
    if( slideshow.current.children.length > 0 ){

      //obtenemos el ultimo elemento del slideshow.

      const index = slideshow.current.children.length - 1;
      const ultimateElement = slideshow.current.children[index];

      slideshow.current.insertBefore(ultimateElement, slideshow.current.firstChild);
      slideshow.current.style.transition = 'none'
      
      const tamanioSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamanioSlide}px)`
    
      setTimeout(()=>{
        slideshow.current.style.transition = '1000ms ease-out all';
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    
    
    }


  }

 useEffect(()=>{
    let intervalo =  setInterval(()=>{
      next();
    }, 5000);


    //eliminamos los intervalos
    slideshow.current.addEventListener( 'mouseenter',  ()=>{
        clearInterval( intervalo );
    });


    //volver a poner el intervalo cuando saquen el cursor del slideshow
   slideshow.current.addEventListener( 'mouseleave',  ()=>{
      intervalo  =  setInterval(()=>{
        next();
      }, 5000);
  }); 




 },[ ]);
  
  return (
  
    <ContenedorPrincipal>
        
        <ContenedorSlidehshow ref={slideshow}>

          <Slide>
            <a href="https://www.linkedin.com/in/lautaro-larragueta/">
              <img src={img1} alt="" />
            </a>

            <TextoSlide>
              <p>Hola este es mi slider</p>
            </TextoSlide>
          </Slide>

          <Slide>
            <a href="https://www.linkedin.com/in/lautaro-larragueta/">
              <img src={img2} alt="" />
            </a>

            <TextoSlide>
              <p>Hola este es mi slider</p>
            </TextoSlide>
          </Slide>

          <Slide>
            <a href="https://www.linkedin.com/in/lautaro-larragueta/">
              <img src={img3} alt="" />
            </a>

            <TextoSlide>
              <p>Hola este es mi slider</p>
            </TextoSlide>
          </Slide>

          <Slide>
            <a href="https://www.linkedin.com/in/lautaro-larragueta/">
              <img src={img4} alt="" />
            </a>

            <TextoSlide>
              <p>Hola este es mi slider</p>
            </TextoSlide>
          </Slide>


        </ContenedorSlidehshow>
        

        <Controles>
          <Boton onClick={previous}> <p> ← </p>  </Boton>
          <Boton derecho onClick={next}> <p> → </p>   </Boton>
        </Controles>


    </ContenedorPrincipal>



    
  )
}


const ContenedorPrincipal = styled.div`
  position: relative;
   


`;


const ContenedorSlidehshow = styled.div`
  display:flex;
  flex-wrap:nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 9;
  max-height: 500px;
  position: relative;

  img {
    width: 100%;
    vertical-align:top;


  }

`

const TextoSlide = styled.div`
  background: rgba(0,0,0,.5);
  color: #fff;
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 700px){
    position:relative;
  }

`

const Controles = styled.div`
  position: absolute;
  top:0;
  z-index: 20;
  width:100%;
  height:100%;
  pointer-events: none;


`

const Boton = styled.button`
  pointer-events: all;
  background: none;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: .3s ease all;
  &:hover{
    background: rgba(0,0,0,.2);
    p{
      color: #DAA89D;
    }
  }

  ${props => props.derecho ? 'right: 0' : 'left: 0' };


  p{
    font-size: 35px;
    filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'} ;
  }
`

export default Slider
