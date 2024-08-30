import React from "react";

const MovieCard = React.memo(
  ({ movie, addToWatchList, watchList, removeFromWatchList }) => {
    console.log("rendering for " + movie.id);
    return (
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie["backdrop_path"]})`,
        }}
        className="h-[30vh] md:w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      >
        {!watchList.has(movie.id) ? (
          <div
            className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
            onClick={() => addToWatchList(movie)}
          >
            &#128525;
          </div>
        ) : (
          <div
            className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
            onClick={() => {
              removeFromWatchList(movie);
            }}
          >
            &#10060;
          </div>
        )}
        <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-xl">
          {movie.title}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.watchList.has(prevProps.movie.id) === nextProps.watchList.has(nextProps.movie.id)
);

export default MovieCard;
