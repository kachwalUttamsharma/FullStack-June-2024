const http = require("http");

const server = http.createServer((req, res) => {
  // req are handled here

  res.setHeader("Content-type", "application/json");

  // response message in terms of html
  const jsonData = {
    message: "Hello World",
    date: new Date(),
  };
  res.write(JSON.stringify(jsonData));
  res.statusCode = 200;
  res.end();
});

const port = 3000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`server is listening on this port : `, port);
});
