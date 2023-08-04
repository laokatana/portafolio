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
  font-size: 4.25rem;
  line-height: 2.5rem;
  text-align: center;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: #fcac03;
  text-shadow: 1px 1px 15px #da2323;


  @media (width: 320px) {

    gap:1rem;
    margin-top:10rem;

  }


`;

const TextHome = styled.p`
  margin-top: 4.5rem;
  margin-bottom: 12rem;
  font-size: 1.15rem /* 20px */;
  line-height: 1.75rem;
  text-align: center;
  color: rgb(234 179 8);
`;

const Developer = () => {
  return (
    <div>
      <ContainerHome className="about-opacity about-background">
        <SectionHome className=" especificando_altura ">
          <p className="tittle">LAO</p>
          <p className="tittle">LARRAGUETA</p>
        </SectionHome>

        <TextHome className=" animacion2  xxl:mt-12 ">
          Software Developer
        </TextHome>
      </ContainerHome>
    </div>
  );
};

export default Developer;
