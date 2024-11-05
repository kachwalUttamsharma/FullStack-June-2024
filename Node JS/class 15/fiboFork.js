function calculateFibonacci(number) {
  if (number <= 1) {
    return number;
  }
  return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}

process.on("message", (message) => {
  const { number } = message;
  const result = calculateFibonacci(number);
  process.send(result);
});
