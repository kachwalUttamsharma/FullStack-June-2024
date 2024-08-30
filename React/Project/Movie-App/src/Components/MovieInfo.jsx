import React, { useEffect, useState } from "react";

const MovieInfo = ({ movie, setLoader, loader }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const { id, title, overview, poster_path, release_date, vote_average } =
    movie;

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        setLoader(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0fa9d94b072b5c497f3a9720acb86bc2`
        );
        const data = await response.json();

        // Find the first YouTube trailer
        const trailer = data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
          setLoader(false);
        } else {
          console.log("Trailer not found.");
          setLoader(false);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
        setLoader(false);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
      {loader ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
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
            <h3 className="text-xl font-semibold text-blue-500 mb-2">
              Trailer
            </h3>
            <div className="aspect-w-16 aspect-h-9">
              {trailerUrl ? (
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
        </>
      )}
    </div>
  );
};

export default MovieInfo;
