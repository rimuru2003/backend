const fs = require("fs");
const path = require("path");
const EventEmitter = require("events");

const emits = new EventEmitter();

const filePath = path.join(__dirname, "eventlog.json");

// Step 1: Read existing data (if any)
let eventcount = {
  login: 0,
  logout: 0,
  purchase: 0,
  update: 0,
};

if (fs.existsSync(filePath)) {
  const data = fs.readFileSync(filePath, "utf-8");
  eventcount = JSON.parse(data);
}

const updateEventFile = () => {
  fs.writeFileSync(filePath, JSON.stringify(eventcount, null, 2), "utf-8");
};

// Step 2: Event Listeners
emits.on("login", (a) => {
  eventcount.login++;
  updateEventFile();
  console.log(`${a.name} is logged in`);
});

emits.on("logout", (a) => {
  eventcount.logout++;
  updateEventFile();
  console.log(`${a.name} is logged out`);
});

emits.on("purchase", (a) => {
  eventcount.purchase++;
  updateEventFile();
  console.log(`I have bought a new ${a.bought}`);
});

emits.on("update", (a) => {
  eventcount.update++;
  updateEventFile();
  console.log(`Need to update my mail with: ${a.mail}`);
});

emits.on("summary", () => {
  console.log("Event Summary:", eventcount);
});

// Step 3: Emit some events
emits.emit("login", { name: "Aryan" });
emits.emit("purchase", { name: "Aryan", bought: "laptop" });
emits.emit("update", { name: "Aryan", mail: "snjvbsfj@gmail.com" });
emits.emit("logout", { name: "Aryan" });
emits.emit("summary");
