import React from "react";

const MovieCard = React.memo(
  ({
    movie,
    addToWatchList,
    removeFromWatchList,
    isInWatchList,
    handleOpenModal,
  }) => {
    console.log(
      `Rendering MovieCard: ${movie.title}, isInWatchList: ${isInWatchList}`
    );

    return (
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie["backdrop_path"]})`,
        }}
        className="h-[30vh] md:w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      >
        {!isInWatchList ? (
          <div
            className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
            onClick={() => addToWatchList(movie)}
          >
            &#128525; {/* Add to watchlist emoji */}
          </div>
        ) : (
          <div
            className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
            onClick={() => removeFromWatchList(movie)}
          >
            &#10060; {/* Remove from watchlist emoji */}
          </div>
        )}
        <div
          className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-xl"
          onClick={() => handleOpenModal(movie)}
        >
          {movie.title}
        </div>
      </div>
    );
  }
);

export default MovieCard;
