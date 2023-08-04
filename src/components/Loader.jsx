import React from "react";

/*
pasar a styled-components los stilos y trabajar las medias queries

*/

const Loader = () => {
  return (
    <div className="bg-black h-screen flex items-center ">
      <p className="mx-auto text-5xl text-center text-yellow-500 loading animacion">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
