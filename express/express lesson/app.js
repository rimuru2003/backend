import express from "express";
import { PORT } from "./env.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from "public"
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
// Serve the form at the root
app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<hi> My userName is  ${req.params.username} </h1>`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formreplace = req.params.slug.replace(/-/g, " ");
  res.send(`<hi> Article  ${req.params.username} by ${formreplace} </h1>`);
});

app.get("/product", (req, res) => {
  console.log(req.query);
  // res.send(`<h> user search for ${req.query.search} </h>`)
  res.send(`<h1> ${req.query.page} ${req.query.limit} </h1>`);
});

// Handle form submission
app.post("/submit", (req, res) => {
  // We are not parsing form data yet
  console.log("Form was submitted!");

  // Send the thank-you page
  res.sendFile(path.join(__dirname, "public", "response.html"));
});

app.use((req,res) => {
  return res.status(404).sendFile(path.join(__dirname, "public" , "pageNot.html"))
})

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

/* ================= NOTES =================

1. express.static("public")
   - Serves all files in public folder (CSS, JS, images, HTML)
   
2. app.get("/")
   - Serves the index.html when user visits the root URL

3. app.post("/submit")
   - Handles the form submission
   - Since we are not using middleware yet, we cannot access form fields
   - We just log "Form was submitted!" for now

4. res.sendFile(...)
   - Sends a full HTML file (thankyou.html) back to the user

*/

// ======================= OPTIONAL MANUAL FILE SEND =======================

// This part is NOT needed because of express.static
// If we wanted, we could manually send index.html like this:

// app.get("/", (req, res) => {
//   // __dirname is not available in ES Modules, we use path with import.meta.url
//   const __dirname = path.dirname(new URL(import.meta.url).pathname);
//   const page = path.join(__dirname, "public", "index.html");
//   res.sendFile(page);
// });

// ======================= START SERVER =======================
