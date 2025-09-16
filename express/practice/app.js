import { readFile, writeFile } from "fs/promises";
import { createServer, Server } from "http";
import crypto from "crypto";
import path from "path";

const PORT = process.env.PORT || 3000;
const DATA_file = path.join("public", "link.json");

const serverFile = async (res, pathfile, contentType) => {
  try {
    const data = await readFile(pathfile);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": contentType });
    res.end("404 not found ");
  }
};

const localLink = async () => {
  try {
    const data = await readFile(DATA_file, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};

const server = createServer(async (req, res) => {
  console.log(req.url);

  if (req.method === "GET") {
    if (req.url === "/") {
      await serverFile(res, path.join("public", "index.html"), "text/html");
    } else if (req.url === "/style.css") {
      await serverFile(res, path.join("public", "style.css"), "text/css");
    } else if (req.url === "/links") {
      const links = await loadLinks();
      const shortCode = req.url.slice(1);
      console.log("links red. ", req.url);

      if (links[shortCode]) {
        res.writeHead(302, { location: links[shortCode] });
        return res.end();
      }

      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("Shortened URL is not found");
    }
  }

  if (req.method === "POST" && req.url === "/shorten") {
    const data = await localLink();

    let body = "";
    req.on("body", (chunks) => (body += chunks));

    req.end("end", async () => {
      console.log(body);
      const { url, shortCode } = JSON.parse(body);

      if (!url) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end("URL is required");
      }

      const finalcode = shortCode || crypto.randomBytes(4).toString("hex");

      if (links[finalcode]) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        return res.end("Short code already exists. Please choose another.");
      }

      links[finalcode] = url;
      await saveLinks(links);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
