import styled from "styled-components";

const Title = styled.p`
  background-color: black;
  font-size: 55px;
  text-transform: uppercase;
  padding-top: 40px;
  font-weight: 400;
  text-align: center;
  padding-bottom: 50px;
  color: #a5992d;
  text-shadow: 2px 2px 8px #ff0000;
`;

const TitleProyect = () => {
  return <Title>Proyectos </Title>;
};

export default TitleProyect;
