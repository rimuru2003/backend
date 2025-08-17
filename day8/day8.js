const EventEmitter = require("events");

const abc = new EventEmitter();

abc.on("greet", (a) => console.log(`hello, name is  ${a.name} and iam a ${a.prof}`));

abc.emit("greet", { name: "Aryan" , prof: "developer" });
