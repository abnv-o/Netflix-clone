import React from "react";
import { Carousel } from "flowbite-react";

const slider = ({ img1, img2, img3, img4, img5 }) => {
  return (
    <div className="mx-14 my-10 MB-20 py-5 border border-gray-300 rounded-2xl flex justify-center">
      <div className="h-56 w-9/12 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img className="h-[500px] w-[900px]" src={img2} alt="..." />
          <img className="h-[500px] w-[900px]" src={img3} alt="..." />
          <img className="h-[500px] w-[900px]" src={img4} alt="..." />
          <img className="h-[500px] w-[900px]" src={img5} alt="..." />
          <img className="h-[500px] w-[900px]" src={img1} alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default slider;
