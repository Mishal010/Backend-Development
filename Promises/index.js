function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promise example");
delay(5000).then(() => console.log("After 5 second promise resolved"));
console.log("End");

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("Can not perform division by zero");
    } else {
      resolve(num1 / num2);
    }
  });
}

divide(10, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
