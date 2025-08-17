const fs = require("fs/promises");
const path = require("path");

const file = __dirname;
const filename = "apex.txt";
const pathfile = path.join(filename);

async function runFile() {
  try {
     await fs.readdir(file);
     console.log(file)

    await fs.writeFile(pathfile, "hi my anime is apex", "utf-8");

    await fs.readFile(pathfile, "utf-8");

    await fs.appendFile(pathfile, "\n yoyo apex", "utf-8");
    console.log("Data appended");

    await fs.unlink(pathfile);
    console.log("File deleted");
    
  } catch (err) {
    console.error("Error:", err);
  }
}

runFile();
