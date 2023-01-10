import React from "react";
import video from "../assets/video2.mp4";

const Developer = () => {
  return (
    <div>
      <div className="h-screen	 w-full object-contain flex flex-col    items-center justify-start about-opacity ">
        <video
          className="w-full h-full object-cover -z-10 top-0 fixed"
          src={video}
          autoPlay
          loop
          muted
        ></video>
        <section className=" text-4xl text-center mt-64 flex flex-col gap-3 text-yellow-500 animacion xxl:text-8xl  ">
          <h1> Lautaro </h1>
          <p className="text-4xl">Lao</p>
          <h1>Larragueta</h1>
        </section>
          <p className=" mt-6 mb-48 text-xl text-center text-yellow-500 animacion2  xxl:mt-12   ">Full stack Developer</p>
      </div>
    </div>
  );
};

export default Developer;
