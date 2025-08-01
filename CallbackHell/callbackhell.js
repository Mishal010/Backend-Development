const fs = require("fs");
fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
    return;
  }
  const modifyData = data.toUpperCase();
  fs.writeFile("output.txt", modifyData, (err) => {
    if (err) {
      console.log("Error reading file", err);
      return;
    }
    console.log("Data written to new file");

    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("Error reading file ", err);
      }
      console.log("Data from output.txt: " + data);
    });
  });
});
