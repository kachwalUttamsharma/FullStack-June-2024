// // console.log(global);
// // console.log("dir name", __dirname);
// // console.log("file name", __filename);
// // console.log(process);

// // enviornment variables
// // console.log(process.env);

// // current working directory
// console.log(process.cwd());

// // process
// console.log(process.argv);

// // process id
// console.log(process.pid);

// // console.log(process.stdin);
// // console.log(process.stdout);

// console.log(process.moduleLoadList);
const http = require("http");
const server = http.createServer();
const fs = require("fs");
const path = require("path");
// const content = Math.random().toString(36).repeat(10000000);
// fs.writeFileSync(
//   "/Users/kachwaluttamsharma/Desktop/FullStack-June-2024/Node JS/class 15/Big.file",
//   content
// );

// const filePath = path.join(__dirname, "Big.file");
// const readableStream = fs.createReadStream(filePath);
// const writableSteam = fs.createWriteStream("copyOfBig.file");
// const writableStream1 = fs.createWriteStream("anotherCopyOfBig.file");

// readableStream.on("data", (chunck) => {
//   console.log(`Received ${chunck.length} bytes of data.`);
//   writableSteam.write(chunck);
// });

// readableStream.on("end", () => {
//   writableSteam.end();
//   console.log("Finished reading file");
// });

// readableStream.pipe(writableStream1);

// readableStream.on("error", (err) => {
//   console.log("Error while reading", err);
// });
// writableStream1.on("error", (err) => {
//   console.log("Error while writing", err);
// });

// streams
// 4 types
// readabled - fs.createReadStream
// writeable - fs.createWriteStream
// duplex - sockets
// transform - zlib

server.on("request", (req, res) => {
  //   fs.readFile("./Big.file", (err, data) => {
  //     if (err) throw err;
  //     res.end(data);
  //   });
  const src = fs.createReadStream("./Big.file");
  src.pipe(res);
});

server.listen(3000, () => {
  console.log("servers started at 3000");
});
