import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [bannerState, SetBannerState] = useState({
    title: "Placeholder Movie",
    bannerImage:
      "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  });

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=0fa9d94b072b5c497f3a9720acb86bc2&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response);
        const firstMovie = response?.data?.results[0];
        const title = firstMovie?.title;
        const poster = firstMovie["backdrop_path"];
        SetBannerState({
          title: title,
          bannerImage: `https://image.tmdb.org/t/p/original/${poster}`,
        });
      });
  }, []);
  return (
    <div
      className="h-[20vh] md:h-[45vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url('${bannerState?.bannerImage}')`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">
        {bannerState?.title}
      </div>
    </div>
  );
};

export default Banner;
