const path = require("path");

console.log(__dirname);

const base = path.basename(__dirname);
console.log(base);

const newPath = path.join(__dirname, "public", "abc", "file.txt");
console.log(newPath);
