const EventEmitter = require("events");
const myEventEmitter = new EventEmitter();

// registering a listner:
myEventEmitter.on("greet", (name) => {
  console.log("Hello " + name);
});

myEventEmitter.emit("greet", "Boby");
