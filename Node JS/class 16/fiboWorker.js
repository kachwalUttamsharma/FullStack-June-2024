const { parentPort, workerData } = require("worker_threads");

function calculateFibonacci(number) {
  console.log("calculateFIbnacci number : ", number);
  if (number <= 1) {
    return number;
  }
  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}

const result = calculateFibonacci(workerData.number);
parentPort.postMessage(result);
