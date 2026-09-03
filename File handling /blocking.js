const fs = require("fs");
console.log("Blocking code execution starts");
console.log("1");
console.log("2");
console.log("4");

const result  = fs.readFileSync("hello.txt", "utf-8");
console.log(result);
console.log("3");

console.log("4");