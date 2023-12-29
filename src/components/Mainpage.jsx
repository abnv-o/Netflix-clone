import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import Faq from "./Faq";

const mainpage = () => {
  return (
    <div>
      <Hero />
      <Content
        heading="Heading1"
        para="lorem ipsum"
        videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        no={1}
      />
      <Content
        heading="Heading2"
        para="lorem ipsum dollar"
        videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        no={2}
      />
      <Content
        heading="Heading3"
        para="lorem ipsum dollar dollar"
        videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
        no={3}
      />
      <Faq />
    </div>
  );
};

export default mainpage;
