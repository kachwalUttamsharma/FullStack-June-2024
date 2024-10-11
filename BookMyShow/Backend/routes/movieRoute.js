const {
  addMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");
const { validateJWTToken } = require("../middleware/authorizationMiddleware");

const router = require("express").Router();

router.post("/addMovie", validateJWTToken, addMovie);
router.get("/getAllMovies", validateJWTToken, getAllMovies);
router.patch("/updateMovie", validateJWTToken, updateMovie);
router.post("/deleteMovie", validateJWTToken, deleteMovie);

module.exports = router;
