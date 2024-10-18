const MovieModel = require("../models/movieSchema");

const addMovie = async (req, res) => {
  try {
    const newMovie = new MovieModel(req?.body);
    // to do if current which is getting added is duplicate
    await newMovie.save();
    res.send({
      success: true,
      message: "New Movie has been Added",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await MovieModel.find();
    res.send({
      success: true,
      message: "All movies has been fetched",
      data: allMovies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await MovieModel.findByIdAndUpdate(
      req?.body?.movieId,
      req.body,
      { new: true }
    );
    res.send({
      success: true,
      message: "The Movie has been Updated",
      data: movie,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    await MovieModel.findByIdAndDelete(movieId);
    res.send({
      success: true,
      message: "The Movie has been deleted",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

const getMovieById = async (req, res) => {
  try {
    const movie = await MovieModel.findById(req.params.id);
    res.send({
      success: true,
      message: "Movie fetched successfully!",
      data: movie,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
};
