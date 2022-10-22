import React from 'react'
import styled from 'styled-components'
import TypeIt from "typeit-react";

const Proyects = () => {
  return (
        
          <Tecnologies>
              
      <TypeIt
        option={{
          speed: 8,
        }}
      
      >
        
                Aqui encontraras los proyectos que fui construyendo con el paso del 
                tiempo los mismos fueron realizados por los cursos que fui tomando 
                en el transcurso de este aprendizaje constante, cursos como por ejemplo 
                de programacion web fulll stack con el stack MERN de la mano de global learning bajo 
                el programa integrarTec que lo imparte la Fundacion Integrar que
                Desde hace 15 años becan a jóvenes de barrios carenciados que reúnen las condiciones intelectuales, el deseo y la tenacidad necesaria para realizar estudios de nivel superior a fin de mejorar sus condiciones de empleabilidad. 
              
            <br/>
            <br/>
              
                Proyectos del Programa ONE,
                ONE es un programa de educación y empleabilidad 
                diseñado para quienes no tuvieron acceso a una educación de calidad y quieren transformar su realidad social.
            <br />
            <br/>
                Proyectos de las  las Becas PoloIT- Integrar. 
                curso intensivo en JavaScript. La Universidad Tecnológica de Buenos Aires es la encargada de la capacitación académica,
            <br />
            <br />
                  Proyectos de forma autodidacta que voy creando 
                  a manera de practica para profundizar y reforzar los conocimientos adquiridos en los cursos tomados.
            <br />
                    Tecnologías y Herramientas usadas
                    En los Proyectos son:
          <br />
                    HTML, CSS, React, JavaScript, NodeJs, Express, 
                    MongoDB
          <br />
        <br />
        </TypeIt>
        
        </Tecnologies>
        
  )
}


const Tecnologies = styled.p`
  color: white;
  font-size:15px;
  text-align: center;
  padding: 25px;
  margin: 25px;
  font-weight: 1px;

`
export default Proyects