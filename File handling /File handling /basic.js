const {add ,subtract, multiply} = require('./math.js');
const { divide } = require('../hello.js');

console.log("Addition of 5 and 3 is: " + add(5, 3));
console.log("Subtraction of 5 and 3 is: " + subtract(5, 3));
console.log("Multiplication of 5 and 3 is: " + multiply(5, 3)); 
console.log("Division of 5 and 3 is: " + divide(5, 3));

