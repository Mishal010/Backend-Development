console.log("Hello Node.JS"); // Use node index.js to run
const array = [1, 2, 3, 4, 5];
console.log("Array : ", array);

setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000);
console.log("Last line of sync code");
