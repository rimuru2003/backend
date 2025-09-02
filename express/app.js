import express from "express";
import { PORT } from "./env.js";

const app = express();
// const PORT = process.env.PORT || 3008;

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>hello About US</h1>");
});

app.get("/contact", (req, res) => {
  return res.send(`<h2>Contact Form</h2>
  <form action="/submit" method="post">
    <label>Name: <input type="text" name="name"></label><br>
    <label>Email: <input type="email" name="email"></label><br>
    <label>Message:</label><br>
    <textarea name="message" rows="4"></textarea><br>
    <button type="submit">Send</button>
  </form>`);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
