import React from "react";
import Card from "./Card";

const Movies = () => {
  return (
    <div>
      <Card
        head="Avatar"
        image="https://th.bing.com/th/id/R.a55dd5066c720c301569eac4f0820c9f?rik=Y84cfdymWe2KoQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-H57vRpipBhs%2fT92h_GLMFAI%2fAAAAAAAAAAc%2fzLYxoSfXv9w%2fs1600%2favatar_movie_poster_final_01.jpg&ehk=jzJkCE7sP8U2tnS91vVNZ2sFDSdjyJXIi4QpgsOUBZY%3d&risl=&pid=ImgRaw&r=0"
        para="lorem ipsum"
      />
      <Card
        head="Once Upon A Time In Hollywood"
        image="https://www.vintagemovieposters.co.uk/wp-content/uploads/2019/06/IMG_9698.jpeg"
        para="lorem ipsum"
      />
      <Card
        head="Pirates of Carribean"
        image="https://th.bing.com/th/id/R.805fbe5d1f82c05ccd982fb37ec243d5?rik=jzE1UR2ah%2b8zpA&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f8400000%2fMovie-Posters-movies-8405245-1224-1773.jpg&ehk=k87cjy7XpNwrPb49EzeBjqw44Wxff4qiNh8iim3NcRI%3d&risl=&pid=ImgRaw&r=0"
        para="lorem ipsum"
      />
    </div>
  );
};

export default Movies;
