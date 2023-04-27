import React from "react";
import styled from "styled-components";

const ContainerHome = styled.div`
  height: 100vh;
  width: 100%;
  object-fit: contain;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const SectionHome = styled.section`
font-size: 2.25rem;
line-height: 2.5rem;
text-align: center;
margin-top: 11rem;
display: flex;
flex-direction: column;
color: rgb(234 179 8);
`

const TextHome = styled.p`
margin-top: 1.5rem;
margin-bottom: 12rem;
font-size: 1.15rem/* 20px */;
line-height: 1.75rem;
text-align: center;
color: rgb(234 179 8);

`

const Developer = () => {
  return (
    <div>
      <ContainerHome className="about-opacity about-background">
        <SectionHome className=" especificando_altura  animacion   ">
          <h1> Lautaro </h1>
          <p className="text-4xl">Lao</p>
          <h1>Larragueta</h1>
        </SectionHome>

        <TextHome className=" animacion2  xxl:mt-12 ">
          Actualizando Portfolio
        </TextHome>  

      </ContainerHome>
    </div>
  );
};

export default Developer;
