const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("<h1>Welcome to my port</h1>");
        res.end();
    } 

     if (req.url === "/abc") {
        res.setHeader("Content-Type", "plain/text")
        res.write("Welcome to my page");
        res.end();
    } 
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
