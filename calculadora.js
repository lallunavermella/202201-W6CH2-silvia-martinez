const calculadora = (a, b) =>
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
    `;

module.exports = calculadora;
