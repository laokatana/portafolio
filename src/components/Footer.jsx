import React from "react";

const Footer = () => {
  return (
    <div className=" footer-background  h-full flex flex-col items-center justify-center ">
      <section className="text-slate-200 flex flex-col h-screen items-center justify-center gap-5 text-2xl pb-20 ">
        <p className=" titulo-footer text-5xl text-slate-200 text-center pb-11  animacion3">
          Contacto
        </p>
        <a
          className="footer-item"
          href="https://www.linkedin.com/in/lautaro-larragueta/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="footer-item"
          href="https://github.com/laokatana"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="footer-item"
          href="mailto: lautaro.s.larragueta@gmail.com"
          target="_blank"
        >
          email
        </a>
        <a
          className="footer-item"
          href="../../public/Lautaro Larragueta Full Stack.pdf"
          download="Larragueta Lautaro"
        >
          Descargar cv
        </a>
      </section>
          <p className="text-white" >Design By Lao</p>


    </div>
  );
};

export default Footer;
