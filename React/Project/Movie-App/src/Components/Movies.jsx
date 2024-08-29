import React, { useState, useEffect, useCallback } from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";

const Movies = () => {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=0fa9d94b072b5c497f3a9720acb86bc2&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        const Movies = response?.data?.results;
        setMovies(Movies);
      });
  }, [pageNo]);

  useEffect(() => {
    setWatchList(JSON.parse(localStorage.getItem("movies")));
  }, []);

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

  const addToWatchList = useCallback((movie) => {
    setWatchList((prevState) => {
      const updatedWatchList = prevState ? [...prevState, movie] : [movie];
      localStorage.setItem("movies", JSON.stringify(updatedWatchList));
      return updatedWatchList;
    });
  }, []);

  const removeFromWatchList = useCallback((movie) => {
    setWatchList((PrevState) => {
      const filteredWatchList = PrevState?.filter((m) => {
        return m.id != movie.id;
      });
      localStorage.setItem("movies", JSON.stringify(filteredWatchList));
      return filteredWatchList;
    });
  }, []);

  return (
    <div>
      <div className="text-white text-2xl font-bold text-center m-5 my-10">Trending Movies</div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.length > 0 &&
          movies.map((movieObj, idx) => {
            return (
              <MovieCard
                movie={movieObj}
                key={idx}
                addToWatchList={addToWatchList}
                removeFromWatchList={removeFromWatchList}
                watchList={watchList}
              />
            );
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
