const {
  addTheatre,
  updateTheatre,
  deleteTheatre,
  getAllTheatres,
  getAllTheatresByOwner,
} = require("../controllers/theatreController");
const router = require("express").Router();

router.post("/addTheatre", addTheatre);
router.patch("/updateTheatre", updateTheatre);
router.delete("/deleteTheatre/:theatreId", deleteTheatre);
router.get("/getAllTheatres", getAllTheatres);
router.get("/getAllTheatresByOwner", getAllTheatresByOwner);

module.exports = router;
