const express = require("express");
const cors = require("cors");
const { Worker } = require("worker_threads");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static("public"));

function runWorker(number) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, "fiboWorker.js"), {
      workerData: { number },
    });
    console.log(`Forked new worker thread with threadId: ${worker.threadId}`);
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) {
        console.log("code : ", code);
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

app.get("/fib", async (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler fn ran for req", requestNumber);
  if (!number || isNaN(number) || number < 0) {
    return res.status(400).json({
      error: "Please provide a positive number",
    });
  }

  try {
    const result = await runWorker(Number(number));
    console.log("Sending response for req", requestNumber);
    res.status(200).json({
      status: "success",
      message: result,
      requestNumber,
    });
  } catch (error) {
    res.status(500).json({ error: "Error Calculating Fibonacci" });
  }
});
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
