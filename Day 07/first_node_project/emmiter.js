const EventEmitter = require("events");
const myEmmiter = new EventEmitter();

myEmmiter.on("message", (data) =>{
    console.log("Received MSG", data);
})
myEmmiter.emit("message","Hello World")
