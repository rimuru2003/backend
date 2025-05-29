const crypto = require("crypto");

const token = crypto.randomBytes(22).toString("hex");
console.log("Reset token:", token);

const message = "hello world"

const buffer = Buffer.from(message , "utf-8").toString("hex")

console.log(buffer)

const hex = "68656c6c6f20776f726c64"; // This is "Hello World" in hex

// Convert hex to buffer, then to original string
const original = Buffer.from(hex, "hex").toString("utf8");

console.log("Original Text:", original);



const hash = crypto.createHash("sha256").update("mypassword").digest("hex");
console.log("Hashed password:", hash);









const path = require("path");

const filePath = path.join(__dirname, "data", "info.txt");
console.log(filePath);





const os = require("os");

console.log("Platform:", os.platform());
console.log("Free Memory:", os.freemem());






const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from my server!");
});

server.listen(3000, () => console.log("Server running on port 3000"));











const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("greet", () => {
  console.log("Hello Aryan! 🎉");
});

myEmitter.emit("greet"); // Triggers the event
