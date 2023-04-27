import { useState } from "react";
import video from "../assets/video2.mp4";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 12px;
 
  
`;

const AboutTittle = styled.p`
  margin-top: 20px;
  font-size: 2.25rem;
  line-height: 2.5rem;
  padding: 1.35rem;
`;
const AboutText = styled.p`
  padding: 0.5rem;
  font-size: 15px;
  margin: 1rem;
`;

const About = () => {
  return (
    <AboutContainer className="about-me-opacity about-me-background ">
      <AboutTittle className="animacio-about-me ">
        Algo Sobre Mi
      </AboutTittle>

        <AboutText className=" sobre-mi-sombra   xxl:AboutTextx-5 xxl:w-2/4 xxl:text-xl xxl:m-1 xxl:pb-8 ">
          en proceso de mejora, tanto a nivel tecnico como personal, en estos
          momentos los componentes de este proyecto y como la creacion de otros
          proyectos estan siendo retocados en la coder-cueva ("espacio de
          trabajo") o sea en la compu de mi pieza, sepa disculpar. y si usted
          llego hasta aqui gracias por tomarse su tiempo en darle un poco de
          atencion a mi portfolio, le deseo un lindo dia.
        </AboutText>

      {
        /*
        {condicion ? <ComponenteA /> : <ComponenteB />}

        */
      }
      {/*
        <section className="flex flex-row gap-8">
          <AboutContainer className="">
            <button className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-auto xxl:text-xl xxl:m-1 xxl:pb-8 ">
              Educacion
            </button>
          </AboutContainer>
  
          <div>
            <button
              className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-auto xxl:text-xl xxl:m-1 xxl:pb-8 "
              onClick={() => {
                console.log("conocimientos");
              }}
            >
              Conocimientos
            </button>
          </div>
  
          <div>
            <button
              className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-auto xxl:text-xl xxl:m-1 xxl:pb-8 "
              onClick={() => {
                console.log("certificados");
              }}
            >
              Certificados
            </button>
          </div>
        </section>
         */}
    </AboutContainer>
  );
};

export default About;
