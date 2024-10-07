const jwt = require("jsonwebtoken");

const validateJWTToken = (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime > decoded.exp) {
      res.status(401).send({ success: false, message: "Expired Token" });
    }
    req.body.userId = decoded?.userId;
    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "Invalid/Expired Token" });
  }
};

module.exports = {
  validateJWTToken,
};
