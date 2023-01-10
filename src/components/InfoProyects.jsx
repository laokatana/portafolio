import styled from "styled-components";
import TypeIt from "typeit-react";

const Proyects = () => {
  return (
    <Tecnologies className="xxl:!px-32 ">
      <TypeIt
        option={{
          speed: 8,
        }}
      >
        <p>
          Aqui encontraras los proyectos que fui construyendo con el paso del
          tiempo los mismos fueron realizados por los cursos que fui tomando en
          el transcurso de este aprendizaje constante, cursos como por ejemplo
          de programacion web fulll stack con el stack MERN de la mano de global
          learning bajo el programa integrarTec que lo imparte la Fundacion
          Integrar que Desde hace 15 años becan a jóvenes de barrios carenciados
          que reúnen las condiciones intelectuales, el deseo y la tenacidad
          necesaria para realizar estudios de nivel superior a fin de mejorar
          sus condiciones de empleabilidad.
        </p>

        <br />
        <br />

        <p>
          Proyectos del Programa ONE, ONE es un programa de educación y
          empleabilidad diseñado para quienes no tuvieron acceso a una educación
          de calidad y quieren transformar su realidad social.
        </p>

        <br />
        <br />

        <p>
          Proyectos de las las Becas PoloIT- Integrar. curso intensivo en
          JavaScript. La Universidad Tecnológica de Buenos Aires es la encargada
          de la capacitación académica,
        </p>

        <br />
        <br />

        <p>
          Proyectos de forma autodidacta que voy creando a manera de practica
          para profundizar y reforzar los conocimientos adquiridos en los cursos
          tomados.
        </p>
        <br />

        <p>Tecnologías y Herramientas usadas En los Proyectos son:</p>
        <br />

        <p>HTML, CSS, React, JavaScript, NodeJs, Express, MongoDB</p>
        <br />
        <br />
      </TypeIt>
    </Tecnologies>
  );
};


const Tecnologies = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 45px;
  font-weight: 1px;
  color: #d8d085;
  text-shadow: 2px 2px 8px #ff0000;
  background-color: black;
`;
export default Proyects;
