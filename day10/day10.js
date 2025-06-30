const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("<h1>Welcome to my port </h1>");
        res.end();
    } 

     if (req.url === "/aru") {
        res.setHeader("Content-Type", "plain/text")
        res.write("Welcome to my page");
        res.end();
    } 
});

const port = 3001;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// to restart server in node use --watch after node 

// node --watch day10.js