require("dotenv").config();
const http = require("http");
const url = require("url");
const debug = require("debug")("calc");
const prompt = require("prompt");
const { program } = require("commander");
const chalk = require("chalk");
const calculadora = require("./calculadora");

const server = http.createServer();
const port = process.env.SERVER_PORT;

server.listen(port, () => {
  debug(chalk.green(`Server is up at http://localhost:${port}/calculadora/`));
});
server.on("error", (error) => {
  debug(chalk.red(`Error on server ${port}: Error:${error.message}`));
});

server.on("request", (request, response) => {
  debug(chalk.yellow(`Your request has arrived at ${port}`));

  const query = url.parse(request.url, true).query;
  const a = query.a;
  const b = query.b;

  if (Number.isNaN(a) || Number.isNaN(b)) {
    response.setHeader("Content-type", "text/html");
    response.statusCode = 401;
    response.write(`<head>
      <style>
      body {background-color:grey;font-family:arial;}
      h1   {color: orange; display: flex; justify-content: center;}
      h2   {color: blue;}
      div  {display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;}
      p    {color: black; font-size: 25px; margin:10px}
      span {color: pink;}
      </style>
    </head>
    <body>
    <h1>Calculadora</h1>
    <div ><h2 > Please insert numbers </h2></div>
    </body>`);
    response.end();
  }

  response.setHeader("Content-type", "text/html");
  response.statusCode = 200;
  response.write(
    `
    <head>
      <style>
      body {background-color:grey;font-family:arial;}
      h1   {color: orange; display: flex; justify-content: center;}
      h2   {color: blue;}
      div  {display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;}
      p    {color: black; font-size: 25px; margin:10px}
      span {color: pink;}
      </style>
    </head>
    <body>
    <h1>Calculadora</h1>
    <div >
    <h2 > suma: </h2><p> ${a} + ${b} =<span> ${
      Number(a) + Number(b)
    }</span></p> </div> <div><h2> resta: </h2><p> ${a} - ${b} = <span>${
      Number(a) - Number(b)
    }</span></div><div><h2> multiplicacion: </h2><p> ${a} x ${b} = <span>${
      Number(a) * Number(b)
    }</span></p> </div> <div><h2> division: </h2><p> ${a} / ${b} = <span>${
      Number(a) / Number(b)
    }</span></p> </div></body>
    `
  );
  response.end();
});
