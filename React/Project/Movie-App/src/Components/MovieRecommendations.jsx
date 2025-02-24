import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../MovieContextWrapper";
import { getMovieRecommendations } from "../config/gemini.js";

const MovieRecommendations = () => {
  const { watchList } = useContext(MovieContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (watchList?.length < 2) {
        // Need at least 2 movies to make meaningful recommendations
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await getMovieRecommendations(watchList);
        setRecommendations(result.recommendations);
      } catch (err) {
        setError("Failed to get recommendations. Please try again later.");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [watchList]);

  if (watchList?.length < 2) {
    return (
      <div className="p-4 text-center">
        <p className="text-gray-600">
          Add at least 2 movies to your watchList to get personalized
          recommendations
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">AI Recommended Movies</h2>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="loader"></div>
          <span className="ml-2">
            Getting your personalized recommendations...
          </span>
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-4">{error}</div>
      ) : (
        <div className="grid gap-4">
          {recommendations.map((movie, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {movie.confidence}% Match
                </span>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{movie.reason}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieRecommendations;
