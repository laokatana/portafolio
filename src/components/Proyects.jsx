import Slider from "./components/Slider";
import styled from "styled-components";

const Title = styled.p`
  background-color: black;
  font-size: 45px;
  text-transform: uppercase;
  padding-top: 40px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 50px;
  color: #a5992d;
  text-shadow: 2px 2px 8px #ff0000;
`;

const Proyectos = () => {
  return (
    <div>
      
      <p>
        Aqui encontraras los proyectos que fui construyendo con el paso del
        tiempo los mismos fueron realizados por los cursos que fui tomando en el
        transcurso del tiempo, cursos como por ejemplo de programacion web full
        stack con el stack MERN de la mano de global learning bajo el programa
        integrarTec que lo imparte la Fundacion Integrar que Desde hace 15 años
        becan a jóvenes de barrios carenciados que reúnen las condiciones
        intelectuales, el deseo y la tenacidad necesaria para realizar estudios
        de nivel superior a fin de mejorar sus condiciones de empleabilidad
      </p>
      <p>
        Proyectos del Programa ONE, ONE es un programa de educación y
        empleabilidad diseñado para quienes no tuvieron acceso a una educación
        de calidad y quieren transformar su realidad social.
      </p>
      <p>
        Proyectos de las las Becas PoloIT- Integrar. curso intensivo en
        JavaScript. La Universidad Tecnológica de Buenos Aires es la encargada
        de la capacitación académica,
      </p>
      <p>
        Proyectos de forma autodidacta que voy creando a manera de practica para
        profundizar y reforzar los conocimientos adquiridos en los cursos
        tomados.
      </p>
      <p>
        Tecnologías y Herramientas usadas En los Proyectos son:HTML, CSS, React,
        JavaScript, NodeJs, Express, MongoDB
      </p>
    </div>
  );
};

export default Proyectos;
