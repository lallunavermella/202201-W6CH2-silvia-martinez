require("dotenv").config();
const http = require("http");
const url = require("url");
const debug = require("debug")("calc");
const prompt = require("prompt");
const { program } = require("commander");
const chalk = require("chalk");
const calculadora = require("./calculadora");

const server = http.createServer();
const port = 3002;

server.listen(port, () => {
  debug(`Server is up at http://localhost:${port}`);
});
server.on("error", (error) => {
  debug(chalk.red(`Error on server ${port}: Error`));
});

server.on("request", (request, response) => {
  debug(`Your request has arrived at ${port}`);

  const query = url.parse(request.url, true).query;
  const a = query.a;
  const b = query.b;

  response.setHeader("Content-type", "text/html");
  response.statusCode = 200;
  response.write(
    `suma: ${a} + ${b} = ${Number(a) + Number(b)} resta: ${a} - ${b} = ${
      Number(a) - Number(b)
    } multiplicacion:${a} x ${b} = ${
      Number(a) * Number(b)
    } division: ${a} / ${b} = ${Number(a) / Number(b)}
    `
  );
  response.end();
});
