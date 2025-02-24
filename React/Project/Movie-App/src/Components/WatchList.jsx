import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { MovieContext } from "../MovieContextWrapper";
import MovieRecommendations from "./MovieRecommendations";

const genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const WatchList = () => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genre");
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { watchList, setWatchList, removeFromWatchList } =
    useContext(MovieContext);

  useEffect(() => {
    const GenreList = new Set(
      watchList.map((movie) => genreids[movie.genre_ids[0]])
    );
    setGenreList(["All Genre", ...GenreList]);
  }, [watchList]);

  const handleAscendingOrderRatings = () => {
    setWatchList([
      ...watchList.slice().sort((A, B) => A?.vote_average - B?.vote_average),
    ]);
  };

  const handleDesendingOrderRatings = () => {
    setWatchList([
      ...watchList.slice().sort((A, B) => B?.vote_average - A?.vote_average),
    ]);
  };

  const handleSearch = (e) => setSearch(e.target.value);
  const handleGenreFilter = (genre) => setCurrGenre(genre);
  const toggleOverlay = () => setIsOverlayOpen(!isOverlayOpen);

  return (
    <div>
      <div
        className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 transition duration-300 h-[3rem] w-[14rem] text-white font-bold border border-blue-700 rounded-xl shadow-md cursor-pointer mx-[43%] my-4"
        onClick={toggleOverlay}
      >
        Recommend Movies
      </div>

      {isOverlayOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 h-3/4 overflow-auto relative">
            <button
              className="absolute top-4 right-4 text-red-500 text-lg"
              onClick={toggleOverlay}
            >
              ✖
            </button>
            <MovieRecommendations />
          </div>
        </div>
      )}

      <div className="flex justify-center m-4">
        {genreList.map((genre) => (
          <div
            key={genre}
            className={`mx-4 flex justify-center items-center h-[3rem] w-[9rem] font-bold border rounded-xl cursor-pointer ${
              currGenre === genre ? "bg-blue-400 text-white" : "bg-gray-300"
            }`}
            onClick={() => handleGenreFilter(genre)}
          >
            {genre}
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10">
        <input
          placeholder="Search by movie name"
          className="h-[3rem] w-[18rem] px-4 outline-none border border-slate-700 rounded-lg bg-gray-300"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>

      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th className="px-6 py-4">
              Ratings
              <i
                className="fa-solid fa-arrow-up mx-2 cursor-pointer"
                onClick={handleAscendingOrderRatings}
              ></i>
              <i
                className="fa-solid fa-arrow-down cursor-pointer"
                onClick={handleDesendingOrderRatings}
              ></i>
            </th>
            <th className="px-6 py-4">Popularity</th>
            <th className="px-6 py-4">Genre</th>
            <th className="px-6 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList
            .filter(
              (movie) =>
                currGenre === "All Genre" ||
                genreids[movie.genre_ids[0]] === currGenre
            )
            .filter((movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((movie) => (
              <tr key={movie.id}>
                <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                  <img
                    className="h-[6rem] w-[10rem] object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="font-medium text-gray-700 text-sm ml-4">
                    {movie.title}
                  </div>
                </td>
                <td className="pl-6 py-4">{movie.vote_average}</td>
                <td className="pl-6 py-4">{movie.popularity}</td>
                <td className="pl-6 py-4">{genreids[movie.genre_ids[0]]}</td>
                <td
                  className="pl-6 py-4 text-red-600 cursor-pointer"
                  onClick={() => removeFromWatchList(movie)}
                >
                  Delete
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
