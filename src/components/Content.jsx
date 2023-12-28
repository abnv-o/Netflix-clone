import React from "react";

const content = ({ heading, para, videourl, no }) => {
  return (
    <div
      className={`flex   bg-black  bg-opacity-60 gap-6 py-10 px-2 items-center justify-around ${
        no % 2 == 0 ? "flex-row-reverse" : ""
      }`}
    >
      {/* left */}
      <div className="flex flex-col justify-center items-center  text-gray-200">
        <h1 className="text-3xl font-bold">{heading}</h1>
        <p>{para}</p>
      </div>

      {/* right */}
      <div>
        <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
          <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
            <video autoPlay loop muted>
              <source src={videourl} type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default content;
