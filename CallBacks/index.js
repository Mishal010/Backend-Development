const fs = require("fs");
function person(name, callback) {
  console.log(`Hello ${name}`);
  address();
}
function address() {
  console.log("RG Road Banglore");
}
person("Amit", address);

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading the file" + err);
    return;
  }
  console.log(data);
});
