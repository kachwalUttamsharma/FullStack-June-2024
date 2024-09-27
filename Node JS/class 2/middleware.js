const express = require("express");
const errorHandler = require("./ErrorHandling");
const app = express();
const port = 3001;

// application level middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()} --- request [${req.method} ${req.url}]`);
  next();
};

const auth = (req, res, next) => {
  const params = req.query;
  if (params.password === "123") {
    next();
  } else {
    res.status(401);
    throw new Error("user is not valid");
  }
};

// use next mostly in async callback
// use throw new error synchronouse use case

app.use(loggerMiddleware);
app.use(express.static("public"));

// app.use(auth);

app.get("/", (req, res) => {
  res.send("Middleware App");
});

app.get("/1", auth, (req, res) => {
  res.send("Middleware App 1");
});

app.use(errorHandler);

app.listen(port, (req, res) => {
  console.log("Middleware app is running on ", port);
});
