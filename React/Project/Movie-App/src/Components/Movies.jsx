import React, { useState } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";

const Movies = () => {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 1",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 2",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 3",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 4",
    },
    {
      url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
      title: "Movie 5",
    },
  ]);

  const handleNext = () => {
    setPageNo((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPageNo((prevPage) => {
      if (prevPage == 1) {
        return prevPage;
      }
      return prevPage - 1;
    });
  };
  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      {/* <MovieCard movies={movies} /> */}
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.length > 0 &&
          movies.map((movieObj, idx) => {
            return <MovieCard movie={movieObj} key={idx} />;
          })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
};

export default Movies;
