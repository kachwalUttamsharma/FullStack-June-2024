const router = require("express").Router();
const { registerUser, loginUser } = require("../controllers/UserController");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
