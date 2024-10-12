// src/components/MovieInfo.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrailer, clearTrailer } from "../redux/TrailerSlice";

const MovieInfo = ({ movie }) => {
  const dispatch = useDispatch();
  const { trailerUrl, loading, error } = useSelector(
    (state) => state.TrailerSlice
  );
  const { id, title, overview, poster_path, release_date, vote_average } =
    movie;

  useEffect(() => {
    dispatch(fetchTrailer(id));
    return () => {
      dispatch(clearTrailer());
    };
  }, [dispatch, id]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row">
        {poster_path ? (
          <img
            className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6 object-cover h-64"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={`${title} poster`}
          />
        ) : (
          <div className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6 h-64 bg-gray-200 flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-500 mb-2 text-center md:text-left">
            {title}
          </h2>
          <p className="text-gray-500 mb-1">
            <strong>Release Date:</strong> {release_date || "N/A"}
          </p>
          <p className="text-gray-500 mb-4">
            <strong>Average Vote:</strong>{" "}
            {vote_average ? vote_average.toFixed(1) : "N/A"}
          </p>
          <p className="text-gray-700">
            {overview || "No overview available."}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-500 mb-2">Trailer</h3>
        <div className="aspect-w-16 aspect-h-9">
          {loading ? (
            <p className="text-gray-500">Loading trailer...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : trailerUrl ? (
            <iframe
              title={`${title} trailer`}
              className="w-full h-full rounded-lg"
              src={trailerUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-gray-500">Trailer not available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
