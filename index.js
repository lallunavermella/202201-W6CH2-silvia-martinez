require("dotenv").config();
const http = require("http");
const url = require("url");
const debug = require("debug")("calc");
const prompt = require("prompt");
const { program } = require("commander");
const chalk = require("chalk");
const calculadora = require("./calculadora");

const requestListener = function (req, res) {
  res.writeHead(200, { "Content-type": "text/html" });
  const query = url.parse(req.url, true).query;
  const text = query.a + query.b;

  res.end(text);
};
const server = http.createServer(requestListener);
server.listen(3002);
