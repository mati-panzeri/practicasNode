const http = require("node:http");
const fyh = require ("./fyh")

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    switch (req.url) {
        case "/":
            res.end("Hello, World!\n");
        break
        case "/fyh":
            res.end(fyh);
        break
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/plain");
            res.end(`<h2>No se puede acceder a http://${hostname}:${port}/${req.url}</h2>`);
        break

    }
    });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
