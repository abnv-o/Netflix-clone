import React from "react";
import Card1 from "./Card1";

const Movierow = ({ category }) => {
  let moviedata = [
    {
      heading: "BLACK OPS ",
      img: "https://i.etsystatic.com/9801454/r/il/1ec064/1248973995/il_fullxfull.1248973995_6vxb.jpg",
    },
    {
      heading: "PUBG",
      img: "https://th.bing.com/th/id/R.839596ab128604a05240a61d29ac166c?rik=1uGl68ZzQSu1SQ&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2fpubg-game-poster-art-4k-jb-2160x3840.jpg&ehk=PTWKZ2qiViQGQdmd3%2fQ6cFfan28ecAhRzOtWKpojHhc%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      heading: "MODERN WARFARE",
      img: "https://i.pinimg.com/originals/c4/af/8b/c4af8bfb83c1daec2adc3694f5c93ed8.png",
    },
    {
      heading: "DOOM",
      img: "https://cdn.shopify.com/s/files/1/0747/3829/products/mL4252_1024x1024.jpg?v=1583187222",
    },
    {
      heading: "WATCH DOGS",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/69eaea114338715.60391d52c518b.png",
    },
  ];

  return (
    <div className="bg-black bg-opacity-70">
      <div className="text-4xl font-bold text-white flex justify-start pl-20">
        {" "}
        {category}{" "}
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-16 py-8 ">
          {moviedata.map((item) => (
            <Card1 data={item} />
          ))}
        </div>

        <div className="bg-gray-500 h-0.5 w-9/12 flex my-10"></div>
      </div>
    </div>
  );
};

export default Movierow;
