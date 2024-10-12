import React, { useEffect, useMemo, useCallback, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "./Pagination";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo";
import { fetchMiddleWare } from "../redux/MovieSlice";
import { openModal, closeModal } from "../redux/ModalSlice";

const Movies = () => {
  const dispatch = useDispatch();

  // Select state from Redux store
  const { pageNo } = useSelector((state) => state.PaginationSlice);
  const { isModalOpen, selectedMovie } = useSelector(
    (state) => state.ModalSlice
  );
  const { error, loading, movies } = useSelector((state) => state.MoviesSlice);
  const { watchList } = useSelector((state) => state.WatchListSlice);

  // Fetch movies when pageNo changes
  useEffect(() => {
    dispatch(fetchMiddleWare(pageNo));
  }, [dispatch, pageNo]);

  // Memoize the check to determine if a movie is in the watch list
  const isInWatchList = useMemo(() => {
    const ids = new Set(watchList.map((movie) => movie.id));
    return (movie) => ids.has(movie.id);
  }, [watchList]);

  // Handler for opening the modal
  const handleOpenModal = useCallback(
    (movie) => {
      dispatch(openModal(movie));
    },
    [dispatch]
  );

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="text-2xl font-bold text-center m-5">
            Trending Movies
          </div>
          <div className="flex justify-evenly flex-wrap gap-8">
            {movies.map((movieObj) => (
              <MovieCard
                key={movieObj.id}
                movie={movieObj}
                isInWatchList={isInWatchList(movieObj)}
                handleOpenModal={handleOpenModal} // Pass handleOpenModal to MovieCard
              />
            ))}
          </div>
          <Pagination pageNo={pageNo} />
          {isModalOpen && selectedMovie && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex justify-center items-center h-screen">
              <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-[30vw]">
                <MovieInfo movie={selectedMovie} />
                <button
                  onClick={() => dispatch(closeModal())}
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
