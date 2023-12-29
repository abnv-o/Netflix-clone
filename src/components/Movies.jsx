import React from "react";
import Slider from "./Slider";
import Movierow from "./Movierow";

const Movies = () => {
  return (
    <div>
      <Slider
        img1="https://cdn.wallpapersafari.com/17/94/NG7hkx.jpg"
        img2="https://gamingbolt.com/wp-content/uploads/2015/04/The-Witcher-3.jpg"
        img3="https://i.ytimg.com/vi/L-KQjiK_VaA/maxresdefault.jpg"
        img4="https://www.pcinvasion.com/wp-content/uploads/2021/02/halo-infinite-campaign-screenshots-new-sniper.jpg"
        img5="https://gamingbolt.com/wp-content/uploads/2018/09/EDD9566B-A7AF-4179-9ECD-F3A2CC78E0F2.jpeg"
      />
      <div>

      <Movierow category="Trending" />
      <Movierow category="Grossing" />
      <Movierow category="Fav" />

      </div>
    </div>
  );
};

export default Movies;
