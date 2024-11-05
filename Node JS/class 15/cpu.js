const express = require("express");
const cors = require("cors");
const app = express();
const { fork } = require("child_process");
const path = require("path");

// cpu intensive task
// child process
// function calculateFibonacci(number) {
//   if (number <= 1) {
//     return number;
//   }
//   return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
// }

app.use(cors());
app.use(express.static("public"));

app.get("/fib", (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler fn ran for req", requestNumber);
  if (!number || isNaN(number) || number < 0) {
    return res.status(400).json({
      error: "Please provide a positive number",
    });
  }

  const fiboResponse = fork(path.join(__dirname, "fiboFork.js"));
  console.log(
    "Forked new process for req",
    requestNumber,
    "with PID",
    fiboResponse.pid
  );
  // talking to child process
  fiboResponse.send({ number });

  // child process responds back on message
  fiboResponse.on("message", (answer) => {
    console.log("Sending response for req", requestNumber);
    res.status(200).json({
      status: "success",
      message: answer,
      requestNumber,
    });
    fiboResponse.kill();
  });

  // const answer = calculateFibonacci(number);
  // res.status(200).json({
  //   status: "success",
  //   message: answer,
  //   requestNumber,
  // });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// LibUV - c programming library
// filesystem , networking operations and timers
// os -> libuv -> event loop
