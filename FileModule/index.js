const fs = require("fs");
const path = require("path");
const dataFolder = path.join(__dirname, "data");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}
const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath, "Hello world!");
console.log("file created successfully");

const readContent = fs.readFileSync(filePath, "utf-8");
console.log("Content from example.txt: " + readContent);

fs.appendFileSync(filePath, "\nHello NodeJs");
console.log("New content appended to file");

// Async way :

const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello Async node js", (err) => {
  if (err) throw err;
  console.log("Async file created success!");
  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    console.log("Async file content: " + data);
  });
  fs.appendFile(asyncFilePath, "\nThis is new line", (err) => {
    console.log("New line added");
    fs.readFile(asyncFilePath, "utf-8", (err, data) => {
      if (err) throw err;
      console.log("Async file updated content:\n" + data);
    });
  });
});
