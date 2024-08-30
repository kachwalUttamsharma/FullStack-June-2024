import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const Movies = () => {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState(() => {
    const savedWatchList = localStorage.getItem('watchList');
    return savedWatchList ? new Map(JSON.parse(savedWatchList)) : new Map();
  });

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
    setWatchList(prevState => {
      const updatedWatchList = new Map(prevState);
      updatedWatchList.set(movie.id, movie);
      return updatedWatchList;
    });
  }, []);

  const removeFromWatchList = useCallback((movie) => {
    setWatchList(prevState => {
      const filteredWatchList = new Map(prevState);
      filteredWatchList.delete(movie.id);
      return filteredWatchList;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify([...watchList]));
  }, [watchList])

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
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
