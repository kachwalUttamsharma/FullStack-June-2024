import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{ backgroundImage: `url(${movie.url})` }}
      className="h-[35vh] md:w-[250px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-center"
    >
      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-xl">
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;
