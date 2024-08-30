import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from "react";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import axios from "axios";
import MovieInfo from "./MovieInfo";
import { MovieContext } from "../MovieContextWrapper";

const Movies = () => {
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const { watchList, addToWatchList, removeFromWatchList } =
    useContext(MovieContext);

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=0fa9d94b072b5c497f3a9720acb86bc2&language=en-US&page=${pageNo}`
      )
      .then((response) => {
        const Movies = response?.data?.results;
        setTimeout(() => {
          setMovies(Movies);
          setLoader(false);
        }, 2000);
      });
  }, [pageNo]);

  const handleNext = () => {
    setPageNo((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPageNo((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
  };

  // Memoize the watchlist check to avoid recalculations
  const isInWatchList = useMemo(() => {
    const ids = new Set(watchList.map((movie) => movie.id));
    return (movie) => ids.has(movie.id);
  }, [watchList]);

  const handleOpenModal = useCallback((movie) => {
    setSelectedMovie(movie);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedMovie(null);
    setOpenModal(false);
  }, []);

  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="text-2xl font-bold text-center m-5">
            Trending Movies
          </div>
          <div className="flex justify-evenly flex-wrap gap-8">
            {movies.length > 0 &&
              movies.map((movieObj) => (
                <MovieCard
                  movie={movieObj}
                  key={movieObj.id}
                  addToWatchList={addToWatchList}
                  removeFromWatchList={removeFromWatchList}
                  isInWatchList={isInWatchList(movieObj)}
                  handleOpenModal={handleOpenModal}
                />
              ))}
          </div>
          <Pagination
            pageNo={pageNo}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
          {openModal && selectedMovie && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex justify-center items-center h-screen">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-[30vw] ">
                <MovieInfo
                  movie={selectedMovie}
                  loader={loader}
                  setLoader={setLoader}
                />
                <button
                  onClick={handleCloseModal}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Movies;
