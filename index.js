require("dotenv").config();
const http = require("http");
const url = require("url");
const debug = require("debug")("calc");
const { program } = require("commander");
const chalk = require("chalk");
const { error } = require("./error");
const { errorNum } = require("./errorNum");
const calculadora = require("./calculadora");

program.option("-p, --port <number>");
program.parse();

let { port } = program.opts();

const server = http.createServer();
if (port === undefined) {
  port = process.env.SERVER_PORT;
}

server.listen(port, () => {
  debug(chalk.green(`Server is up at http://localhost:${port}/calculadora`));
});
server.on("error", (error) => {
  debug(chalk.red(`Error on server ${port}: Error:${error.message}`));
});

server.on("request", (request, response) => {
  debug(chalk.yellow(`Your request has arrived at ${port}`));

  const query = url.parse(request.url, true).query;

  debug(request.url);
  const a = query.a;
  const b = query.b;

  if (request.url.startsWith("/calculadora")) {
    if (!isNaN(a) && !isNaN(b)) {
      response.setHeader("Content-type", "text/html");
      response.statusCode = 200;
      response.write(calculadora(a, b));
      response.end();
    } else if (isNaN(a) || isNaN(b)) {
      response.setHeader("Content-type", "text/html");
      response.statusCode = 404;
      response.write(errorNum);
      response.end();
    }
  } else {
    response.setHeader("Content-type", "text/html");
    response.statusCode = 404;
    response.write(error);
    response.end();
  }
});
