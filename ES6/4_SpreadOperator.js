//SPREAD -> (ARRAY DE VALORES) => (LISTA DE VALORES)
//ES6
function printMessage(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

var arrayOfValues = ['Hello', 'ES6', 1, false];
printMessage(...arrayOfValues);

var arraySpreadValues = ['Hello', true, {}, 40, ...arrayOfValues];
//console.log(arraySpreadValues);
