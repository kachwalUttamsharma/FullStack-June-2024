const {
  addShow,
  deleteShow,
  updateShow,
  getAllShowsByTheatre,
  getAllTheatersByMovie,
  getShowsById,
} = require("../controllers/showController");

const router = require("express").Router();

router.post("/addShow", addShow);
router.delete("/deleteShow/:showId", deleteShow);
router.patch("/updateShow", updateShow);
router.post("/getAllShowsByTheatre", getAllShowsByTheatre);
router.post("/getAllTheatersByMovie", getAllTheatersByMovie);
router.post("/getShowById", getShowsById);

module.exports = router;
