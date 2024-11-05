const fs = require("fs");
const path = require("path");

fs.writeFile("file.txt", "hello world", (err) => {
  if (err) throw err;
  console.log("Data written to file");
});

fs.appendFile("file.txt", " some more text", (err) => {
  if (err) throw err;
  console.log("Data appended to file");
});

fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// Create a directory
fs.mkdir("newDir", (err) => {
  if (err) throw err;
  console.log("Directory created");
});

// Create another directory
fs.mkdir(path.join(__dirname, "newDir2"), (err) => {
  if (err) throw err;
  console.log("Directory created");
});
