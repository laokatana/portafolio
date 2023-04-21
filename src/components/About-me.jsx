import video from "../assets/video2.mp4";

const About = () => {
  return (
    <div className="flex flex-col items-center  text-center p-6  about-me-opacity about-me-background">
      {/*
        <video
          className="w-full h-full object-cover -z-10 top-0 fixed "
          src={video}
          autoPlay
          loop
          muted
        ></video>
         
         */}

      <h3 className="text-4xl animacio-about-me p-5 xxl:text-6xl">
        Algo Sobre Mi
      </h3>

      {/*
        <p className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-2/4 xxl:text-xl xxl:m-1 xxl:pb-8 ">
          Hola, mi nombre es Lautaro, pero mis amigxs me dicen Lao tengo 27 años,
          vivo actualmente en Buenos aires en la localidad de Florencio Varela.
          Soy una persona autodidacta de mente abierta con excelente disposición
          para el trabajo en equipo, con buenas habilidades de resiliencia, Soy de
          comunicación clara con la facilidad de poder transmitirme de forma
          transparente y sincera. Me encanta aprender mediante el conocimiento en
          todos sus formatos y sentidos. Me especializo en front end en estos
          momentos, pero tengo conocimientos de back end con JavaScript. Aparte de
          la programacion en mis tiempos libres me gusta crear musica y apreciar
          todo tipo de arte ,entretenerme con conocimientos nuevos en general,
          estar con mis amigxs gatunos llamados kurono y karmina tambien me
          encanta ir a caminar a espacios verdes y naturales.
          <br />
          Tengo conocimientos en las siguientes herramientas:
          <br />
          <span className="tecnologias">
            HTML , CSS, JavaScript, React, NodeJS, Express, MongoDB, MySqL y Git.
          </span>
        </p>
         
        */}

      <p className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-2/4 xxl:text-xl xxl:m-1 xxl:pb-8 ">
        en proceso de mejora, tanto a nivel tecnico como personal, en estos momentos los componentes de este proyecto y como la creacion de otros proyectos  estan siendo retocados en la coder-cueva ("espacio de trabajo") o sea en la compu de mi pieza, sepa disculpar. y si llego hasta aqui gracias por tomarse su tiempo en darle un poco de atencion a mi portfolio, le deseo un lindo dia.
      </p>
    </div>
  );
};

export default About;
