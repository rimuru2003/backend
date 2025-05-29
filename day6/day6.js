const fs = require("fs/promises");
const path = require("path");

const file = __dirname;

fs.readdir(file)
  .then(data => console.log("Directory files:", data))
  .catch(err => console.error(err));

const filename = "apex.txt";
const pathfile = path.join(filename);

fs.writeFile(pathfile, "hi my anime is apex", "utf-8")
  .then(() => console.log("Write successful"))
  .catch(err => console.error(err));

fs.readFile(pathfile, "utf-8")
  .then(data => console.log("File content:", data))
  .catch(err => console.error(err));

fs.appendFile(pathfile , "\n yoyo apex", "utf-8")
  .then(() => console.log("Data appended"))
  .catch(err => console.error(err));

fs.unlink(pathfile)
  .then(() => console.log("File deleted"))

  .catch(err => console.error(err));
