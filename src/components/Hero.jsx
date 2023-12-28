import React from "react";
import Tv from "./Tv";

function Hero() {
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4 ">
     <div className="flex gap-2 items-center "> <h4 className="text-2xl text-white">Welcom back to</h4> <h4 className="text-3xl text-red-500">NETFLIX</h4></div>
      <h1 className="text-5xl text-center text-white font-black justify-center md:text-left">
        Unlimited movies,TV shows and more
      </h1>

       
    <Tv/>




    </div>
  );
}

export default Hero;
