require("dotenv").config();
const http = require("http");
const debug = require("debug")("calc");
const prompt = require("prompt");
const { program } = require("commander");
const chalk = require("chalk");
const calculadora = require("./calculadora");

const server = http.createServer();
server.listen(3002, () => {
  debug("server is up");
});

prompt.start();
program.option("-a --numberA <number>");
program.option("-b --numberB <number>");
program.parse();

const askNumbers = async () => {
  const { numberA, numberB } = await prompt.get(["numberA", "numberB"]);
  const result = calculadora(numberA, numberB);

  debug(chalk.green(`${numberA} + ${numberB} = ${result[0]}`));
  debug(chalk.red(`${numberA} - ${numberB} = ${result[1]}`));
  debug(chalk.yellow(`${numberA} * ${numberB} = ${result[2]}`));
  debug(chalk.blue(`${numberA} / ${numberB} = ${result[3]}`));
};

askNumbers();
