// const fs = require("fs");

// console.log("Blocking code execution starts");

// console.log("1");

// console.log("2");

// console.log("4");

// fs.readFile("hello.txt", "utf-8", (err, result) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(result);
// });  
// console.log("3");
// console.log("4");
const os = require("os");
console.log(os.cpus().length);