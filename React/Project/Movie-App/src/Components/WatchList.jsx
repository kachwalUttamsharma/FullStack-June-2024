import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useCallback } from "react";
import { MovieContext } from "../MovieContextWrapper";

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
  const { watchList, setWatchList, removeFromWatchList } =
    useContext(MovieContext);

  useEffect(() => {
    const GenreList = new Set(
      watchList.map((movie) => {
        return genreids[movie.genre_ids[0]];
      })
    );
    setGenreList(["All Genre", ...GenreList]);
  }, [watchList]);

  const handleAscendingOrderRatings = () => {
    const sortedAscendingData = watchList.sort(
      (A, B) => A?.vote_average - B?.vote_average
    );
    setWatchList([...sortedAscendingData]);
  };

  const handleDesendingOrderRatings = () => {
    const sortedDesendingData = watchList.sort(
      (A, B) => B?.vote_average - A?.vote_average
    );
    setWatchList([...sortedDesendingData]);
  };

  // implement debouncing here - easier way to use lodash.__debounce
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleGenreFilter = (genre) => {
    setCurrGenre(genre);
  };

  return (
    <div>
      <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          return (
            <div
              className={
                currGenre === genre
                  ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl"
                  : "mx-4 flex justify-center items-center  h-[3rem] w-[9rem]  font-bold border rounded-xl bg-gray-300"
              }
              onClick={() => handleGenreFilter(genre)}
            >
              {genre}
            </div>
          );
        })}
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
            <th>
              <div className="flex">
                <i
                  className="fa-solid fa-arrow-up"
                  onClick={handleAscendingOrderRatings}
                ></i>
                <div>Ratings</div>
                <i
                  className="fa-solid fa-arrow-down"
                  onClick={handleDesendingOrderRatings}
                ></i>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Popularity</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Genre</div>
              </div>
            </th>
            <th>
              <div className="flex">
                <div>Action Button</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.length > 0 &&
            watchList
              .filter((movie) => {
                if (currGenre === "All Genre") {
                  return true;
                } else {
                  return genreids[movie.genre_ids[0]] === currGenre;
                }
              })
              .filter((movie) =>
                movie.title.toLowerCase().trim().includes(search.toLowerCase())
              )
              .map((movie) => {
                return (
                  <tr>
                    <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                      <img
                        className="h-[6rem] w-[10rem] object-cover"
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt="Poster of Movie"
                      />
                      <div className="font-medium text-gray-700 text-sm">
                        {movie?.title}
                      </div>
                    </td>
                    <td className="pl-6 py-4">
                      <div>{movie?.vote_average}</div>
                    </td>
                    <td className="pl-6 py-4">
                      <div>{movie?.popularity}</div>
                    </td>
                    <td className="pl-6 py-4">
                      <div>{genreids[movie?.genre_ids[0]]}</div>
                    </td>
                    <td
                      className="pl-6 py-4 text-red-600"
                      onClick={() => removeFromWatchList(movie)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
