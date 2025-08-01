const EventEmitter = require("events");
class MyCustomEventEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello";
  }
  greet(name) {
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
}
const MyCustomEmitter = new MyCustomEventEmitter();
MyCustomEmitter.on("greeting", (input) => {
  console.log(`Greeting event`, input);
});
MyCustomEmitter.greet("Ark");
