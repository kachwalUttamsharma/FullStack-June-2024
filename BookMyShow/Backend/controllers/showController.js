const Show = require("../models/showSchema");

const addShow = async (req, res) => {
  try {
    const newShow = new Show(req.body);
    await newShow.save();
    res.send({
      success: true,
      message: "New show has been added!",
    });
  } catch (err) {
    res.send({
      status: false,
      message: err.message,
    });
  }
};

const deleteShow = async (req, res) => {
  try {
    const showId = req.params.showId;
    await Show.findByIdAndDelete(showId);
    res.send({
      success: true,
      message: "The show has been deleted!",
    });
  } catch (err) {
    res.send({
      status: false,
      message: err.message,
    });
  }
};

const updateShow = async (req, res) => {
  try {
    await Show.findByIdAndUpdate(req.body.showId, req.body);
    res.send({
      success: true,
      message: "The show has been updated!",
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const getAllShowsByTheatre = async (req, res) => {
  try {
    const shows = await Show.find({ theatre: req.body.theatreId }).populate(
      "movie"
    );
    res.send({
      success: true,
      message: "All shows are fetched",
      data: shows,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const getAllTheatersByMovie = async (req, res) => {
  try {
    const { movie, date } = req.body;
    const shows = await Show.find({ movie, date }).populate("theatre");

    let uniqueTheatre = [];
    shows.forEach((show) => {
      let isTheatre = uniqueTheatre.find(
        (theatre) => theatre._id === show.theatre._id
      );
      if (!isTheatre) {
        let showsOfThisTheatre = shows.filter(
          (showObj) => showObj.theatre._id === show.theatre._id
        );
        uniqueTheatre.push({
          ...show.theatre._doc,
          shows: showsOfThisTheatre,
        });
      }
    });

    res.send({
      success: true,
      message: "All Theatres are fetched",
      data: uniqueTheatre,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

const getShowsById = async (req, res) => {
  try {
    const shows = await Show.findById(req.body.showId)
      .populate("movie")
      .populate("theatre");
    res.send({
      success: true,
      message: "All shows are fetched",
      data: shows,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  addShow,
  deleteShow,
  updateShow,
  getAllShowsByTheatre,
  getAllTheatersByMovie,
  getShowsById,
};
