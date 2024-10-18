const router = require("express").Router();
const {
  makePayment,
  bookShow,
  getAllBookings,
} = require("../controllers/bookingController");

router.post("/makePayment", makePayment);
router.post("/bookShow", bookShow);
router.get("/getAllBookings", getAllBookings);

module.exports = router;
