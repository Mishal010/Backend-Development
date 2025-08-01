// Used to work with file and directories
const path = require("path");

console.log("Directory Name: " + path.dirname(__filename));
console.log("File name: " + path.basename(__filename));
console.log("File extension: " + path.extname(__filename));
const joinPath = path.join("/user", "document", "node", "projects");
console.log("Joined Path: " + joinPath);
const resovPath = path.resolve("user", "document", "node", "project");
console.log("Resolved path : ", resovPath);
const normalizePath = path.normalize("/user/.document/../node/project");
console.log("normalizePath", normalizePath);
