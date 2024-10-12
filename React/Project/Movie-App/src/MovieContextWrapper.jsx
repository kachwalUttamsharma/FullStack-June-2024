import React, { useState, useCallback, useEffect } from "react";

// 1. create context object
export const MovieContext = React.createContext();

const MovieContextWrapper = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = useCallback((movie) => {
    setWatchList((prevState) => {
      const updatedWatchList = prevState ? [...prevState, movie] : [movie];
      localStorage.setItem("movies", JSON.stringify(updatedWatchList));
      return updatedWatchList;
    });
  }, []);

  const removeFromWatchList = useCallback((movie) => {
    setWatchList((prevState) => {
      const filteredWatchList = prevState?.filter((m) => m.id !== movie.id);
      localStorage.setItem("movies", JSON.stringify(filteredWatchList));
      return filteredWatchList;
    });
  }, []);

  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem("movies"));
    if (storedWatchList) setWatchList(storedWatchList);
  }, []);

  // 2. create a provider where you will add state and function information
  return (
    <MovieContext.Provider
      value={{ watchList, setWatchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextWrapper;
