const firstModule = require("./first-module");

console.log(firstModule.add(20, 30));
console.log(firstModule.multiply(20, 30));
try {
  console.log("Trying to divide by zero");
  console.log(firstModule.divide(20, 0));
} catch (error) {
  console.log(error.message);
}
console.log(firstModule.divide(20, 30));
