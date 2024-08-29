import React, { useEffect, useState } from "react";

const WatchList = () => {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    setWatchList(JSON.parse(localStorage.getItem("movies")));
  }, []);
  return (
    <div>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <div>Ratings</div>
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
            watchList.map((movie) => {
              return (
                <tr key={movie.id}>
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
                    <div>{movie?.genre_ids}</div>
                  </td>
                  <td className="pl-6 py-4">Action</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
