const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} received.`);

    //loading index on demand
    if (req.url === "/") {
        const indexFilePath = path.join(__dirname, "index.html");
        fs.readFile(indexFilePath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error loading ${indexFilePath}: ${err}`);
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/index.html") {
        const cssPath = path.join(__dirname, "index.html");
        fs.readFile(cssPath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error loading ${cssPath}: ${err}`);
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/index.html?") {
        const cssPath = path.join(__dirname, "index.html");
        fs.readFile(cssPath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error loading ${cssPath}: ${err}`);
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

        //loading style.css on demand
    } else if (req.url === "/style.css") {
        const cssPath = path.join(__dirname, "style.css");
        fs.readFile(cssPath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error loading ${cssPath}: ${err}`);
                return;
            }

            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });

        // loading intakes.html on demand
    } else if (req.url === "/intakes.html") {
        const cssPath = path.join(__dirname, "intakes.html");
        fs.readFile(cssPath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error loading ${cssPath}: ${err}`);
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

        //loading exits.html on demand
    } else if (req.url === "/exits.html") {
        const cssPath = path.join(__dirname, "exits.html");
        fs.readFile(cssPath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error loading ${cssPath}: ${err}`);
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

        //loading inventory on demand
    } else if (req.url === "/inventory.html") {
        const cssPath = path.join(__dirname, "inventory.html");
        fs.readFile(cssPath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error loading ${cssPath}: ${err}`);
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
        //loading app.js on demand
    } else if (req.url === "/app.js") {
        const cssPath = path.join(__dirname, "app.js");
        fs.readFile(cssPath, "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end(`Error loading ${cssPath}: ${err}`);
                return;
            }

            res.writeHead(200, { "Content-Type": "text/javascript" });
            res.end(data);
        });
    
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(`Resource not found: ${req.url}`);
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//connection to database
const mysql = require("mysql2");

// Create a connection to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "master",
    password: "Donita0708",
    database: "tpwinestock",
});

// Test the connection
connection.connect((error) => {
    if (error) {
        console.error("Error connecting to database: ", error);
    } else {
        console.log("Connected to database!");
    }
});
