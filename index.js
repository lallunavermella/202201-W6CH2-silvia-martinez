require("dotenv").config();
const http = require("http");
const debug = require("debug")("calc");
const prompt = require("prompt");
const { program } = require("commander");
const chalk = require("chalk");
const calculadora = require("./calculadora");

const requestListener = function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write("Hello, World!");
  res.end();
};

const server = http.createServer(requestListener);
server.listen(3002);
