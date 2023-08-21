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
  padding: 10rem;
`;
const AboutText = styled.p`
  padding: 0.5rem;
  font-size: 15px;
  margin: 1rem;
`;

const About = () => {
  return (
    <AboutContainer className="about-me-opacity about-me-background ">
      <AboutTittle className="animacio-about-me">About me</AboutTittle>

      {/*
        {condicion ? <ComponenteA /> : <ComponenteB />}

        */}

      <section className="flex flex-row gap-8">
        <button
          className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-auto xxl:text-xl xxl:m-1 xxl:pb-8 "
          onClick={() => {
            console.log("educacion");
          }}
        >
          Education
        </button>

        <div>
          <button
            className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-auto xxl:text-xl xxl:m-1 xxl:pb-8 "
            onClick={() => {
              console.log("conocimientos");
            }}
          >
            technical knowledge
          </button>
        </div>

        <div>
          <button
            className=" p-2 text-[15px] m-12 sobre-mi-sombra  xxl:px-5 xxl:w-auto xxl:text-xl xxl:m-1 xxl:pb-8 "
            onClick={() => {
              console.log("certificados");
            }}
          >
            Certificacions
          </button>
        </div>
      </section>
    </AboutContainer>
  );
};

export default About;
