const fs = require("fs");

// fs.readFile("./example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("error ", err);
//     return;
//   }
//   console.log(data);
// });

// const content = "Hello World";

// fs.writeFile("./example.txt", content, "utf8", (err) => {
//   if (err) {
//     console.log("error ", err);
//     return;
//   }
//   console.log("File has been written");
// });

// fs.rename("./old-file.txt", "./new-file.txt", (err) => {
//   if (err) {
//     console.log("error ", err);
//     return;
//   }
//   console.log("File Name has been changed");
// });

// fs.unlink("./file-to-be-deleted.txt", (err) => {
//   if (err) {
//     console.log("error ", err);
//     return;
//   }
//   console.log("File has been deleted");
// });

// fs.stat("./example.txt", (err, data) => {
//   if (err) {
//     console.log("error ", err);
//     return;
//   }
//   console.log(data);
// });

// directory

// const directoryName = "my-directory";

// fs.mkdir(directoryName, (err) => {
//   if (err) {
//     console.log("error ", err);
//     return;
//   }
//   console.log("Directory has been created");
// });

// fs.rmdir(directoryName, (err) => {
//   if (err) {
//     console.log("error ", err);
//     return;
//   }
//   console.log("Directory has been deleted");
// });

// particular directory or file is present

const filePath = "./myDirectory";

// sync
// if (fs.existsSync(filePath)) {
//   console.log("file exisits ", filePath);
// } else {
//   console.log("file doesnt exisits ", filePath);
// }

// async

// fs.access(filePath, fs.constants.F_OK, (err) => {
//   if (err) {
//     console.log("error ", err);
//     return;
//   }
//   console.log("File Exists");
// });

// path
// extension
// abosulte path
// relative path
// join
// dirname
// filename

const path = require("path");

const filename = path.basename("/path/to/file.txt");
console.log(filename);

const dirname = path.dirname("/path/to/file.txt");
console.log(dirname);

const extension = path.extname("/path/to/file.txt");
console.log(extension);

const pathInfo = path.parse("./path/to/file.txt");
console.log(pathInfo);

const isAbsolute = path.isAbsolute("./path/to/file.txt");
console.log(isAbsolute);

// problem we have copy data from source file to destination file

const sourcePath = "./mycopydirectory/sourceFile.txt";
const destinationPath = "./mycopydirectory/destinationFile.txt";

// read stream
const readStream = fs.createReadStream(sourcePath);
// write stream
const writeStream = fs.createWriteStream(destinationPath);

readStream.pipe(writeStream);

readStream.on("error", (err) => {
  console.log("error occured while reading stream", err);
});

writeStream.on("error", (err) => {
  console.log("error occured while writing stream", err);
});

writeStream.on("finish", () => {
  console.log("file copied successfully");
});
