function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Divide by zero is not allowed");
  }
  return a / b;
}

module.exports = {
  add,
  multiply,
  divide,
};

// EVERY FUNCTION IN A MODULE IS WRAPPED AROUND A MODULE WRAPPER:
// (
//     function(exports,require,module,__filename,__dirname){
//         // Your module code
//     }
// )
