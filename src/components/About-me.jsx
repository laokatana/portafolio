import { useState } from "react";
import video from "../assets/video2.mp4";

const About = () => {
  const [open, setOpen] = useState(false);

  const Opennig = () => {
    setOpen(true);
    console.log("abierto");
  };

  return (
    <div className="flex flex-col items-center  text-center p-6  about-me-opacity about-me-background gap-12">
      <h3 className="text-4xl animacio-about-me p-11 xxl:text-6xl">
        Algo Sobre Mi
      </h3>

      {/*
        <p className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-2/4 xxl:text-xl xxl:m-1 xxl:pb-8 ">
          en proceso de mejora, tanto a nivel tecnico como personal, en estos
          momentos los componentes de este proyecto y como la creacion de otros
          proyectos estan siendo retocados en la coder-cueva ("espacio de
          trabajo") o sea en la compu de mi pieza, sepa disculpar. y si usted
          llego hasta aqui gracias por tomarse su tiempo en darle un poco de
          atencion a mi portfolio, le deseo un lindo dia.
        </p>
        

        {condicion ? <ComponenteA /> : <ComponenteB />}

        */}

      <section className="flex flex-row gap-8">
        <div className="">
          <button className=" p-2 text-[15px] m-12 sobre-mi-sombra   xxl:px-5 xxl:w-auto xxl:text-xl xxl:m-1 xxl:pb-8 ">
            Educacion
          </button>
        </div>

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

      <section></section>
    </div>
  );
};

export default About;
