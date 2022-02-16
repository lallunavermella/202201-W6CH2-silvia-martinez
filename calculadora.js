const calculadora = (a, b) => {
  const suma = parseInt(a, 10) + parseInt(b, 10);
  const resta = parseInt(a, 10) - parseInt(b, 10);
  const multiplicacion = parseInt(a, 10) * parseInt(b, 10);
  const division = parseInt(a, 10) / parseInt(b, 10);
  return [suma, resta, multiplicacion, division];
};
module.exports = calculadora;
